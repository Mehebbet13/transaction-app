import {View, Text} from "react-native";
import React from 'react';
import {COLORS} from "../../utils/colors";
import {styles} from "./style";


const TransactionDetailCard = ({title,state}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15}}>{title}</Text>
            <Text style={{fontSize: 15,color:COLORS.gray}}> {state}</Text>
        </View>
    );
};

export default TransactionDetailCard;

