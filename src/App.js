import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  SignIn,
  SignUp,
  Profile,
  Offers,
  ForgotPassword,
} from "./pages";
import { Header } from "./components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
