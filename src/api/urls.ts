// import {GOOGLE_API_KEY} from '@env';
// console.log('📢 GOOGLE_API_KEY: ', GOOGLE_API_KEY);

const GOOGLE_API_KEY = 'AIzaSyA_0XqXshuPwYVrvaUU4LVrSDM3QHXmfMI';
const useDomain = '';
const GOOGLE_SHEET_ID = '1jDYvzM4ggKjLtGG8yPwE4ajUsexSXS6Reu0jmuQ_lt0';
console.log('📢 GOOGLE_SHEET_ID: ', GOOGLE_SHEET_ID);

export default {
  googleSheets:
    useDomain +
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/גיליון1?valueRenderOption=FORMATTED_VALUE&key=${GOOGLE_API_KEY}`,
};
