import {logDev} from '../utils/utils';
import urls from './urls';

const fetchInterceptor = async (
  url: string,
  method: string,
  body?: unknown,
) => {
  logDev(`fetchApi url ${method}:`, url);

  let params: any = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
    method: method,
  };
  if (body) {
    params.body = JSON.stringify(body);
    logDev('fetchApi body: ', params.body);
  }
  try {
    const res = await fetch(url, params);
    const responseStatus = res.status;
    logDev('📢responseStatus: ', responseStatus);
    switch (responseStatus) {
      case 200:
        logDev('success fetch');
        const resJson = await res.json();
        return resJson;
      default: {
        logDev('status error fetch: ', responseStatus);
        const resJson = await res.json();
        return resJson;
      }
    }
  } catch (error) {
    logDev('error fetch interceptor: ', error);
    return error;
  }
};

export const getInvetoryRequest = () => {
  return fetchInterceptor(urls.googleSheets, 'GET');
};
