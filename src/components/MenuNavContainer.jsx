import React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { useHistory } from 'react-router-dom';


const MenuNavContainer = (props) => {
    const history = useHistory();
    const onSelect = (event) => {
        history.push(event.item.data.route);
    }
    return (
        <Menu onSelect={onSelect}>
            <MenuItem text="صفحه اصلی" data={{ route: '/' }}/>
            <MenuItem text="افزودن کاربر" data={{ route: '/AddCustomer' }}/>
            <MenuItem text="کاربران" data={{ route: '/Customers' }}/>
            {/* <MenuItem text="MyDialog" data={{ route: '/MyDialog' }}/>
            <MenuItem text="GridTest" data={{ route: '/GridTest' }}/> */}

        </Menu>
    );
}

export default MenuNavContainer;
