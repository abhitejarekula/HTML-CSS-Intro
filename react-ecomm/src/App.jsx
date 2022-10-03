import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import AboutUs from "./pages/about-us";
import Auth from "./pages/auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Home from "./pages/Home";

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
