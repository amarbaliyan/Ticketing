import { jest } from '@jest/globals';

export const natsWrapper = {
  client: {
    publish: jest.fn().mockImplementation((...args: unknown[]) => {
      const callback = args[2] as () => void;
      callback();
    }),
  },
};