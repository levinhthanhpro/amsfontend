import images from '~/assets/images';

function Notification() {
    return (
        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
            <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="ti ti-bell ti-md" />
                <span className="badge bg-danger rounded-pill badge-notifications">5</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                        <h5 className="text-body mb-0 me-auto">Notification</h5>
                        <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-all text-body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Mark all as read"
                        >
                            <i className="ti ti-mail-opened fs-4" />
                        </a>
                    </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                        <img src={images.avatar} className="h-auto rounded-circle" />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                                    <p className="mb-0">Won the monthly best seller gold badge</p>
                                    <small className="text-muted">1h ago</small>
                                </div>
                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a href="javascript:void(0)" className="dropdown-notifications-read">
                                        <span className="badge badge-dot" />
                                    </a>
                                    <a href="javascript:void(0)" className="dropdown-notifications-archive">
                                        <span className="ti ti-x" />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="dropdown-menu-footer border-top">
                    <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center"
                    >
                        View all notifications
                    </a>
                </li>
            </ul>
        </li>
    );
}
export default Notification;
