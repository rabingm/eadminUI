import React from 'react'
import { Link } from 'react-router-dom'
import "./sideBarNav.style.css"

export const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            <ul>
                <li>
                   <Link to="/dashboard">Dashboard</Link> </li>
                <li><Link to="/dashboard">Category</Link></li>
                <li><Link to="/dashboard">Products</Link></li>
                <li><Link to="/dashboard">Orders</Link></li>
                <li><Link to="/dashboard">Users</Link></li>
                <li><Link to="/dashboard">Account</Link></li>

            </ul>
        </div>
    )
}

export default SideBarNav