const express = require("express");
const router = express.Router();
const userController = require("../controller/userController"); 
// profile
router.post("/", userController.userProfile)

// login with otp 
router.post("/", userController.loginUser);

router.post("/", userController.verifyOtp);

// getData
router.get("/",userController.dataList);

module.exports = router;