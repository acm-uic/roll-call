import React, { FC } from 'react';
import UINComponent from '../components/UINComponent';


const UINPage: FC = () => {

    return (
        <>


        <h2>Sign into event</h2>
        <h5>Tap on the UIN textfield and Scan your card. Sign your signature and hit submit</h5>
        <UINComponent/>

        </>
    );
}

export default UINPage;