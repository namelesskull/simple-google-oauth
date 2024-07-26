# Google OAuth 2.0 with Express.js

This project shows how to integrate Google OAuth 2.0 with an Express.js application.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/namelesskull/simple-google-oauth.git
   cd simple-google-oauth
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   ```bash
   touch .env
   ```

   Copy this `.env.example` to `.env` and add your Google OAuth credentials:

   ```plaintext
   GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
   GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
   SESSION_SECRET="YOUR_SESSION_SECRET"
   ```

4. **Configure Google OAuth:**

   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a project and set up OAuth 2.0 credentials.
   - Add the redirect URI `http://localhost:3000/auth/google/callback`.

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

   or using nodemon

   ```bash
   npm run dev
   ```

2. **Authenticate:**

   - Visit `http://localhost:3000/` and follow the link to sign in with Google.

## Troubleshooting

- **redirect_uri_mismatch**: Ensure the redirect URI matches in Google Cloud Console and your app.
- **Missing client_id**: Check your `.env` file for correct `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

## License

MIT License
For more details, check the [Google OAuth 2.0 documentation](https://developers.google.com/identity/protocols/oauth2).

---

Don't forget to ⭐️ [star this repository](https://github.com/namelesskull/simple-google-oauth) and [follow my GitHub](https://github.com/namelesskull) for more updates!
