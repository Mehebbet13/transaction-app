import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    listCard: {
        width: '100%',
        height: 40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginVertical:10

    },
    avatar:{
        width:35,
        height:35,
        borderRadius:20,
        backgroundColor:'white',

    },
    avatarContainer:{
        width: '50%',
        height: 40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    }
});
