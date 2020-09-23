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
            <MenuItem text="Home" data={{ route: '/' }}/>
            <MenuItem text="MyForm" data={{ route: '/MyForm' }}/>
            <MenuItem text="MyGrid" data={{ route: '/MyGrid' }}/>
            <MenuItem text="MyDialog" data={{ route: '/MyDialog' }}/>

        </Menu>
    );
}

export default MenuNavContainer;
