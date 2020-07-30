import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    userTransactionAmountContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userTransactionAmount: {
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 50
    },
    backIcon: {
        position: 'absolute',
        left: 10,
        top: 20
    },
    headerContainer: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons:{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20
    },
    titleContainer: {
        height:40,
        paddingLeft: 5,
        borderBottomWidth: 2,
        opacity:0.5,
        borderColor: COLORS.gray,
        marginVertical:20
    },

});
