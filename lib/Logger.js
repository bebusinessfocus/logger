/* eslint-disable no-console */
/**
 * log level debug
 *
 * @param {*} data
 * @param  {...any} params
 */
const debug = (data, ...params) => {
  if (!process.env.DEBUG) {
    return;
  }
  console.debug(data, ...params);
};

/**
 * log level info
 *
 * @param {*} data
 * @param  {...any} params
 */
const log = (data, ...params) => {
  console.log(data, ...params);
};

/**
 * log level info
 *
 * @param {*} data
 * @param  {...any} params
 */
const info = (data, ...params) => {
  console.info(data, ...params);
};
/**
 * warning log
 * @param {*} params
 */

/**
 * log level warning
 *
 * @param {*} data
 * @param  {...any} params
 */
const warn = (data, ...params) => {
  console.warn(data, ...params);
};

/**
 * log level error
 *
 * @param {*} data
 * @param  {...any} params
 */
const error = (data, ...params) => {
  console.error(data, ...params);
};

const time = (data, ...params) => {
  console.time(data, ...params);
};
const timeLog = (data, ...params) => {
  console.timeLog(data, ...params);
};
const timeEnd = (data, ...params) => {
  console.timeEnd(data, ...params);
};
const count = (data, ...params) => {
  console.count(data, ...params);
};

module.exports = {
  debug,
  log,
  info,
  warn,
  error,
  time,
  timeLog,
  timeEnd,
  count,
};
