import Home from "./pages/Home";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Preview from "./pages/Preview";
import AppContent from "./components/APpContent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContextProvider>
          <AppContent />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
