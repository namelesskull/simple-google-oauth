const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/auth/google/callback'
);

const users = [];

const initiateGoogleAuth = (req, res) => {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
    redirect_uri: 'http://localhost:3000/auth/google/callback',
  });
  res.redirect(url);
};

const handleGoogleCallback = async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    let user = users.find((u) => u.email === payload.email);
    if (!user) {
      user = {
        id: users.length + 1,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
      };
      users.push(user);
    }

    req.session.userId = user.id;
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
};

const handleLogout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const checkAuthStatus = (req, res) => {
  if (req.session.userId) {
    const user = users.find((u) => u.id === req.session.userId);
    res.json({ loggedIn: true, email: user.email });
  } else {
    res.json({ loggedIn: false });
  }
};

module.exports = {
  initiateGoogleAuth,
  handleGoogleCallback,
  handleLogout,
  checkAuthStatus,
};
