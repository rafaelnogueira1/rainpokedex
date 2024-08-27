import { Providers } from "./context";
import Router from "./routes.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Router />
        <Toaster />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
