import React from 'react'
import { Link } from 'react-router-dom'
import "./sideBarNav.style.css"

export const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            <ul>
                <li>
                   <Link to="/dashboard"><i class="fas fa-tachometer-alt"></i>  Dashboard</Link> </li>
                <li><Link to="/category"><i class="fas fa-sitemap"></i>Category</Link></li>
                <li><Link to="/products"><i class="fab fa-expeditedssl"></i>Products</Link></li>
                <li><Link to="/orders"><i class="fas fa-cart-arrow-down"></i>Orders</Link></li>
                <li><Link to="/users"><i class="fas fa-user"></i>Users</Link></li>
                <li><Link to="/accounts"><i class="fas fa-user-circle"></i>Account</Link></li>

            </ul>
        </div>
    )
}

export default SideBarNav