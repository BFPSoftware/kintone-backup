import { KintoneRestAPIClient } from '@kintone/rest-api-client';

export const kintoneClient = new KintoneRestAPIClient({
    baseUrl: process.env.KINTONE_BASE_URL || '',
    auth: {
        username: process.env.KINTONE_ADMIN_USERNAME || '',
        password: process.env.KINTONE_ADMIN_PASSWORD || ''
    }
});
