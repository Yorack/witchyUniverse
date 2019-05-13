import React from 'react';
import SaveAvatar from './ManagementAction/SaveAvatar.js';
import ResetAvatar from './ManagementAction/ResetAvatar.js';
import RandomAvatar from './ManagementAction/RandomAvatar.js';

const ManagementZone = (props) => {
    return (
        <div className={'management-zone'}>
            <SaveAvatar/>
            <ResetAvatar/>
            <RandomAvatar/>
        </div>
    );
};

export default ManagementZone;