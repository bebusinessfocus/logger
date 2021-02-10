const { logger } = require('..');

describe('Logger Tests', () => {
  it('logger exists', () => {
    expect(logger).toBeTruthy();
    expect(typeof logger).toBe('object');
  });
  it('logger functions exists', () => {
    expect(typeof logger.debug).toBe('function');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.warn).toBe('function');
    expect(typeof logger.error).toBe('function');
    expect(typeof logger.time).toBe('function');
    expect(typeof logger.timeLog).toBe('function');
    expect(typeof logger.timeEnd).toBe('function');
    expect(typeof logger.count).toBe('function');
  });
  it('logger debug function', () => {
    global.console = { debug: jest.fn() };
    const spy = jest.spyOn(global.console, 'debug');
    logger.debug('test');
    if (process.env.DEBUG) {
      expect(spy).toHaveBeenCalledTimes(1);
    } else {
      expect(spy).toHaveBeenCalledTimes(0);
    }
  });
  it('logger log function', () => {
    global.console = { log: jest.fn() };
    const spy = jest.spyOn(global.console, 'log');
    logger.log('test');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('logger info function', () => {
    global.console = { info: jest.fn() };
    const spy = jest.spyOn(global.console, 'info');
    logger.info('test');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('logger warn function', () => {
    global.console = { warn: jest.fn() };
    const spy = jest.spyOn(global.console, 'warn');
    logger.warn('test');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('logger error function', () => {
    global.console = { error: jest.fn() };
    const spy = jest.spyOn(global.console, 'error');
    logger.error('test');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
