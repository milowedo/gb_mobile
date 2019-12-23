import React from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import {headerStyles} from "../../constants/Layouts";
import settingsLinkIcon from "../../components/header/settingsLinkIcon";
import {Button} from "react-native-elements";
import OffersListItem from "../../components/lists/OffersListItem";

const single = {
    seller: {
        seller_id: "13994849",
        lowestPriceDelivery: 5.90,
        total: 7.0
    },
    bookResult: [
        {
            auction_id: "8747192826",
            imageUrl: [
                {
                    "url": "https://a.allegroimg.com/original/111cbb/bdb7cbf54249a90522c28bb367b2"
                }
            ],
            auctionName: "Kurt Vonnegut - Recydywista",
            writer: "Kurt Vonnegut",
            bookTitle: "Recydywista",
            priceAmount: 7.0
        },
    ],
    totalPrice: 0,
};
const offers = [single];

const OffersScreen = () => {
    return (
        <>
            <View style={styles.topGroupWithButtonsStyle}>
                {/*<Text style={styles.filterHeaderStyle}>filter</Text>*/}
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
                    keyExtractor={offer => offer.seller.seller_id}
                    renderItem={({item}) => {
                        return <OffersListItem sellerName={item.seller.seller_id}
                                               books={item.bookResult}
                                               totalPrice={item.seller.total}
                                               delivery={item.seller.lowestPriceDelivery}
                                               id={item.seller.seller_id}
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
    }
});

export default OffersScreen;
