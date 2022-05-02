import { Home } from "./compo/components/Home";
import { Login } from "./compo/components/Login";
import { Logout } from "./compo/components/Logout";
import { NewOrder } from "./compo/components/NewOrder";
import { Orders } from "./compo/components/Orders";
import { ProtectedRoute } from "./compo/components/ProtextedRoute";
import {Link,Routes,Route}from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Logout" element={<Logout/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/neworder" element={<NewOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;