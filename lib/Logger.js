/* eslint-disable no-console */

const util = require('util');

const options = { colors: true, showHidden: false, depth: null };
/**
 * log level debug
 *
 * @param {*} data
 * @param  {...any} args
 */
const debug = (data, ...args) => {
  if (!process.env.DEBUG) {
    return;
  }
  console.debug(util.formatWithOptions(options, data, ...args));
};

/**
 * log level info
 *
 * @param {*} data
 * @param  {...any} args
 */
const log = (data, ...args) => {
  console.log(util.formatWithOptions(options, data, ...args));
};

/**
 * log level info
 *
 * @param {*} data
 * @param  {...any} args
 */
const info = (data, ...args) => {
  console.info(util.formatWithOptions(options, data, ...args));
};

/**
 * log level warning
 *
 * @param {*} data
 * @param  {...any} args
 */
const warn = (data, ...args) => {
  console.warn(util.formatWithOptions(options, data, ...args));
};

/**
 * log level error
 *
 * @param {*} data
 * @param  {...any} args
 */
const error = (data, ...args) => {
  console.error(util.formatWithOptions(options, data, ...args));
};

/**
 *
 * @param {*} data
 * @param  {...any} args
 */
const time = (data, ...args) => {
  console.time(data, ...args);
};

/**
 *
 * @param {*} data
 * @param  {...any} args
 */
const timeLog = (data, ...args) => {
  console.timeLog(data, ...args);
};

/**
 *
 * @param {*} data
 * @param  {...any} args
 */
const timeEnd = (data, ...args) => {
  console.timeEnd(data, ...args);
};

/**
 *
 * @param {*} data
 * @param  {...any} args
 */
const count = (data, ...args) => {
  console.count(data, ...args);
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
