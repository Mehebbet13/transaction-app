import {View, Image, Text} from "react-native";
import React from 'react';
import {styles} from "./styles";
import {COLORS} from "../../utils/colors";

const TransactionListCard = ({imageUrl, name, surname, totalMoney,onPress}) => {
    return (
        <View style={styles.listCard} onStartShouldSetResponder={onPress}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={imageUrl}
                />
                <Text>{name} {surname}</Text>
            </View>
            <Text style={{color:COLORS.gray}}> {totalMoney}</Text>
        </View>
    );
};

export default TransactionListCard;
