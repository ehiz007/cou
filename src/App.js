import './Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Reg/LandingPage';
import SignIn from './Pages/Reg/SignIn';
import SignUp from './Pages/Reg/SignUp';
import ForgotPassword from './Pages/Reg/ForgotPassword';
import NewPassword from './Pages/Reg/NewPassword';
import SelectPackage from './Pages/Reg/SelectPackage';
import BusinessReg from './Pages/Reg/BusinessReg';
import Category from './Pages/Reg/Category';
import SubCategory from './Pages/Reg/SubCategory';
import Inventory from './Pages/Inventory/Inventory';
import { useState } from 'react';
import React from 'react';

function App() {

	const [Package, setPackage] = useState('Bronze');
  	return (
		<>	
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ < LandingPage /> } />
					<Route path="/LandingPage" element={ < LandingPage /> } />
					<Route path="/SelectPackage" element={ < SelectPackage Package = {Package} setPackage = {setPackage} /> } />
					<Route path="/SignUp" element={ < SignUp Package = {Package} setPackage = {setPackage}  /> } />
					<Route path="/SignIn" element={ < SignIn /> } />
					<Route path="/ForgotPassword" element={ < ForgotPassword /> } />
					<Route path="/NewPassword" element={ < NewPassword /> } />
					<Route path="/BusinessReg" element={ < BusinessReg /> } />
					<Route path="/Category" element={ < Category /> } />
					<Route path="/SubCategory" element={ < SubCategory /> } />
					<Route path="/Inventory" element={ < Inventory /> } />
				</Routes>
			</BrowserRouter>
		</>
  	);
}

export default App;
