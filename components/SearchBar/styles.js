import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    searchBar: {
        width: '100%',
        height: 40,
        borderWidth: 7,
        borderColor: COLORS.gray,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'

    },
    input: {
        width: '100%',
        height: 33,
        borderRadius: 17,
        // backgroundColor:'green',
        lineHeight:10

    },


});
