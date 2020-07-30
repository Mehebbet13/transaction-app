import {View, TextInput} from "react-native";
import React from 'react';
import {styles} from "./styles";
import {COLORS} from "../../utils/colors";


const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                style={styles.input}
                placeholder={'Search'}
                placeholderTextColor={COLORS.gray}/>
        </View>
    );
};

export default SearchBar;
