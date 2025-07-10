const {
  registerDonor,
  loginDonor,
  registerRecipient,
  user,
  postRequestInfo,
  getTotalDonor,
  requestTableInfo,
  updateDonationStatus,
  getTotalReq,
  getTotalApv,
  getRecipientStatusInfo,
} = require("../model/donorInfo");
const { getDonorInfo } = require("../model/donorInfo");

exports.addDonor = (req, res, next) => {
  let data = req.body;
  registerDonor(data, (result) => {
    return res.status(200).json(result);
  });
};

exports.requestTableInfo = (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ status: false, msg: "Email is required" });
  }

  requestTableInfo(email, (result) => {
    if (!result.status) {
      return res.status(500).json(result);
    }
    return res.status(200).json(result);
  });
};

exports.addRecipient = (req, res, next) => {
  let data = req.body;
  registerRecipient(data, (result) => {
    return res.status(200).json(result);
  });
};

exports.postRequestInfo = (req, res, next) => {
  let data = req.body;

  postRequestInfo(data, (result) => {
    return res.status(200).json(result);
  });
};

exports.updateDonationStatus = (req, res) => {
  let data = req.body;

  if (!data.status || !data.id) {
    return res.status(400).json({ status: false, msg: "Missing status or id" });
  }

  updateDonationStatus(data, (result) => {
    return res.status(200).json(result);
  });
};

exports.getDonorInfo = (req, res) => {
  getDonorInfo(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching Donor Inforation:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalDonor = (req, res) => {
  getTotalDonor(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalReq = (req, res) => {
  getTotalReq(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total Request:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalApv = (req, res) => {
  getTotalApv(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total Request:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.loginDonor = (req, res, next) => {
  const { email, password, roles } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: false,

      msg: "Email and password are required",
    });
  }

  loginDonor(email, password, roles, (result) => {
    if (result.status) {
      return res.status(200).json(result);
    } else {
      return res.status(401).json(result);
    }
  });
};

exports.user = (req, res, next) => {
  let data = req.body;

  user(data, (result) => {
    return res.status(200).json(result);
  });
};

exports.getRecipientStatusInfo = (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ status: false, msg: "Email is required" });
  }

  getRecipientStatusInfo(email, (result) => {
    if (!result.status) {
      return res.status(500).json(result);
    }
    return res.status(200).json(result);
  });
};
