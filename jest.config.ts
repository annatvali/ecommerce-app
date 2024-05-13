/** @type {import('ts-jest').JestConfigWithTsJest} */
import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
