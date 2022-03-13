import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../Assets/Images/logo.svg';
// import signUpImg from '../../Assets/Images/signUpImg.jpg';

function LandingPage() {
  return (
    <div>
        <div>
            <h1 className='text-center mt-5 mb-5'>
                Landing Page
            </h1>
        </div>
        <div className="inputBx" style={{textAlign: "center"}}>
		    <Link to="/SelectPackage">Register</Link> <br></br>
        <Link to="/Inventory">Inventory</Link>
		</div>
        
    </div>

  )
}

export default LandingPage

