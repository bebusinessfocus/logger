const { logger } = require('./index');

const myObject = {
  a: 'a',
  b: {
    c: 'c',
    d: {
      e: 'e',
      f: {
        g: 'g',
        h: {
          i: 'i',
        },
      },
    },
  },
};
console.log('console.log(myObject)');
console.log(myObject);

console.log('logger.log(myObject)');
logger.log(myObject);

console.log("logger.log('clever info', { myObject })");
logger.log('clever info', { myObject });
