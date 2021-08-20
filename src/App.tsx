import { useEffect } from "react";
import { Nav } from "./features/nav";

function App() {
  useEffect(() => {
    async function load() {
      const response = await fetch("/ping");
      const movies = await response.json();
      console.log("movies", { movies });
    }
    load();
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

export default App;
