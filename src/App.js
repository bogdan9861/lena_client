import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Characters from "./pages/characters/Characters";
import Mangaka from "./pages/mangaka/Mangaka";
import Seasons from "./pages/seasons/Seasons";
import About from "./about/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/characters" Component={Characters} />
        <Route path="/mangaka" Component={Mangaka} />
        <Route path="/seasons" Component={Seasons} />
        <Route path="/about" Component={About} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
