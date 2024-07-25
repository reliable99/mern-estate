import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import About from "./pages/About"
import Profile from "./pages/Profile"
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App