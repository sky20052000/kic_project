const express = require("express");
const router = express.Router();
const userController = require("../controller/userController"); 
// profile
router.post("/profile", userController.userProfile)

// login with otp 
router.post("/login", userController.loginUser);

router.post("/verifyOtp", userController.verifyOtp);

// getData
router.get("/dataList",userController.dataList);

module.exports = router;