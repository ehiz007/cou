import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.svg';
import signUpImg from '../../Assets/Images/signUpImg.jpg';

function BusinessReg() {
  const showDate = new Date();
	const showYear = showDate.getFullYear(); 
  	return (
		<div>
			<section className='signIn'>
				<div className="contentBx">
					<div className='formBx'>
							<img src={logo} width='180px' className='mb-3 mt-3 pb-3' alt=''></img>

							<h1>Create a business account</h1>

							{/* <p className='mb-2'>Start your 14 days free trial. No credit card required. </p> */}
						
							<form action="">

								{/* <div className="inputBx">
									<button>
										<span>
											<img src={googleIcon} width="30px" />&nbsp;
											Log in with Google
										</span>
									</button>
								</div>
								<h6 className='HoriLine'>Or</h6> */}

								<div className="inputBx mt-3">
									<label htmlFor="bname"><b>Business Name</b></label>
									<input type="text" placeholder=" Enter your business name" name="bname" required></input>
								</div>

								{/* <div className="inputBx mt-3">
									<label htmlFor="accId"><b>Account ID</b></label>
									<input type="text" placeholder=" Enter your account ID" name="accId" required></input>
								</div> */}

								<div className="inputBx mt-3">
									<label htmlFor="bAddress"><b>Business Address</b></label>
									<input type="text" placeholder=" Enter your business address" name="bAddress" required></input>
								</div>
								<div className="inputBx mt-3">
									<label htmlFor="country"><b>Country</b></label>
									<input type="text" placeholder=" Enter your country" name="country" required></input>
								</div>
								<div className="inputBx mt-3">
									<label htmlFor="state"><b>State</b></label>
									<input type="text" placeholder=" Enter your state" name="state" required></input>
								</div>

								<div className="inputBx mt-3">
									<input type="submit" value="Ok" name=''></input>
								</div>

								{/* <div className='regLink mt-3'>
									<div>
										<label htmlFor=""></label>
										<span>Already have an account?</span>
									</div>
									<div className="forgotPass">
										<label htmlFor=""></label>
										<Link to="/SignIn"  style={{ color: '#bc2230' , fontWeight: 500, textDecoration: 'underline' }}> Log in</Link>
									</div>
								</div> */}

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
					<img src={signUpImg} alt=""></img>
				</div>
				
			</section>
		</div>
  	)
}

export default BusinessReg