import { pathsToModuleNameMapper } from 'ts-jest';

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
import { compilerOptions } from './tsconfig.json';

import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testRegex: '(\\.|/)(test|spec)\\.(ts)?$',
  coverageDirectory: 'coverage',
  resetMocks: true,
  resetModules: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],

  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
};

export default jestConfig;
