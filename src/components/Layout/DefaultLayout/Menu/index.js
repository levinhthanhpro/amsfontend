import images from '~/assets/images';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();

    const handleActiveMenu = (url) => {
        //if menu-item active open
        var path = location.pathname.split('/')[1].replace('-add', '').replace('-update', '');
        return path === url.replace('/', '') ? 'menu-item active' : 'menu-item';
    };

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="/dashboard" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <img src={images.logoSmall} alt="AMS" width={50} height={50} />
                    </span>
                    <span className="app-brand-text demo menu-text fw-bold">AMS</span>
                </a>
                <a href="/" className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle" />
                    <i className="ti ti-x d-block d-xl-none ti-sm align-middle" />
                </a>
            </div>
            <div className="menu-inner-shadow" />
            <ul className="menu-inner py-1">
                {/* Dashboards */}
                <li className={handleActiveMenu('/dashboard')}>
                    <a href="/dashboard" className="menu-link">
                        <i className="menu-icon tf-icons ti ti-smart-home" />
                        <div data-i18n="Dashboards">Dashboards</div>
                    </a>
                </li>
                {/* Apps & Pages */}
                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">Application</span>
                </li>
                <li className={handleActiveMenu('/location')}>
                    <a href="/location" className="menu-link">
                        <i className="menu-icon tf-icons ti ti-map-pin" />
                        <div data-i18n="Locations">Locations</div>
                    </a>
                </li>
                <li className={handleActiveMenu('/request')}>
                    <a href="/request" className="menu-link">
                        <i className="menu-icon tf-icons ti ti-messages" />
                        <div data-i18n="Request">Request</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ti ti-assembly" />
                        <div data-i18n="Manager Asset">Manager Asset </div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="/asset" className="menu-link">
                                <div data-i18n="Asset">Asset</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/assettype" className="menu-link">
                                <div data-i18n="Asset Type">Asset Type</div>
                            </a>
                        </li>
                        <li className={handleActiveMenu('/category')}>
                            <a href="/category" className="menu-link">
                                <div data-i18n="Categoty">Categoty</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className={handleActiveMenu('/department')}>
                    <a href="/department" className="menu-link">
                        <i className="menu-icon tf-icons ti ti-adjustments" />
                        <div data-i18n="Department">Department</div>
                    </a>
                </li>
                {/* Components */}
                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">System</span>
                </li>
                <li className="menu-item">
                    <a href="/" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ti ti-users" />
                        <div data-i18n="Users">Users</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="/" className="menu-link">
                                <div data-i18n="List">List</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/" className="menu-link menu-toggle">
                                <div data-i18n="View">View</div>
                            </a>
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <a href="/" className="menu-link">
                                        <div data-i18n="Account">Account</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/" className="menu-link">
                                        <div data-i18n="Security">Security</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/" className="menu-link">
                                        <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/" className="menu-link">
                                        <div data-i18n="Notifications">Notifications</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/" className="menu-link">
                                        <div data-i18n="Connections">Connections</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="/" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons ti ti-settings" />
                        <div data-i18n="Roles & Permissions">Roles &amp; Permissions</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="/" className="menu-link">
                                <div data-i18n="Roles">Roles</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="/" className="menu-link">
                                <div data-i18n="Permission">Permission</div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}
export default Menu;
