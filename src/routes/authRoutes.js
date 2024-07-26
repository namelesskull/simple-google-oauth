const express = require('express');
const {
  initiateGoogleAuth,
  handleGoogleCallback,
  handleLogout,
  checkAuthStatus,
} = require('../handler/authHandler');

const router = express.Router();

router.get('/google', initiateGoogleAuth);
router.get('/google/callback', handleGoogleCallback);
router.get('/logout', handleLogout);
router.get('/status', checkAuthStatus);

module.exports = router;
