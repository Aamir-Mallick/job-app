import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./components/home";
import Register from "./components/Register";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
