import React, { useState } from 'react';
import Navbar  from '../../Components/Navbar';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { MdOutlineEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
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
                                    <table className="table table-responsive mt-5">
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
                                    <table className="table table-responsive mt-5">
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
                            <MDBTabsPane show={basicActive === 'stock_management'}>Tab 3 content</MDBTabsPane>
                        </MDBTabsContent>
                        
                       
                    </div>
                   

                    
                </div>
            </div>

            


            
        </div>
    )
}

export default Inventory

