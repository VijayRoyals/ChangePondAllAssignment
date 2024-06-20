import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import FooterComp from './FooterComp'
import Dashboard from './Copyright'
const MaindashboardComp = () => {
    return (
        <Fragment>
            <h2>This is Maindashboard Component</h2>
            <Dashboard />

            <div className=' container card border-primary'>
                <div className='card-header border-primary float:left '><center>< NavComp /></center></div>
                <div className='card-body border-primary '><center></center>
                
                </div>
                <div className='card-footer border-primary '><center><FooterComp /></center></div>

            </div>

          
        </Fragment>
        
    )
};<Outlet></Outlet>

export default MaindashboardComp