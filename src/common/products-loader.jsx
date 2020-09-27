
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { toODataString } from '@progress/kendo-data-query';

export class ProductsLoader extends React.Component {
    baseUrl = 'http://localhost:61580/api/Customers';
    init = { method: 'GET', accept: 'application/json', headers: {} };

    lastSuccess = '';
    pending = '';

    requestDataIfNeeded = () => {
        if (this.pending || toODataString(this.props.dataState) === this.lastSuccess) {
            return;
        }
        this.pending = toODataString(this.props.dataState);
        console.log(this.pending);
        fetch(this.baseUrl + '', this.init)
            .then(response => response.json())
            .then(json => {
                this.lastSuccess = this.pending;
                this.pending = '';
                if (toODataString(this.props.dataState) === this.lastSuccess) {
                    console.log(json);
                    this.props.onDataRecieved.call(undefined, {
                        data: json,
                        total: json.length
                    });
                } else {
                    this.requestDataIfNeeded();
                }
            });
    }

    render() {
        this.requestDataIfNeeded();
        return this.pending && <LoadingPanel />;
    }
}


class LoadingPanel extends React.Component {
    render() {
        const loadingPanel = (
            <div className="k-loading-mask">
                <span className="k-loading-text">Loading</span>
                <div className="k-loading-image"></div>
                <div className="k-loading-color"></div>
            </div>
        );

        const gridContent = document && document.querySelector('.k-grid-content');
        return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
    }
}