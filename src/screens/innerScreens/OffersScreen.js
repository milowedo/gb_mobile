import React from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import {headerStyles} from "../../constants/Layouts";
import settingsLinkIcon from "../../components/header/settingsLinkIcon";
import {Button} from "react-native-elements";
import OffersListItem from "../../components/lists/OffersListItem";

const single = {
    _id: "1",
    sellerName: 'tajemniczy_ogrod',
    books: [
        {_id: "4", writer: "Janusz Zajdel", title: "Prawo do powrotu", price: 99},
        {_id: "5", writer: "Pratchett", title: "Kolor magii", price: 6},
        {_id: "6", writer: "Tolkien", title: "Silmarilion", price: 9},
        {_id: "7", writer: "Michał Bułhakov", title: "Mistrz i Małgorzata", price: 3},
        {
            _id: "11",
            writer: "Alexandra Elizabeth Sheedy",
            title: "She Was Nice To Mice: The Other Side of Elizabeth I's Character Never Before Revealed by Previous Historians",
            price: 32
        }
    ],
    totalPrice: 84,
    delivery: "delivery",
};
const single2 = {
    _id: "2",
    sellerName: 'tajemniczy_ogrod',
    books: [
        {_id: "4", writer: "Janusz Zajdel", title: "Prawo do powrotu", price: 99},
        {_id: "5", writer: "Pratchett", title: "Kolor magii", price: 6},
        {_id: "6", writer: "Tolkien", title: "Silmarilion", price: 9},
        {_id: "7", writer: "Michał Bułhakov", title: "Mistrz i Małgorzata", price: 3},
        {
            _id: "11",
            writer: "Alexandra Elizabeth Sheedy",
            title: "She Was Nice To Mice: The Other Side of Elizabeth I's Character Never Before Revealed by Previous Historians",
            price: 32
        }
    ],
    totalPrice: 84,
    delivery: "delivery",
};
const single3 = {
    _id: "3",
    sellerName: 'tajemniczy_ogrod',
    books: [
        {_id: "4", writer: "Janusz Zajdel", title: "Prawo do powrotu", price: 99},
        {_id: "5", writer: "Pratchett", title: "Kolor magii", price: 6},
        {_id: "6", writer: "Tolkien", title: "Silmarilion", price: 9},
        {_id: "7", writer: "Michał Bułhakov", title: "Mistrz i Małgorzata", price: 3},
        {
            _id: "11",
            writer: "Alexandra Elizabeth Sheedy",
            title: "She Was Nice To Mice: The Other Side of Elizabeth I's Character Never Before Revealed by Previous Historians",
            price: 32
        }
    ],
    totalPrice: 84,
    delivery: "delivery",
};
const offers = [single, single2, single3];

const OffersScreen = () => {
    return (
        <>
            <View style={styles.topGroupWithButtonsStyle}>
                <Text style={styles.filterHeaderStyle}>filter</Text>
                <View style={styles.buttonsTopGroupStyle}>
                    <Button
                        containerStyle={styles.singleButtonTopStyle}
                        title={"count"}
                    />
                    <Button
                        containerStyle={styles.singleButtonTopStyle}
                        title={"lowest price"}
                    />
                    <Button
                        containerStyle={styles.singleButtonTopStyle}
                        title={"include"}
                    />
                </View>
            </View>


            <View style={styles.offersListStyle}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={offers}
                    keyExtractor={offer => offer._id}
                    renderItem={({item}) => {
                        return <OffersListItem sellerName={item.sellerName}
                                               books={item.books}
                                               totalPrice={item.totalPrice}
                                               delivery={item.delivery}
                                               id={item._id}
                        />

                    }
                    }/>
            </View>

        </>
    )
};

OffersScreen.navigationOptions = {
    title: 'Offers',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerRight: settingsLinkIcon,
};

const styles = StyleSheet.create({
    topGroupWithButtonsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomColor: '#525257',
        borderBottomWidth: 2,
    },
    buttonsTopGroupStyle: {
        height: 60,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singleButtonTopStyle: {
        marginHorizontal: 5,
    },
    filterHeaderStyle: {
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    offersListStyle: {
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'purple'
    }
});

export default OffersScreen;
