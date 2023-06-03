// Create express routers for controller.
const express = require('express');
const router = express.Router();
const {upload} = require('../multer')

// Import controller methods.
const {
    registerUser,
} = require('../controllers/user')

router.post("/create-user", upload.single("file"), registerUser);

module.exports = router;