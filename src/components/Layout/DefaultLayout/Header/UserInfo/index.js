import images from '~/assets/images';

function UserInfo() {
    return (
        <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a className="nav-link dropdown-toggle hide-arrow" href="/" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                    <img src={images.avatar} alt={images.avatar} className="h-auto rounded-circle" />
                </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                        <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                    <img src={images.avatar} alt={images.avatar} className="h-auto rounded-circle" />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <span className="fw-semibold d-block">John Doe</span>
                                <small className="text-muted">Admin</small>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="/">
                        <i className="ti ti-user-check me-2 ti-sm" />
                        <span className="align-middle">My Profile</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="pages-account-settings-account.html">
                        <i className="ti ti-settings me-2 ti-sm" />
                        <span className="align-middle">System</span>
                    </a>
                </li>
                <li>
                    <div className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="/" target="_blank">
                        <i className="ti ti-logout me-2 ti-sm" />
                        <span className="align-middle">Log Out</span>
                    </a>
                </li>
            </ul>
        </li>
    );
}

export default UserInfo;
