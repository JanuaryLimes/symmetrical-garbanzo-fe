import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import theme from "./config/theme";
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

  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
