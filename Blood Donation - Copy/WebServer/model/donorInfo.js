const db = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const secretKey = process.env.JWT_SECRET;

exports.getDonorInfo = (data, callback) => {
  const selectQuery = `select first_name,last_name,email,address,blood_group from donor_information where eligible_for_donation = 'yes';`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};
exports.getTotalDonor = (data, callback) => {
  const selectQuery = `select count(email) as totalDonor,sum(blood_donate_in_ml) as totalBlood from donor_information;`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};
exports.getTotalReq = (data, callback) => {
  const selectQuery = `select count(donor_email) as totalRequest from donation_records;`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "failed to get total Request" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};
exports.getTotalApv = (data, callback) => {
  const selectQuery = `select count(status) as totalApprove from donation_records where status='accept';`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "failed to get total Request" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.requestTableInfo = (email, callback) => {
  let query = `SELECT 
      dr.id,
      dr.donor_email, 
      dr.recipient_email, 
      dr.blood_group, 
      dr.status,
      dr.recipient_first_name,
      dr.recipient_last_name

  FROM 
      donation_records AS dr
      JOIN
      donor_information ON dr.donor_email = donor_information.email
      WHERE
      dr.donor_email = ? and dr.status='pending'
      ;`;
  db.query(query, [email], function (err, result) {
    if (err) {
      callback({ status: false, msg: err });
    }
    callback({ status: true, data: result });
  });
};

exports.updateDonationStatus = (data, callback) => {
  let updateQuery = `UPDATE donation_records SET status = ? WHERE id = ?`;

  db.query(updateQuery, [data.status, data.id], function (err, result) {
    if (err) {
      return callback({ status: false, msg: err.message });
    }
    if (result.affectedRows === 0) {
      return callback({
        status: false,
        msg: "No record found with the given id",
      });
    }
    callback({ status: true, msg: "Record updated successfully" });
  });
};

exports.registerDonor = (data, callback) => {
  let createQuery = "INSERT INTO donor_information SET ?";

  db.query(createQuery, data, function (err) {
    if (err) {
      return callback({ status: false, msg: err });
    }
    callback({ status: true, data: "Donor information added successfully" });
  });
};

exports.registerRecipient = (data, callback) => {
  let createQuery = "INSERT INTO recipient_information SET ?";

  db.query(createQuery, data, function (err) {
    if (err) {
      return callback({ status: false, msg: err });
    }
    callback({
      status: true,
      data: "Recipient information added successfully",
    });
  });
};

exports.loginDonor = (email, password, roles, callback) => {
  let query;
  if (roles == "recipient") {
    query = "SELECT * FROM recipient_information WHERE email = ?";
  } else {
    query = "SELECT * FROM donor_information WHERE email = ?";
  }

  db.query(query, [email], function (err, results) {
    if (err) {
      return callback({ status: false, msg: "Database error" });
    }
    if (results.length === 0) {
      return callback({
        status: false,
        msg: "User not found",
        statusCode: 401,
      });
    }
    const user = results[0];
    if (password === user.password) {
      const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
        expiresIn: "1h",
      });
      callback({
        status: true,
        data: roles,
        email: email,
        msg: "Login successful",
        token: token,
      });
    } else {
      callback({ status: false, msg: "Invalid password", statusCode: 401 });
    }
  });
};
exports.user = (data, callback) => {
  const saltRounds = 10;

  bcrypt.hash(data.password, saltRounds, (err, hashedPassword) => {
    if (err) {
      return callback({ status: false, msg: "Error encrypting password" });
    }

    data.password = hashedPassword;

    let createQuery = "INSERT INTO users SET ?";

    db.query(createQuery, data, function (err) {
      if (err) {
        return callback({ status: false, msg: err });
      }
      callback({ status: true, data: "user information added successfully" });
    });
  });
};

exports.postRequestInfo = (data, callback) => {
  const selectQuery = `INSERT INTO donation_records SET ?`;

  db.query(selectQuery, data, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getRecipientStatusInfo = (email, callback) => {
  let query = `select dr.status,dr.donor_email from donation_records as dr where dr.recipient_email=?`;
  db.query(query, [email], function (err, result) {
    if (err) {
      callback({ status: false, msg: err });
    }
    callback({ status: true, data: result });
  });
};
