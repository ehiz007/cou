
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../Assets/Images/logo.svg';
import signUpImg from '../../Assets/Images/signUpImg.jpg';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
// import googleIcon from '../Assets/Images/google.png';


function SignUp({Package}) {

	// handle date
	const showDate = new Date();
	const showYear = showDate.getFullYear(); 

	// handle form events
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode:'onTouched'
    });

	
	// handle submit
	const onSubmit = (data) => {
		const {FirstName, LastName, Email, Phone, Password, BName} = data;
		const payLoad = {
			first_name: FirstName.trim(), 
			last_name: LastName.trim(),
			phone:	Phone.trim(),
			business_name: Phone.trim(),
			package_name: Package,
			email:	Email.trim(),
			password:Password.trim()
			
		};
		
		console.log(JSON.stringify(payLoad));
		// console.log(data);
		const baseUrl =  'http://couriax-saas-api.eba-huvccy4z.us-east-1.elasticbeanstalk.com';
		const url = baseUrl + '/api/v1/auth/register/';
		axios
        .post(
    			url,
            	payLoad,
            { headers: { 'Content-Type': 'application/json' }}
         )
        .then(response => {
			// console.log({data:payLoad})
			console.log(response);
			
			}
			)
        .catch(error => {console.log({data:payLoad})});
	};


	// handle password eye
  	const [passwordEye, setPasswordEye] = useState(false);

  	const handlePasswordClick = () => {
    	setPasswordEye(!passwordEye);
  	};

   	
   // handle confirm password eye
   const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

   const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
   };

	// check password event 
	const Password = watch('Password')   

  	return (
		<div>
			<section className='signIn'>
				<div className="contentBx">
					<div className='formBx'>
							<img src={logo} width='180px' className='mb-3 mt-3 pb-3' alt=''></img>

							<h1>Create an account</h1>

							<p className='mb-2'>Start your 14 days free trial. No credit card required. </p>
							
							<form onSubmit={handleSubmit(onSubmit)}>

								{/* <div className="inputBx">
									<button>
										<span>
											<img src={googleIcon} width="30px" />&nbsp;
											Log in with Google
										</span>
									</button>
								</div>
								<h6 className='HoriLine'>Or</h6> */}
								{/* first and last name */}
								<div className="row">
									<div className="col-md-6">
										<div className="inputBx mt-3">
											<label htmlFor="FirstName"><b>First name</b></label>
											<input type="text" placeholder=" Enter your name" {...register("FirstName")} required></input>
										</div>
									</div>
									<div className="col-md-6">
										<div className="inputBx mt-3">
											<label htmlFor="LastName"><b>Last name</b></label>
											<input type="text" placeholder=" Enter your name" {...register("LastName")} required></input>
										</div>
									</div>
								</div>

								{/* Email */}
								<div className="inputBx mt-3">
									<label htmlFor="Email"><b>Email</b></label>
									<input type="email" placeholder=" Enter your email" {...register("Email")} required></input>
								</div>
								
								{/* password */}
								<div className='passwordEye'>
									<div className="inputBx mt-3">
										<label htmlFor="Password"><b>Password</b></label>
										<input 
										type={passwordEye === false ? "password" : "text"} 
										placeholder=" Enter Password" 
										{
											...register("Password",
											{
												pattern:{
													value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
													message:'Password should include at least one uppercase, one numeric value and one special character'
												},
												minLength:{
													value:8,
													message:'Minimum Required length is 8'
												},
												maxLength: {
													value: 20,
													message: "Maximum Required length is 20",
												},
											}
											)
										}
										required>
										</input>
										
										{errors.Password && <span className="ErrorMsgColor">{errors.Password.message}</span>}
										
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

								{/* confirm password */}
								<div className='passwordEye'>
									<div className="inputBx mt-3">
										<label htmlFor="confirmPassword"><b>Confirm Password</b></label>
										<input 
										type={confirmPasswordEye === false ? "password" : "text"} 
										placeholder=" Enter Password" 
										// onPaste={(e)=>{
										// 	e.preventDefault()
										// 	return false;
										// }}
										{
											...register("confirmPassword",
											{
												validate: (value) =>
                    							value === Password || "The passwords do not match",
											}
											)
										}
										required>
										</input>
										
										{errors.confirmPassword && <span className="ErrorMsgColor">{errors.confirmPassword.message}</span>}
										
									</div>

									{/* eye section */}
									<div className='pwdEye'>
										{passwordEye === false ? (
											<AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
											) : (
											<AiFillEye onClick={handleConfirmPasswordClick} />
										)}
									</div>
								</div>

								

								{/* Phone number */}
								<div className="inputBx mt-3">
									<label htmlFor="phone"><b>Phone</b></label>
									<input type="tel" placeholder=" Enter your Phone number" {...register("Phone")} required></input>
								</div>
								
								{/* Business Name */}
								<div className="inputBx mt-3">
									<label htmlFor="BName"><b>Business Name</b></label>
									<input type="text" placeholder=" Enter your business name" {...register("BName")} required></input>
								</div>

								{/* submit button */}
								<div className="inputBx mt-3">
									<input type="submit" value="Submit" name=''></input>
								</div>
								

								<div className='regLink mt-3'>
									<div>
										<label htmlFor=""></label>
										<span>Already have an account?</span>
									</div>
									<div className="forgotPass">
										<label htmlFor=""></label>
										<Link to="/SignIn"  style={{ color: '#bc2230' , fontWeight: 500, textDecoration: 'underline' }}> Log in</Link>
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
					<img src={signUpImg} alt=""></img>
				</div>
				
			</section>
		</div>
  	)
}

export default SignUp