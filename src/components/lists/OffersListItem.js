import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {pure} from 'recompose';
import SingleOfferListComponent from "./SingleOfferListComponent";

const OffersListItem = ({id, books, duplicates, totalPrice, delivery}) => {

    return (
        <View style={offerStyles.container}>
            <Text style={offerStyles.topTotalPriceStyle}>total: {totalPrice.toFixed(2)}</Text>

            <SingleOfferListComponent
                listId={id}
                listElements={books}
            />

            <Text style={offerStyles.bottomInfoDeliveryStyle}>+ delivery from: {(delivery).toFixed(2)}</Text>

        </View>
    )
        ;
};

export default pure(OffersListItem);

const offerStyles = StyleSheet.create(
    {
        container: {
            borderWidth: 3,
            borderColor: '#525257',
            margin: 10,
            padding: 5,
        },
        topTotalPriceStyle: {
            textAlign: 'right',
            paddingVertical: 6,
            paddingRight: 16,
            // borderWidth: 2,
            // borderColor: 'red'
        },
        bottomInfoDeliveryStyle: {
            textAlign: 'center',
        },
    }
);
