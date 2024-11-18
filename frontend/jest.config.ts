import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: '<rootDir>/coverage',

  coverageProvider: 'v8',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^jose': require.resolve('jose'),
    '^@panva/hkdf': require.resolve('@panva/hkdf'),
    '^preact-render-to-string': require.resolve('preact-render-to-string'),
    '^preact': require.resolve('preact'),
    '^uuid': require.resolve('uuid'),
  },
  roots: ['<rootDir>/src/tests'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!@react-dnd|react-dnd|dnd-core|react-dnd-html5-backend)',
  ],
};

const createJestConfig = nextJest({
  dir: './src',
});

export default createJestConfig(config);
