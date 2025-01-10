import '~/assets/js/bootstrap.js';

import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

import '@syncfusion/ej2-base/styles/bootstrap5.css';
import '@syncfusion/ej2-buttons/styles/bootstrap5.css';
import '@syncfusion/ej2-calendars/styles/bootstrap5.css';
import '@syncfusion/ej2-dropdowns/styles/bootstrap5.css';
import '@syncfusion/ej2-inputs/styles/bootstrap5.css';
import '@syncfusion/ej2-navigations/styles/bootstrap5.css';
import '@syncfusion/ej2-popups/styles/bootstrap5.css';
import '@syncfusion/ej2-splitbuttons/styles/bootstrap5.css';
import '@syncfusion/ej2-notifications/styles/bootstrap5.css';
import '@syncfusion/ej2-react-grids/styles/bootstrap5.css';

function DefaultLayout({ children }) {
    useEffect(() => {
        if (window.someLibrary) {
            window.someLibrary.init();
        }
    }, []);

    return (
        <>
            <Helmet>
                <link href={`${process.env.PUBLIC_URL}/css/fonts/fontawesome.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/fonts/tabler-icons.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/fonts/flag-icons.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/rtl/core.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/rtl/theme-default.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/demo.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/perfect-scrollbar/perfect-scrollbar.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/node-waves/node-waves.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/typeahead-js/typeahead.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/swiper/swiper.css`} rel="stylesheet" />
                <link href={`${process.env.PUBLIC_URL}/css/style.css`} rel="stylesheet" />
            </Helmet>
            <Helmet>
                <script src={`${process.env.PUBLIC_URL}/js/helpers.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/config.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/jquery/jquery.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/popper/popper.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/perfect-scrollbar/perfect-scrollbar.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/node-waves/node-waves.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/hammer/hammer.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/i18n/i18n.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/typeahead-js/typeahead.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/menu.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/swiper/swiper.js`} />
                <script src={`${process.env.PUBLIC_URL}/js/main.js`} />
            </Helmet>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Menu />
                    <div className="layout-page">
                        <Header />
                        <div className="content-wrapper">
                            <div className="container-fluid flex-grow-1 container-p-y">{children}</div>
                            <div className="content-backdrop fade" />
                            <Footer />
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle" />
                <div className="drag-target" />
            </div>
        </>
    );
}

export default DefaultLayout;
