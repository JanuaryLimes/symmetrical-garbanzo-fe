import { useEffect } from "react";
import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    async function load() {
      const response = await fetch("/ping");
      const movies = await response.json();
      console.log("movies", { movies });
    }
    load();
  }, []);

  return <AppRoutes />;
}

export default App;
