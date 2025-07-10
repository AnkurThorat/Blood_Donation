const express = require("express");
const router = express.Router();
const {
  addDonor,
  loginDonor,
  getDonorInfo,
  addRecipient,
  user,
  postRequestInfo,
  getTotalDonor,
  requestTableInfo,
  updateDonationStatus,
  getTotalReq,
  getTotalApv,
  getRecipientStatusInfo
} = require("../controller/donorInfo");
const {
  getTotalBloodCountOfAPositive,
  getTotalBloodCountOfANegative,
  getTotalBloodCountOfBPositive,
  getTotalBloodCountOfBNegative,
  getTotalBloodCountOfOPositive,
  getTotalBloodCountOfONegative,
  getTotalBloodCountOfABPositive,
  getTotalBloodCountOfABNegative,

} = require("../controller/totalBoodCount");

router.get("/getInformation/A_Positive", getTotalBloodCountOfAPositive);
router.get("/getInformation/A_Negative", getTotalBloodCountOfANegative);
router.get("/getInformation/B_Positive", getTotalBloodCountOfBPositive);
router.get("/getInformation/B_Negative", getTotalBloodCountOfBNegative);
router.get("/getInformation/O_Positive", getTotalBloodCountOfOPositive);
router.get("/getInformation/O_Negative", getTotalBloodCountOfONegative);
router.get("/getInformation/AB_Positive", getTotalBloodCountOfABPositive);
router.get("/getInformation/AB_Negative", getTotalBloodCountOfABNegative);
router.get("/getInformation/getDonorInfo", getDonorInfo);
router.get("/getInformation/getTotal", getTotalDonor);
router.get("/getInformation/getTotalReq", getTotalReq);
router.get("/getInformation/getTotalApv", getTotalApv);
router.post("/getInformation/createDonor", addDonor);
router.post("/getInformation/createRecipient", addRecipient);
router.get("/getInformation/requestTableInfo", requestTableInfo);
router.put("/getInformation/updateDonationStatus", updateDonationStatus);
router.post("/getInformation/loginDonor", loginDonor);
router.post("/getInformation/createUser", user);
router.post("/getInformation/postRequestInfo", postRequestInfo);
router.get("/getInformation/getRecipientStatusInfo", getRecipientStatusInfo);

module.exports = router;
