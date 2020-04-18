import React from 'react';
import {View} from 'react-native';

const DEFAULT_MARGIN = 15;

const MarginWrapper = ({margin, children}) => {
    return (
        <View
            style={{margin: margin ? margin : DEFAULT_MARGIN}}>
            {children}
        </View>
    )
};

export default MarginWrapper;
