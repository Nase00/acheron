/* eslint no-console:0 */
/* globals console */
import path from 'path';
import colors from 'colors/safe';
import { argv } from 'yargs';

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

export const isProd = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';

export const SERVER_PORT = normalizePort(process.env.PORT || '3000');
export const WEB_SOCKET_PORT = 4001;

const ROOT = '../';
export const PUBLIC_PATH = path.join(__dirname, ROOT, 'public');
export const VIEWS_PATH = path.join(__dirname, ROOT, 'views');
