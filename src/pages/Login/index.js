import '~/assets/vendor/fonts/fontawesome.css';
import '~/assets/vendor/fonts/tabler-icons.css';
import '~/assets/vendor/fonts/flag-icons.css';

import '~/assets/vendor/css/rtl/core.css';
import '~/assets/vendor/css/rtl/theme-default.css';
import '~/assets/css/demo.css';
import '~/assets/css/style.css';
import '~/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '~/assets/vendor/libs/node-waves/node-waves.css';
import '~/assets/vendor/libs/typeahead-js/typeahead.css';
import '~/assets/vendor/libs/formvalidation/dist/css/formValidation.min.css';
import '~/assets/vendor/css/pages/page-auth.css';
import images from '~/assets/images';

function Login() {
    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner py-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="app-brand justify-content-center mb-4 mt-2">
                                <a href="/" className="app-brand-link gap-2">
                                    <img src={images.logo} alt="AMS" height={120} />
                                </a>
                            </div>
                            <h4 className="mb-1 pt-2 text-center">LOGIN</h4>
                            <form id="formAuthentication" className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder="Please enter your username."
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <a href="/">
                                            <small>Forgot password?</small>
                                        </a>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="············"
                                        />
                                        <span className="input-group-text cursor-pointer">
                                            <i className="ti ti-eye-off" />
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="remember-me" />
                                        <label className="form-check-label" htmlFor="remember-me">
                                            Remember password?
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
