# Vue Application

This README provides instructions on how to set up, run, and build the Vue application. Please follow the steps below to get the application running smoothly on your local machine.

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [pnpm](https://pnpm.io/id/) or [npm](https://www.npmjs.com/)

To verify the installations, run the following commands:

```bash
node -v
pnpm -v
npm -v

```

---

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/MuammarRizal/SGT-Coding-Test.git
```

Navigate to the project directory:

```bash
cd SGT-Coding-Test
```

### 2. Install Dependencies

Install all required dependencies by running:

```bash
pnpm install
```

or, if using npm:

```bash
npm install
```

---

## Development Server

To start the development server, run the following command:

```bash
pnpm run dev
```

or, if using Yarn:

```bash
npm dev
```

The application will be available at:

```
http://localhost:5173
```

By default, Vite uses port `5173`. If this port is already in use, it will pick another available port.

---

## Build for Production

To create a production build of the application, run:

```bash
pnpm run build
```

or, if using npm:

```bash
npm build
```

The built files will be generated in the `dist` folder. You can deploy this folder to any static hosting service.

---

## Preview Production Build

To preview the production build locally, use the following command:

```bash
pnpm run preview
```

or, if using npm:

```bash
npm preview
```

This will serve the `dist` folder on a local server for testing.

---

## Project Structure

Below is a simplified view of the project structure:

```
project-folder/
├── public/             # Static assets
├── src/
│   ├── assets/         # Application assets (e.g., images, styles)
│   ├── components/     # Vue components
│   ├── views/          # Application views/pages
│   ├── App.vue         # Root Vue component
│   └── main.js         # Application entry point
├── package.json        # Project configuration
├── vite.config.js      # Vite configuration
└── README.md           # Documentation
```

---

## Scripts

The following scripts are available in the `package.json` file:

- `pnpm run dev`: Start the development server.
- `pnpm run build`: Build the application for production.
- `pnpm run preview`: Preview the production build.
- `pnpm run lint`: Run linter to check code quality.

---

## Troubleshooting

If you encounter any issues while running the application, try the following:

1. Ensure all dependencies are installed:

   ```bash
   pnpm install
   ```

2. Clear cache and reinstall dependencies:

   ```bash
   rm -rf node_modules package-lock.json
   pnpm install
   ```

3. Check for the correct Node.js version.

4. Review error messages in the terminal for more details.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding!
