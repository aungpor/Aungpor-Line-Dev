import CryptoJS from "crypto-js";

export const signatureEncrypt = (
  body,
  userSecret = "",
  uuid,
  nonmemberSecret = "",
) => {
  try {
    if (!body) return;
    let SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

    let bodyEncrypt = body;
    bodyEncrypt.tid = uuid;

    bodyEncrypt = JSON.stringify(bodyEncrypt);

    const userSecretDecrypt = CryptoJS.AES.decrypt(userSecret, SECRET_KEY);
    const secretDecrypt = userSecretDecrypt.toString(CryptoJS.enc.Utf8);

    let encrypted = CryptoJS.enc.Base64.stringify(
      CryptoJS.HmacSHA256(bodyEncrypt, secretDecrypt || nonmemberSecret),
    );

    return encrypted;
  } catch (error) {
    return "";
  }
};
