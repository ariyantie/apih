require('dotenv').config();

const apiKey = process.env.FORCE_API_KEY || process.env.API_KEY;
const secToken = process.env.SEC_TOKEN || "";

function validateRequiredEnv() {
    const missing = [];

    if (!apiKey) {
        missing.push('FORCE_API_KEY (atau API_KEY)');
    }

    if (!secToken) {
        missing.push('SEC_TOKEN');
    }

    if (missing.length > 0) {
        throw new Error(`Variabel lingkungan wajib di-set sebelum menjalankan aplikasi: ${missing.join(', ')}`);
    }
}

module.exports = {
    apiKey,
    secToken,
    validateRequiredEnv
};
