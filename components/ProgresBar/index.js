import React from 'react';
import * as Progress from 'react-native-progress';

const TransactionProgressBar = () => {
    return (
        <Progress.Circle size={30} indeterminate={true} />
        );
};

export default TransactionProgressBar;
