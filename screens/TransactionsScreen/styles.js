import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {
        flex: 0.1,
        paddingLeft: 10,
        marginVertical:10

    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    searchBarContainer: {
        flex: 0.1,
    },
    performanceTitleContainer: {
        height:40,
        paddingLeft: 5,
        borderBottomWidth: 2,
        opacity:0.5,
        borderColor: COLORS.gray,
        marginVertical:20
    },
    performanceTitle: {
        fontSize: 17,
        color:'black'
    },
    performanceContainer: {
        flex: 0.2,
        justifyContent: 'space-between'
    },
    listCardContainer: {
        flex: 0.5,
        justifyContent: 'space-between',
    },
    line:{
        width:'100%',
        flexDirection:'row',
        paddingHorizontal:10,
        marginVertical:20
    },
    borderLine:{
        width:'70%',
        height: 1,
        backgroundColor: COLORS.gray,


    },
    borderBoldLine:{
        width:'30%',
        height: 3,
        borderRadius:2,
        backgroundColor: COLORS.heavyMetal,
    }


});
