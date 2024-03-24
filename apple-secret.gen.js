const dotenv = require('dotenv');
const { SignJWT } = require('jose');
dotenv.config({ path: './.env.local' });
const { createPrivateKey } = require('crypto');

const getAppleToken = async () => {
  const key = `-----BEGIN PRIVATE KEY-----\n${process.env.APPLE_PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`;

  const appleToken = await new SignJWT({})
    .setAudience('https://appleid.apple.com')
    .setIssuer(`${process.env.APPLE_TEAM_ID}`)
    .setIssuedAt(new Date().getTime() / 1000)
    .setExpirationTime(new Date().getTime() / 1000 + 3600 * 2)
    .setSubject(`${process.env.APPLE_ID}`)
    .setProtectedHeader({
      alg: 'ES256',
      kid: process.env.APPLE_KEY_ID,
    })
    .sign(createPrivateKey(key));
  return appleToken;
};

(async () => {
  console.log(await getAppleToken());
})();
