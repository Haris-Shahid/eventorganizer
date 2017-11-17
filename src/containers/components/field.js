import React from 'react';
import * as NB from 'native-base';

const Fields = () => {
    return (
        <NB.Item floatingLabel style={{ borderBottomColor: '#ff6600' }}>
            <NB.Label style={{ color: '#ff6600' }} >First Name</NB.Label>
            <NB.Input style={{ color: '#ff6600' }} type="text" />
        </NB.Item>
    )
}

export default Fields;