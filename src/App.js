import Header from "./components/Header";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./screens/About";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
