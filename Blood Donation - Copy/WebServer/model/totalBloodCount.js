const db = require("../database");

exports.getTotalBloodCountOf_A_Positive = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_A_Positive from donor_information where blood_group="A+"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_A_Negative = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_A_Negavtive from donor_information where blood_group="A-"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_B_Positive = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_B_Positive from donor_information where blood_group="B+"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_B_Negative = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_B_Negavtive from donor_information where blood_group="B-"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_O_Positive = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_O_Positive from donor_information where blood_group="O+"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_O_Negative = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_O_Negavtive from donor_information where blood_group="O-"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_AB_Positive = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_AB_Positive from donor_information where blood_group="AB+"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};

exports.getTotalBloodCountOf_AB_Negative = (data, callback) => {
  const selectQuery = `select count(blood_group) as total_blood_of_AB_Negavtive from donor_information where blood_group="AB-"`;

  db.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Database error:", err);
      callback({ status: false, msg: "Database query failed" });
    } else {
      callback({ status: true, data: rows });
    }
  });
};
