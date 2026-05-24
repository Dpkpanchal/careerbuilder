// resources/js/Components/Layout/ContentWrapper.jsx
import React from 'react';
import FlashMessages from './FlashMessages';
import PageHeader from './PageHeader';

const ContentWrapper = ({ children, header = null, breadcrumbs = [], actions = null }) => {
    return (
        <div className="content-wrapper">
            <FlashMessages />

            <PageHeader title={header} breadcrumbs={breadcrumbs} actions={actions} />

            <div className="content">
                <div className="container-fluid">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ContentWrapper;
