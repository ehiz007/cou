
import React, { useState } from 'react';
import signInImg from '../../Assets/Images/signInImg.jpg';
import logo from '../../Assets/Images/logo.svg';
import { Link } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

function SignIn() {
	const showDate = new Date();
	const showYear = showDate.getFullYear(); 

	// handle password eye
  	const [passwordEye, setPasswordEye] = useState(false);

  	const handlePasswordClick = () => {
    	setPasswordEye(!passwordEye);
  	};

  	return (
		<div>
			<section className='signIn'>
				<div className="contentBx">
					<div className='formBx'>
							<img src={logo} width='180px' className='mb-3 mt-3 pb-3' alt=''></img>

							<h1 >Log into your account</h1>

							<p>Log in now to access the latest improvements
							for your inventory and warehousing performance</p> 
						
							<form action="">

								<div className="inputBx mt-3">
									
									<label htmlFor="uname"><b>User ID</b></label>
									<input type="text" placeholder=" Enter your user ID" name="uname" required></input>
								</div>
								<div className='passwordEye'>
									<div className="inputBx mt-3">
										<label htmlFor="psw"><b>Password</b></label>
										<input 
											type={passwordEye === false ? "password" : "text"} 
											placeholder=" Enter your password" name="psw" required>
										</input>
									</div>

									{/* eye section */}
									<div className='pwdEye'>
										{passwordEye === false ? (
											<AiFillEyeInvisible onClick={handlePasswordClick} />
											) : (
											<AiFillEye onClick={handlePasswordClick} />
										)}
									</div>
								</div>

								<div className='inputCheck mt-3'>
									<div className="remember">
										<label htmlFor=""></label>
										<input type="checkbox" name='' checked='checked' className='me-5' />&nbsp;&nbsp;<span className='keepMe'>Keep me signed in</span>
									</div>
									<div className="forgotPass">
										<label htmlFor=""></label>
										<Link to="/ForgotPassword"  style={{ color: '#bc2230' , fontWeight: 500 }}> Forgot password? </Link>
									</div>
								</div>

								<div className="inputBx">
									<input type="submit" value="Sign in" name=''></input>
								</div>

								<div className='regLink mt-4'>
									<div>
										<label htmlFor=""></label>
										<span>Not registered yet?</span>
									</div>
									<div className="forgotPass">
										<label htmlFor=""></label>
										<Link to="/SignUp"  style={{ color: '#bc2230' , fontWeight: 500, textDecoration: 'underline' }}> create a new account </Link>
									</div>
								</div>

								<div className='regLink mt-4'>
									<div>
										<label htmlFor=""></label>
										<span>&copy;{showYear}&nbsp;Alright reserved</span>
									</div>
									<div>
										<label htmlFor=""></label>
										<span>Terms of service. Privacy policy</span>
									</div>
								</div>
							</form>
					</div>
				</div>

				<div className="imgBx">
					<img src={signInImg} alt="" height="100%"></img>
				</div>
				
			</section>
		</div>
  	)
}

export default SignIn