import React from 'react';
import logo from '../Assets/Images/logo.svg';
import demo from '../Assets/Images/demo.png';
import { VscBellDot } from 'react-icons/vsc';
import { FiSettings } from 'react-icons/fi';

function Navbar() {
  return (
    <div>
        <div className='Navigation fixed-top'>
                <div className='top'>
                    <div className="container">
                        <div className="row invent-logo mt-3">
                            <div className="col-md-6">
                                <img src={logo} width='180px' className='mb-3 mt-3' alt=''></img>
                            </div>
                            <div className="col-md-6 ">
                                <div className='invent-icon px-3' >
                                    <VscBellDot/>
                                </div>
                                <div className='invent-icon px-3' >
                                    <FiSettings/>
                                </div>
                                <div className='profile'>
                                    <div className='px-2'>
                                        <h6>Funminiyi</h6>
                                        <h6>Logout</h6>
                                    </div>
                                    <div className='px-2'>
                                        <img src={demo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='nav_'>
                    <div className="container pt-3">
                        <h6>Dashboard</h6>
                        <h6>Staff</h6>
                        <h6 className='demo'>Inventory</h6>
                        <h6>P.O.S</h6>
                        <h6>Store Front</h6>
                        <h6>Business Report</h6>
                        <h6>Delivery</h6>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar
