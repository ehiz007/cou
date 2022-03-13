
import React, {useState, useEffect} from 'react';
import { BiBadgeCheck } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

// import logo from '../../Assets/Images/logo.svg';
// import signUpImg from '../../Assets/Images/signUpImg.jpg';

function SelectPackage({Package,setPackage}) {
	const Navigate = useNavigate();
	const handleClick = (e) =>{
		setPackage(e.target.id);
		Navigate('/SignUp');

	}



	// const url = 'http://127.0.0.1:8000/api/v1/package/';

	// const [packages, setPackages] = useState([])

	// const FetchPackageData = async () => {
	// 	const response = await fetch(url)
	// 	const packages = await response.json()
	// 	setPackages(packages.results)
		
	// }
	

	// useEffect (() => {
	// 	FetchPackageData()
	// }, [])


  return (
    <div>
        <div className="text-center mt-5 mb-5">
           <h1 className="card-title packageHeading">
				<b>
					Select your Package
				</b>
			</h1>
        </div>
        <div className='container'>
			<div className="row">
				{/* {packages.map((singlePackage) => {
							//destructuring
							const{
								message,
								data:{
									id,
									name,
									amount,
									description
								},
								error
							} = singlePackage

							return(
								<div className="col-md-4">
									<div className="card text-center package">
									<div className="card-body">
										<span className='btn text-center'></span>
										<h1 className="card-title mt-4">
											<b>
												<BiBadgeCheck className='bgIcon'/><br/>
												Bronze
											</b>
										</h1>
										<p className="card-text mb-3">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
										</p>
										<p className=" mb-4">
											Starts From <b>&#8358;230/mo.</b>
										</p>

										<Link to="/SignUp" className='btn packageBtn'>Get Package</Link>
									</div>
									</div>
								</div>
							);
						}
					)
				}
				*/}
				<div className="col-md-4">
									<div className="card text-center package">
									<div className="card-body">
										<span className='btn text-center'>GET</span>
										<h1 className="card-title mt-4">
											<b>
												<BiBadgeCheck className='bgIcon'/><br/>
												
											</b>
											<b>
												Bronze
											</b>
										</h1>
										<p className="card-text mb-3">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
										</p>
										<p className=" mb-4">
											Starts From <b>&#8358;230/mo.</b>
										</p>

										{/* <Link to="/SignUp:Bronze" target="_blank" className='btn packageBtn'>Get Package</Link> */}
										<button className='btn packageBtn' onClick={handleClick} id="Bronze">Get Package</button>
									</div>
									</div>
				</div> 
				<div className="col-md-4">
									<div className="card text-center package">
									<div className="card-body">
										<span className='btn text-center'>GET</span>
										<h1 className="card-title mt-4">
											<b>
												<BiBadgeCheck className='bgIcon'/><br/>
												
											</b>
											<b>
												Silver
											</b>
										</h1>
										<p className="card-text mb-3">
										Some quick example text to build on the card title and make up the bulk of the
										card's content.
										</p>
										<p className=" mb-4">
											Starts From <b>&#8358;230/mo.</b>
										</p>

										{/* <Link to="/SignUp" target="_blank" className='btn packageBtn'>Get Package</Link> */}
										<button className='btn packageBtn' onClick={handleClick} id="Silver">Get Package</button>
									</div>
									</div>
				</div>
				<div className="col-md-4">
					<div className="card text-center package">
					<div className="card-body">
						<span className='btn text-center'>GET</span>
						<h1 className="card-title mt-4">
							<b>
								<BiBadgeCheck className='bgIcon'/><br/>				
							</b>
							<b>
								Gold
							</b>
						</h1>
						<p className="card-text mb-3">
						Some quick example text to build on the card title and make up the bulk of the
						card's content.
						</p>
						<p className=" mb-4">
							Starts From <b>&#8358;230/mo.</b>
						</p>

						{/* <Link to="/SignUp" target="_blank" className='btn packageBtn' id="Gold">Get Package</Link> */}
						<button className='btn packageBtn' onClick={handleClick} id="Gold">Get Package</button>
					</div>
					</div>
				</div>
			</div>
        </div>
    </div>
  )
}

export default SelectPackage