import Home from "./pages/Home";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";


import AppInfo from "./components/AppInfo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContextProvider>
          <AppInfo />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
