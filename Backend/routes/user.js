const express = require('express');
const router = express.Router();
const { upload } = require('../multer');

const { registerUser, activateUser, loginUser, getUser } = require('../controllers/user');
const { isAuthenticated } = require('../middlewares/auth');

router.post("/create-user", upload.single('file'), registerUser);
router.post("/activation", activateUser);
router.post("/login-user", loginUser);
router.get("/getuser",isAuthenticated, getUser);



module.exports = router;
