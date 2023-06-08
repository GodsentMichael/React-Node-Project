// Create express routers for controller.
const express = require('express');
const router = express.Router();
const { upload } = require('../multer');

// Import controller methods.
const { registerUser, activateUser, loginUser, getUser } = require('../controllers/user');
// Import middlewares.
const { isAuthenticated } = require('../middlewares/auth');

router.post("/create-user", upload.single('file'), registerUser);
router.post("/activation", activateUser);
router.post("/login-user",isAuthenticated, loginUser);
router.get("/getuser",isAuthenticated, getUser);



module.exports = router;
