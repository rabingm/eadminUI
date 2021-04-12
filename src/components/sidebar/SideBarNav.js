import React from 'react'
import { Link } from 'react-router-dom'
import "./sideBarNav.style.css"

export const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            <ul>
                <li>
                   <Link to="/dashboard">Dashboard</Link> </li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/accounts">Account</Link></li>

            </ul>
        </div>
    )
}

export default SideBarNav