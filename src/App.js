import "./styles/main.css";

import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
		<Router>
			<Navbar />

			<Routes>
				<Route path="./" element={<Home/>}/>
				<Route path="./projects" element={<Projects/>}/>
				<Route path="./project/:id" element={<Project/>}/>
				<Route path="./portfolio/contacts" element={<Contacts/>}/>
			</Routes>

			<Footer />
		</Router>
		
    </div>
  );
}

export default App;
