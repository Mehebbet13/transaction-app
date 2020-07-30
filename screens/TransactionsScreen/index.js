import {View, Text, FlatList} from "react-native";
import {allUsers} from "../../store/users";
import {connect} from "react-redux";
import React from 'react';
import {styles} from "./styles";
import SearchBar from "../../components/SearchBar";
import TransactionProgressBar from "../../components/ProgresBar";
import TransactionListCard from "../../components/TransactionListCard";

const mapStateToProps = (state) => ({
    users: allUsers(state),
});
const TransactionsScreen = connect(mapStateToProps)(({users, navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Transactions</Text>
            </View>
            <View style={styles.searchBarContainer}>
                <SearchBar/>
            </View>
            <View style={styles.performanceTitleContainer}>
                <Text style={styles.performanceTitle}>Performance</Text>
            </View>
            <View style={styles.performanceContainer}>
                {/*<TransactionProgressBar/>*/}
            </View>
            <View style={styles.performanceTitleContainer}>
                <Text style={styles.performanceTitle}>Transactions</Text>
            </View>
            <View style={styles.listCardContainer}>
                <FlatList
                    data={users}
                    renderItem={({item}) => (
                        <TransactionListCard name={item.name}
                                             surname={item.surname}
                                             imageUrl={item.avatar}
                                             totalMoney={item.transactionPrice}
                                             onPress={() => navigation.navigate('TransactionDetailsScreen', {
                                                 userInfo: item
                                             })}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.line}>
                <View style={styles.borderLine}></View>
                <View style={styles.borderBoldLine}></View>
            </View>
            <View style={styles.listCardContainer}>
                <FlatList
                    data={users}
                    renderItem={({item}) => (
                        <TransactionListCard name={item.name}
                                             surname={item.surname}
                                             imageUrl={item.avatar}
                                             totalMoney={item.transactionPrice}
                                             onPress={() => navigation.navigate('TransactionDetailsScreen', {
                                                 userInfo: item
                                             })}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.line}>
                <View style={styles.borderLine}></View>
                <View style={styles.borderBoldLine}></View>
            </View>
        </View>
    );
});

export default TransactionsScreen;
