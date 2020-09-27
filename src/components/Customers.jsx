import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
// import { ProductsLoader } from '../common/products-loader.jsx';
import { IntlProvider, load, LocalizationProvider, loadMessages } from '@progress/kendo-react-intl';
import { process } from '@progress/kendo-data-query';
import { Axios } from 'axios'
import esMessages from '../common/fa.json';
loadMessages(esMessages, 'fa-IR');


class Customers extends React.Component {
    init = { method: 'GET', accept: 'application/json', headers: {} };

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            dataState: { take: 4, skip: 0 },
        };
    }

    componentDidMount() {
        this.populateTripsData();
    }

    populateTripsData() {
        fetch("http://localhost:61580/api/customers" + '', this.init)
        .then(response => response.json())
        .then(json => {
            this.setState({
                products: json
            });
        });
    }


    dataStateChange = (e) => {
        this.setState({
            ...this.state,
            dataState: e.data
        });
    }

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }

    dataRecieved = (products) => {
        this.setState({
            ...this.state,
            products: products
        });
    }

    pageChange = (event) => {
        console.log(event)
        this.setState({
            dataState: { take: event.page.take, skip: event.page.skip },
        });
    }

    render() {
        return (
            <div dir="rtl" className="k-rtl">
                <LocalizationProvider language="fa-IR">
                    <IntlProvider locale="es" >
                        <Grid
                            pageable
                            sortable
                            filterable
                            style={{ height: "400px" }}
                            data={process(this.state.products, this.state.dataState)}
                            // data={this.state.products}
                            {...this.state.dataState}
                            onDataStateChange={(e) => {
                                this.setState({ dataState: e.data })
                            }}
                        // sortable={true}
                        // data={this.state.products}
                        // skip={this.state.dataState.skip}
                        // take={this.state.dataState.take}
                        // total={this.state.products.length}
                        // pageable={true}
                        // onPageChange={this.pageChange}
                        // // pager={MyPager}
                        // onDataStateChange={this.dataStateChange}
                        >
                            <Column field="id" title="شناسه" />
                            <Column field="firstName" title="نام" />
                            <Column field="lastName" title="نام خانوادگی" />
                            <Column field="email" title="ایمیل" />
                            <Column field="phone" filter="numeric" title="شماره" />
                            <Column field="adress" title="آدرس" />

                        </Grid>
                    </IntlProvider>
                </LocalizationProvider>
                {/* <ProductsLoader
                    dataState={this.state.dataState}
                    onDataRecieved={this.dataRecieved}
                /> */}
            </div>
        );
    }
}

export default Customers