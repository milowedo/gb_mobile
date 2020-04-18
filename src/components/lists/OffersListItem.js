import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {pure} from 'recompose';
import SingleOfferListComponent from "./SingleOfferListComponent";

const OffersListItem = ({id, books, duplicates, totalPrice, delivery}) => {

    const [showDuplicates, setShowDuplicates] = useState(false);

    return (
        <View style={offerStyles.container}>
            <Text style={offerStyles.topTotalPriceStyle}>total: {totalPrice.toFixed(2)}</Text>

            <SingleOfferListComponent
                listId={id}
                listElements={books}
            />

            <View style={offerStyles.bottomTabStyle}>
                <Text style={offerStyles.bottomInfoDeliveryStyle}>+ delivery from: {(delivery).toFixed(2)}</Text>
                {duplicates ?
                    <TouchableOpacity
                        style={offerStyles.duplicatesButton}
                        onPress={() => setShowDuplicates(!showDuplicates)}>
                        <Text style={offerStyles.buttonText}>show duplicates</Text>
                    </TouchableOpacity> : null}
            </View>

            {showDuplicates ?
                <SingleOfferListComponent
                    listId={id}
                    listElements={duplicates}
                /> : null }

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
        },
        bottomTabStyle: {
            borderTopWidth: 1,
            paddingTop: 5,
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        bottomInfoDeliveryStyle: {
            textAlign: 'right',
            alignSelf: 'flex-start',
        },
        duplicatesButton: {
            alignSelf: 'flex-end',
        },
        buttonText: {
            fontWeight: 'bold',
        }
    }
);
