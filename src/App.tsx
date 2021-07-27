import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function load() {
      const response = await fetch("/ping");
      const movies = await response.json();
      console.log("movies", { movies });
    }
    load();
  }, []);

  return <div>hello</div>;
}

export default App;
