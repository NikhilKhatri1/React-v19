import React from 'react';
import Child from '../ApiContext/Child';
import ContextApi from '../Context/ContextApi';

const AppForContextApi = () => {
    return (
        <ContextApi>
            <Child />
        </ContextApi>
    );
};

export default AppForContextApi;
