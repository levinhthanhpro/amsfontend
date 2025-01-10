import UserInfo from './UserInfo';
import Notification from './Notification';
import images from '~/assets/images';

function Header() {
    return (
        <nav
            className="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
        >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                    <i className="ti ti-menu-2 ti-sm" />
                </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <Notification />
                    <UserInfo />
                </ul>
            </div>
        </nav>
    );
}

export default Header;
