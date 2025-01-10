import { UrlConstants } from '~/constants';
import { LocationService } from '~/services';

function LocationAdd() {
    const dataStatus = LocationService.getStatus();

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href={UrlConstants.HOME}>Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href={UrlConstants.LOCATIONS}>Location</a>
                    </li>
                    <li className="breadcrumb-item active">Add New</li>
                </ol>
            </nav>
            <div className="row mb-6">
                <div className="col-md mb-6 mb-md-0">
                    <div className="card">
                        <h5 className="card-header">ADD NEW</h5>
                        <div className="card-body">
                            <form id="frmAccountType" method="post" className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="Name">
                                        Name
                                    </label>
                                    <input type="text" htmlFor="Name" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="Position">
                                        Status
                                    </label>
                                    <select htmlFor="Status" className="form-control">
                                        {dataStatus.map((item) => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className="form-label" htmlFor="Description">
                                        Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        htmlFor="Description"
                                        rows={3}
                                        defaultValue={''}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-3 text-center">
                                        <button type="submit" className="btn btn-primary waves-effect waves-light mr-5">
                                            <span className="ti-xs ti ti-device-floppy me-2" />
                                            Save changes
                                        </button>
                                        <a
                                            href={UrlConstants.LOCATIONS}
                                            className="btn btn-secondary waves-effect waves-light"
                                        >
                                            <span className="ti-xs ti ti-arrow-back me-2" />
                                            Go Back
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationAdd;
