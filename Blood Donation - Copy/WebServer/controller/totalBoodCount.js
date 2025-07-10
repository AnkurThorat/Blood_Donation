// controller/totalBloodCount.js
const {
  getTotalBloodCountOf_A_Positive,
  getTotalBloodCountOf_A_Negative,
  getTotalBloodCountOf_B_Positive,
  getTotalBloodCountOf_B_Negative,
  getTotalBloodCountOf_O_Positive,
  getTotalBloodCountOf_O_Negative,
  getTotalBloodCountOf_AB_Positive,
  getTotalBloodCountOf_AB_Negative,
} = require("../model/totalBloodCount");

exports.getTotalBloodCountOfAPositive = (req, res) => {
  getTotalBloodCountOf_A_Positive(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfANegative = (req, res) => {
  getTotalBloodCountOf_A_Negative(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfBPositive = (req, res) => {
  getTotalBloodCountOf_B_Positive(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfBNegative = (req, res) => {
  getTotalBloodCountOf_B_Negative(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfOPositive = (req, res) => {
  getTotalBloodCountOf_O_Positive(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfONegative = (req, res) => {
  getTotalBloodCountOf_O_Negative(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfABPositive = (req, res) => {
  getTotalBloodCountOf_AB_Positive(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};

exports.getTotalBloodCountOfABNegative = (req, res) => {
  getTotalBloodCountOf_AB_Negative(req.body, (response) => {
    if (response.status) {
      res.status(200).json(response.data);
    } else {
      console.error("Error fetching total blood count:", response.msg);
      res.status(500).json({ error: response.msg });
    }
  });
};
