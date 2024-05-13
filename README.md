# Ecommerce App

## Project Overview

The ecommerce app is a modern web application built using cutting-edge technologies such as TypeScript, Vite, and Jest. The project aims to provide a seamless shopping experience for users, with a focus on performance, scalability, and maintainability.

## Technology Stack

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="24" alt="typescript" /> <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" height="24" alt="vite" /> <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="24" alt="jest" /> <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" height="24" alt="eslint" /> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" height="24" alt="prettier" /> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" height="24" alt="Sass" />

- **TypeScript**: Used for writing type-safe and maintainable code.
- **Vite**: A modern development server and build tool that provides fast and efficient development experiences.
- **Jest**: A popular testing framework for JavaScript applications.
- **ESLint**: A linter that helps maintain code quality and consistency.
- **Prettier**: A code formatter that ensures consistent code style.
- **Sass**: A CSS preprocessor that provides features like variables, nesting, and mixins.

## Husky Hooks

<img src="https://miro.medium.com/v2/resize:fit:800/1*S3u42EBG_BMesapjXHy06w.jpeg" height="48" alt="husky" />

The project uses **Husky** hooks to enforce code _quality_ and _consistency_. The following hooks are configured:

- `commit-msg`: Ensures commit messages follow the conventional commit format
- `pre-commit`: Runs lint-staged and npm run test to ensure code quality and test coverage before committing changes

## Available Scripts

`test`
Runs Jest tests with coverage reporting.

`test:watch`
Runs Jest tests in watch mode.

`dev`
Starts the Vite development server.

`build`
Builds the application using Vite.

`serve`
Starts a static server using the serve package to serve the built application files from the dist directory.

`preview`
Starts the Vite preview server.

`lint`
Runs ESLint with the configured rules and plugins.

`format`
Runs Prettier to format code.

`lint:fix`
Runs ESLint with the --fix option to automatically fix linting errors.

`prepare`
Installs Husky hooks.

## Setting up and Running the Project Locally

1. Clone the repository using `git clone https://github.com/annatvali/ecommerce-app.git`
2. Install dependencies using `npm install`
3. Run `npm run prepare` to install Husky hooks
4. Run `npm run dev` to start the Vite development server
5. Open `http://localhost:3000` in your browser to access the application
