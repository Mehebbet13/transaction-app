import React from 'react';
import {View, TouchableOpacity, Image, Text} from "react-native";
import back from '../../assets/images/back.png'
import {styles} from "./styles";
import TransactionDetailCard from "../../components/TransactionDetailCard";
// import CustomButton from "../../components/CustomButton";

const TransactionDetailsScreen = ({route, navigation}) => {
    const {userInfo} = route.params;
    return (
        <View style={{flex: 1, padding: 15}}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Image source={back} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <Text style={styles.username}>{userInfo.name} {userInfo.surname} </Text>
            </View>
            <View style={styles.userTransactionAmountContainer}>
                <Text style={styles.userTransactionAmount}>{userInfo.transactionPrice}</Text>
            </View>
            <View style={styles.buttons}>
                {/*<CustomButton buttonName={'Card'}/>*/}
                {/*<CustomButton buttonName={'Debt'}/>*/}
            </View>
            <View style={styles.titleContainer}>
                <Text style={{fontSize: 17}}>Transaction Detail</Text>
            </View>
            <View style={{flex: 0.3}}>
                <TransactionDetailCard title={'Payment Detail'} state={userInfo.paymentDetail}/>
                <TransactionDetailCard title={'Type'} state={userInfo.type}/>
                <TransactionDetailCard title={'Pay With'} state={userInfo.payWith}/>

            </View>
        </View>
    );
};

export default TransactionDetailsScreen;
