import React, { useState } from 'react';
import Navbar  from '../../Components/Navbar';
import { AiFillDelete, AiFillCaretDown, AiFillEye, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdOutlineEdit } from 'react-icons/md';
import { IoStatsChart } from "react-icons/io5";
import { GrUserFemale } from 'react-icons/gr';
// import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { MDBBtn, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';

function Inventory() {

    const [basicActive, setBasicActive] = useState('supplier');

    const handleBasicClick = (value: string) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

   
    return (
        <div className='Body'>
            <Navbar />
            <div className='Main'>
                <div className="container mt-5">
                    <div className='mb-5 ps-5'>
                        <h1><b>Inventory</b></h1>
                    </div>
                    <div>
                        <MDBTabs pills className=''>
                            <MDBTabsItem>
                                <MDBTabsLink className="tabLink px-5 pt-3 me-3 " onClick={() => handleBasicClick('supplier')} active={basicActive === 'supplier'}>
                                    Supplier
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink className="tabLink px-5 pt-3 mx-2 " onClick={() => handleBasicClick('product')} active={basicActive === 'product'}>
                                    Product
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink className="tabLink px-5 pt-3 " onClick={() => handleBasicClick('stock_management')} active={basicActive === 'stock_management'}>
                                    Stock management
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink className="tabLink px-5 pt-3 mx-2 " onClick={() => handleBasicClick('wip')} active={basicActive === 'wip'}>
                                    WIP
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>
                            <MDBTabsPane show={basicActive === 'supplier'}>
                                <div className="Suppliers p-5">
                                    <div className='mb-5 '>
                                        <h1><b>Suppliers</b></h1>
                                    </div>
                                    <div className='Actions'>
                                            <div>
                                                <button type="button" className='btn btn-sm'> <span className='_Sign'> &#x2B;  </span> &nbsp; Add New </button>
                                            </div>
                                            <div>
                                                <div className="form-outline mt-2 mx-2">
                                                    <input type="search" id="form1" className="form-control" placeholder=" Search" aria-label="Search" />
                                                </div>
                                                <Link className="btn btn-sm del_" to="/#!">
                                                    <AiFillDelete className="delSign"/>
                                                </Link>
                                                <Link className="btn btn-sm export_" to="/#!">
                                                    Export <AiFillCaretDown className="exportSign"/>
                                                </Link>
                                            </div>
                                    </div>
                                    <table className="table  mt-5">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">
                                                    <div className="form-check">
                                                    {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> */}
                                                    </div>
                                                </th>
                                                <th scope="col"><b>SN.</b></th>
                                                <th scope="col"><b>Company</b></th>
                                                <th scope="col"><b>Email</b></th>
                                                <th scope="col"><b>Phone</b></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                
                                                <th scope="col"><b>Action</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>1</td>
                                                <td>XYZ Company</td>
                                                <td>xyz@gmail.com</td>
                                                <td>+234555000</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>1</td>
                                                <td>XYZ Company</td>
                                                <td>xyz@gmail.com</td>
                                                <td>+234555000</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>1</td>
                                                <td>XYZ Company</td>
                                                <td>xyz@gmail.com</td>
                                                <td>+234555000</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>1</td>
                                                <td>XYZ Company</td>
                                                <td>xyz@gmail.com</td>
                                                <td>+234555000</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>1</td>
                                                <td>XYZ Company</td>
                                                <td>xyz@gmail.com</td>
                                                <td>+234555000</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane show={basicActive === 'product'}>
                                <div className="Suppliers p-5">
                                    <div className='mb-5 '>
                                        <h1><b>Products</b></h1>
                                    </div>
                                    <div className='Actions'>
                                            <div>
                                                <button type="button" className='btn btn-sm'> <span className='_Sign'> &#x2B;  </span> &nbsp; Add New </button>
                                            </div>
                                            <div>
                                                <div className="form-outline mt-2 mx-2">
                                                    <input type="search" id="form1" className="form-control" placeholder=" Search" aria-label="Search" />
                                                </div>
                                                <Link className="btn btn-sm del_" to="/#!">
                                                    <AiFillDelete className="delSign"/>
                                                </Link>
                                                <Link className="btn btn-sm export_" to="/#!">
                                                    Export <AiFillCaretDown className="exportSign"/>
                                                </Link>
                                            </div>
                                    </div>
                                    <table className="table  mt-5">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">
                                                    <div className="form-check">
                                                    {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> */}
                                                    </div>
                                                </th>
                                                <th scope="col"><b>Product Name</b></th>
                                                <th scope="col"><b>Product ID</b></th>
                                                <th scope="col"><b>Quantity</b></th>
                                                <th scope="col"><b>Price</b></th>
                                                <th scope="col"><b>Status</b></th>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                
                                                <th scope="col"><b>Action</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>Human Hair</td>
                                                <td>000000235</td>
                                                <td>35 PCS</td>
                                                <td>150,000</td>
                                                <td>In Stock</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>Human Hair</td>
                                                <td>000000235</td>
                                                <td>35 PCS</td>
                                                <td>150,000</td>
                                                <td>In Stock</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>Human Hair</td>
                                                <td>000000235</td>
                                                <td>35 PCS</td>
                                                <td>150,000</td>
                                                <td>In Stock</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    </div>
                                                </th>
                                                <td>Human Hair</td>
                                                <td>000000235</td>
                                                <td>35 PCS</td>
                                                <td>150,000</td>
                                                <td>In Stock</td>
                                                <td colSpan="3">
                                                    
                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#2d6223' }}>
                                                        View <AiFillEye className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: '#172b4d'}}>
                                                        Edit <MdOutlineEdit className="exportSign"/>
                                                    </button>

                                                    <button className="btn btn-sm export_" style={{ backgroundColor: "#ae3b1e" }}>
                                                        Delete <AiFillDelete className="exportSign"/>
                                                    </button>
                                                </td>
                                               
                                               
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane show={basicActive === 'stock_management'}>
                                <div className="Suppliers p-5">
                                    <div className='mb-5 '>
                                        <h1><b>Stock Management</b></h1>
                                    </div>
                                   
                                    <div className="row">
                                        <div className="col-md-6">
                                            
                                            <div className='card__ '>
                                                <h6 className='my-3'><b>Sales Overview</b></h6>
                                                <div className='card_group'>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                     <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card_group mt-5'>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                     <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            
                                            <div className='card__ '>
                                                <h6 className='my-3'><b>Purchase Overview</b></h6>
                                                <div className='card_group'>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                     <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='card_group mt-5'>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                     <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                        </div>
                                                        <div className="content mt-2 mx-3">
                                                            <h6>Total sales</h6>
                                                            <h2><b>374</b></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-4">
                                             <div className='card__ '>
                                                <h6 className='my-3'><b>Inventory Summary</b></h6>
                                                <div className='card_group'>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                            <div className="content mt-2">
                                                                <h6>Total sales</h6>
                                                                <h2><b>374</b></h2>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                            <div className="content mt-2">
                                                                <h6>Total sales</h6>
                                                                <h2><b>374</b></h2>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className='card__ '>
                                                <h6 className='my-3'><b>Product Details</b></h6>
                                                <div className="details">
                                                    <div className="detail pb-3">
                                                        <span className="info">Goods in Transit </span>
                                                        <h4><b>02</b></h4>
                                                    </div>
                                                    <div className="detail pb-3">
                                                        <span className="info">Items in Stock</span>
                                                        <h4><b>111</b></h4>
                                                    </div>
                                                    <div className="detail pb-3">
                                                        <span className="info">Items Pending</span>
                                                        <h4><b>231</b></h4>
                                                    </div>
                                                   
                                                    
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className='card__ '>
                                                <h6 className='my-3'><b>No. of Users</b></h6>
                                                <div className='card_group'>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                            <div className="content mt-2">
                                                                <h6>Total sales</h6>
                                                                <h2><b>374</b></h2>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="group">
                                                        <div className="logo ">
                                                            <IoStatsChart />
                                                            <div className="content mt-2">
                                                                <h6>Total sales</h6>
                                                                <h2><b>374</b></h2>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                       <table className="table mt-5">
                                            <thead className="table-light">
                                                <tr>
                                                    <th scope="col">
                                                        <div className="form-check">
                                                        {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> */}
                                                        </div>
                                                    </th>
                                                    <th scope="col"><b>Product Name</b></th>
                                                    <th scope="col"><b>Product ID</b></th>
                                                    <th scope="col"><b>Quantity</b></th>
                                                    <th scope="col"><b>Supplier</b></th>
                                                    
                                                    <th scope="col"><b>Stock Level <span>(4 weeks run rate)</span></b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </th>
                                                    <td>Human Hair</td>
                                                    <td>000000235</td>
                                                    <td>35 PCS</td>
                                                    <td>150,000</td>
                                                    <td>
                                                        <MDBProgress height='20'>
                                                            <MDBProgressBar className='primary__' width='25' valuemin={0} valuemax={100}>
                                                                25%
                                                            </MDBProgressBar>
                                                        </MDBProgress>
                                                    </td>
                                                    
                                                
                                                
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </th>
                                                    <td>Human Hair</td>
                                                    <td>000000235</td>
                                                    <td>35 PCS</td>
                                                    <td>150,000</td>
                                                    <td>
                                                        <MDBProgress height='20'>
                                                            <MDBProgressBar className='primary__' width='47' valuemin={0} valuemax={100}>
                                                                47%
                                                            </MDBProgressBar>
                                                        </MDBProgress>
                                                    </td>
                                                    
                                                
                                                
                                                </tr>
                                              
                                              <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </th>
                                                    <td>Human Hair</td>
                                                    <td>000000235</td>
                                                    <td>35 PCS</td>
                                                    <td>150,000</td>
                                                    <td>
                                                        <MDBProgress height='20'>
                                                            <MDBProgressBar className='primary__' width='25' valuemin={0} valuemax={100}>
                                                                25%
                                                            </MDBProgressBar>
                                                        </MDBProgress>
                                                    </td>
                                                    
                                                
                                                
                                                </tr>
                                              
                                              <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </th>
                                                    <td>Human Hair</td>
                                                    <td>000000235</td>
                                                    <td>35 PCS</td>
                                                    <td>150,000</td>
                                                    <td>
                                                        <MDBProgress height='20'>
                                                            <MDBProgressBar className='primary__' width='55' valuemin={0} valuemax={100}>
                                                                55%
                                                            </MDBProgressBar>
                                                        </MDBProgress>
                                                    </td>
                                                    
                                                
                                                
                                                </tr>
                                              
                                              <tr>
                                                    <th scope="row">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </th>
                                                    <td>Human Hair</td>
                                                    <td>000000235</td>
                                                    <td>35 PCS</td>
                                                    <td>150,000</td>
                                                    <td>
                                                        <MDBProgress height='20'>
                                                            <MDBProgressBar className='primary__' width='85' valuemin={0} valuemax={100}>
                                                                85%
                                                            </MDBProgressBar>
                                                        </MDBProgress>
                                                    </td>
                                                    
                                                
                                                
                                                </tr>
                                              
                                              
                                            </tbody>
                                            </table>
                                    </div>
                                   
                                </div>
                            </MDBTabsPane>
                            <MDBTabsPane show={basicActive === 'wip'}>
                                <div className="Suppliers p-5">
                                    <div className='mb-5 '>
                                        <h1><b>Work In Progress</b></h1>
                                    </div>
                                   
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className='card__ wigging mb-0'>
                                                <h6 className='my-3'><b>Wigging</b></h6>
                                                <div className='wigging_content mt-4 mb-2'>
                                                    <div>
                                                        <span className='rounded-circle p-2 wigIcon'><GrUserFemale /></span>&nbsp;
                                                        <span>20 products</span>
                                                    </div>
                                                    <div>
                                                        <span className='view__'>View</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-3">
                                            <div className='card__ styling mb-0'>
                                                <h6 className='my-3'><b>Styling</b></h6>
                                                <div className='wigging_content mt-4 mb-2'>
                                                    <div>
                                                        <span className='rounded-circle p-2 wigIcon'><GrUserFemale /></span>&nbsp;
                                                        <span>20 products</span>
                                                    </div>
                                                    <div>
                                                        <span className='view__'>View</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-3">
                                            <div className='card__ styling mb-0'>
                                                <h6 className='my-3'><b>Dyeing</b></h6>
                                                <div className='wigging_content mt-4 mb-2'>
                                                    <div>
                                                        <span className='rounded-circle p-2 wigIcon'><GrUserFemale /></span>&nbsp;
                                                        <span>20 products</span>
                                                    </div>
                                                    <div>
                                                        <span className='view__'>View</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-3">
                                            <div className='card__ styling mb-0'>
                                                <div className='add_storage '>
                                                    <span className='addIcon'><AiOutlinePlusCircle /></span>
                                                    <span><b>Add Storage</b></span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    

                                    <div className="row">
                                       <table className="table mt-5">
                                            <thead className="table-light">
                                                <tr>
                                                   
                                                    <th scope="col"><b>Product</b></th>
                                                    <th scope="col"><b>Customer Name</b></th>
                                                    <th scope="col"><b>SKU</b></th>
                                                    <th scope="col"><b>PO ID</b></th>
                                                    <th scope="col"><b>Status</b></th>
                                                    <th scope="col"><b>Action</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
    
                                                    <td>
                                                       <GrUserFemale />&nbsp;
                                                        Short Bob Wig
                                                    </td>
                                                    <td>Lace Wig</td>
                                                    <td>00000</td>
                                                    <td>ikdrhwe</td>
                                                    <td>
                                                        <Link className="btn btn-sm export_" to="/#!">
                                                            pending
                                                        </Link>
                                                    </td>
                                                    <td>< HiOutlineDotsVertical /></td>
                                                    
                                                
                                                
                                                </tr>
                                                <tr>
    
                                                    <td>
                                                       <GrUserFemale />&nbsp;
                                                        Short Bob Wig
                                                    </td>
                                                    <td>Lace Wig</td>
                                                    <td>00000</td>
                                                    <td>ikdrhwe</td>
                                                    <td>
                                                        <Link className="btn btn-sm export_" to="/#!">
                                                            pending
                                                        </Link>
                                                    </td>
                                                    <td>< HiOutlineDotsVertical /></td>
                                                    
                                                
                                                
                                                </tr>
                                                <tr>
    
                                                    <td>
                                                       <GrUserFemale />&nbsp;
                                                        Short Bob Wig
                                                    </td>
                                                    <td>Lace Wig</td>
                                                    <td>00000</td>
                                                    <td>ikdrhwe</td>
                                                    <td>
                                                        <Link className="btn btn-sm export_" to="/#!">
                                                            pending
                                                        </Link>
                                                    </td>
                                                    <td>< HiOutlineDotsVertical /></td>
                                                    
                                                
                                                
                                                </tr>
                                                
                                            
                                              
                                              
                                            </tbody>
                                            </table>
                                    </div>
                                   
                                </div>
                            </MDBTabsPane>
                        </MDBTabsContent>
                        
                       
                    </div>
                   

                    
                </div>
            </div>

            


            
        </div>
    )
}

export default Inventory

