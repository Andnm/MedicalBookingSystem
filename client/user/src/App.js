import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import UserRouter from "./routes/UserRouter";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext";
import { ToastContainer } from "react-toastify";
import StoreContextProvider from "./context/storeContext";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <StoreContextProvider>
          <AuthContextProvider>
            <UserRouter />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </AuthContextProvider>
        </StoreContextProvider>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
