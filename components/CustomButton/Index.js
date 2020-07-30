import {Text, TouchableOpacity} from "react-native";
import React from 'react';
import {styles} from "./styles";


const CustomButton = ({buttonName,onPress,additionalStyle,...rest}) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer,additionalStyle]} onpress={onPress} rest={rest}>
           <Text>{buttonName}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
