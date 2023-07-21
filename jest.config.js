// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!nanoid)/', // Make sure to include nanoid in transformIgnorePatterns
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '^nanoid$': 'nanoid/non-secure', // Use a non-secure version of nanoid to avoid import issues
    },
  };
  