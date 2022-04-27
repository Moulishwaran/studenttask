import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li class="nav-item">
                <Link class="nav-link" to={"/dashboard"}>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>





            {/* <!-- Divider --> */}
            <hr class="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Charts --> */}
            <li class="nav-item">
                <Link class="nav-link" to={"/student"}>
                    <i class="fas fa-fw fa-table"></i>
                    <span>Student</span></Link>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li class="nav-item">
                <Link class="nav-link"  to={"/teacher"}>
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Teacher</span></Link>

            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}
export default Sidebar;