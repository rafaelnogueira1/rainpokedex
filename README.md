# Pokedex

This project was developed as part of a technical challenge for a company. The application is built using **ReactJS** and leverages the **PokeAPI** to provide data about Pokémon.

You can access the project at [https://rainpokedex.vercel.app/](https://rainpokedex.vercel.app/).

## How to Use

To run the project, you need to have Node version >= 18 installed. Follow the steps below to set up and start the application:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/rafaelnogueira1/rainpokedex.git
   ```

2. Navigate to the project folder and install the dependencies using your preferred package manager. Recommend using **pnpm**:

   ```bash
   cd rainpokedex
   pnpm install
   ```

3. After the installation, run the following commands to build and preview the project:

   ```bash
   pnpm build && pnpm preview
   ```

4. The access link for the project will be displayed in the terminal after successful execution 🚀.

Since it doesn't contain any sensitive information, the .env file is already included in the project with the PokeAPI URL.
If the .env file is not present after downloading, create a `.env` file in the root folder of the project and include the following line: `VITE_API_URL=https://pokeapi.co/api/v2`.

## Features

- **User Authentication:** Access to the site is restricted to authenticated users. Create a new account or log in to access the site’s features.
- **Pokémon Filtering:** Filter Pokémon by specific categories, making navigation and search easier.
- **Pokémon Details:** Click on a Pokémon to view detailed information about it.
- **Favorite Pokémon:** Add or remove Pokémon from your list of favorites, referred to as "Pokéball."

## Technologies Used

- [React 18](https://react.dev/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [PokeAPI](https://pokeapi.co/)
