import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader } from '../common/products-loader.jsx';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';

import esMessages from '../common/fa.json';
loadMessages(esMessages, 'fa-IR');


class MyGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: { data: [], total: 0 },
            dataState: { take: 10, skip: 0 }
        };
    }

    dataStateChange = (e) => {
        this.setState({
            ...this.state,
            dataState: e.data
        });
    }

    dataRecieved = (products) => {
        this.setState({
            ...this.state,
            products: products
        });
    }

    render() {
        return (
            <div  dir="rtl" className="k-rtl">
                 <LocalizationProvider language="fa-IR">
                <IntlProvider locale="es" >
                <Grid
                    filterable={true}
                    sortable={true}
                    pageable={true}
                    {...this.state.dataState}
                    {...this.state.products}
                    onDataStateChange={this.dataStateChange}
                >
                    <Column field="firstName" title="نام" />
                    <Column field="lastName" title="نام خانوادگی" />
                    <Column field="email" title="ایمیل" />
                    <Column field="phone" filter="numeric" title="شماره" />
                    <Column field="adress" title="آدرس" />

                </Grid>
                </IntlProvider>
            </LocalizationProvider>
                <ProductsLoader
                    dataState={this.state.dataState}
                    onDataRecieved={this.dataRecieved}
                />
            </div>
        );
    }
}

export default MyGrid