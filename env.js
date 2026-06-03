require('dotenv').config();

const apiKey = process.env.FORCE_API_KEY || process.env.API_KEY;
const rawSecToken = process.env.SEC_TOKEN;
const secToken = rawSecToken || "";

function validateRequiredEnv() {
    const missing = [];

    if (!apiKey) {
        missing.push('FORCE_API_KEY (or API_KEY)');
    }

    if (!rawSecToken) {
        missing.push('SEC_TOKEN');
    }

    if (missing.length > 0) {
        throw new Error(`Required environment variables must be set before running the application: ${missing.join(', ')}`);
    }
}

module.exports = {
    apiKey,
    secToken,
    validateRequiredEnv
};
