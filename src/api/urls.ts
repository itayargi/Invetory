import {GOOGLE_API_KEY, GOOGLE_SHEET_ID} from '@env';

const useDomain = '';

export default {
  googleSheets:
    useDomain +
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/גיליון1?valueRenderOption=FORMATTED_VALUE&key=${GOOGLE_API_KEY}`,
};
