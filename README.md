# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# EnderWebFrontEnd

## Overview
This is a frontend project for EnderWeb, developed using **React** and **Vite**. The project includes the following key features:
- **React** for building the user interface.
- **React Router** for handling navigation.
- **TailwindCSS** for styling.
- **ESLint** for code linting and formatting.

## Branch Protection
The `main` branch is **protected** to ensure code quality and stability. All changes to the `main` branch must go through a Pull Request (PR) process, and the following conditions apply:
- At least **1 approval** is required before merging.
- Please ensure that all tests pass and linting issues are resolved before requesting a merge.

## Installation

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/EnderOrkestraKoro/EnderWeb-Frontend.git
```

### 2. Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### 3. Run the Development Server
To start the development server, run:
```bash
npm run dev
```

### 4. Build the Project
To build the project for production, run:
```bash
npm run build
```

### 5. Preview the Build
To preview the built project, run:
```bash
npm run preview
```

## Contributing

####  ***1. Create a New Branch***  
   Always create a new branch for your work. Use descriptive names for your branches to make it clear what changes they contain.

####  ***2. Make Changes***  
   Implement your changes in your branch. Ensure that your code follows the project's style and conventions.

####  ***3. Commit Your Changes***  
   Commit your changes with a clear and concise message. Follow the format:
- `feat`: A new feature or enhancement for the project.
    - **Example:** `feat(button): add custom styling for primary buttons`

- `fix`: A bug fix or correction.
    - **Example:** `fix(header): resolve logo misalignment issue`

- `doc`: Changes to the documentation.
    - **Example:** `doc(readme): update contributing guidelines`

- `style`: Changes that don't affect the meaning of the code (e.g., formatting, whitespace).
    - **Example:** `style(header): improve alignment of logo`

- `refactor`: Code changes that neither fix a bug nor add a feature but improve code structure.
    - **Example:** `refactor(login): simplify form validation logic`

- `test`: Adding or fixing tests.
    - **Example:** `test(button): add unit tests for custom button component`

- `chore`: Changes to the build process or auxiliary tools (e.g., updates to CI/CD, package manager configuration).
    - **Example:** `chore(package): update react version to 18.3`

####  ***4. Push Your Changes***  
   Push your changes to your branch.

#### ***5. Create a Pull Request (PR)***  
   - Create a PR to the `main` branch of this repository.
   - Ensure the PR meets the following guidelines:
     - At least **1 approval** is required before merging.
     - Ensure all tests pass and the code is properly linted.
     - Provide a clear description of the changes and any related issues.
