import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route path="auth" element={<Auth />}>
						<Route
							path="login"
							element={<Login />}
						/>
						<Route
							path="register"
							element={<Register />}
						/>
					</Route>

					<Route path="cart" element={<Cart />} />

					<Route
						path="checkout"
						element={<Checkout />}
					/>

					<Route
						path="about-us"
						element={<AboutUs />}
					/>

					<Route
						path="contact"
						element={<Contact />}
					/>

					<Route
						path="products"
						// element={<Contact />}
					>
						<Route path=":category">
							<Route path="chair" />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
