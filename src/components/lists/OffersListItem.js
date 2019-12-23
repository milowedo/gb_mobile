import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {Icon} from "react-native-elements";
import {libraryStyles} from "./LibraryListItem";

const OffersListItem = ({id, sellerName, books, totalPrice, delivery}) => {

    return (
        <View style={offerStyles.container}>
            <Text style={offerStyles.sellerNameStyle}>{sellerName}</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={offerStyles.listStyle}
                data={books}
                keyExtractor={element => element.auction_id}
                listKey={element => `${id}.${element.auction_id}`
                }
                renderItem={({item}) => {
                    return (
                        <View style={offerStyles.listElementStyle}>
                            <View style={offerStyles.bookRowImageChild}>
                                <Icon
                                    name='user'
                                    type='evilicon'
                                    color='#517fa4'
                                    size={28}
                                />
                            </View>
                            <View style={offerStyles.bookRowTextChild}>
                                <Text style={libraryStyles.titleStyle}>{item.writer}</Text>
                                <Text style={libraryStyles.writerStyle}>{item.bookTitle}</Text>
                            </View>
                            <View style={offerStyles.bookRowPriceChild}>
                                <Text style={offerStyles.priceStyle}>{item.priceAmount}</Text>
                                <Text style={offerStyles.currencyStyle}>pln</Text>
                            </View>
                        </View>
                    )
                }}/>
            <View style={offerStyles.bottomInfoStyle}>
                <Text style={offerStyles.bottomInfoTotalPriceStyle}>total: {totalPrice}</Text>
                <Text style={offerStyles.bottomInfoDeliveryStyle}>delivery from: {delivery}</Text>
            </View>
        </View>
    );
};

export default OffersListItem;

const offerStyles = StyleSheet.create(
    {
        container: {
            borderWidth: 3,
            borderColor: '#525257',
            margin: 10,
            padding: 5,
        },
        sellerNameStyle: {
            textAlign: 'right',
            paddingVertical: 6,
            paddingRight: 16,
            // borderWidth: 2,
            // borderColor: 'red'
        },
        listStyle: {
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#525257'
        },
        listElementStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            borderTopWidth: 1,
            borderColor: '#525257',
        },
        bookRowImageChild: {
            alignSelf: 'center',
            width: 50,
        },
        bookRowTextChild: {
            width: '65%',
            paddingLeft: 15,
        },
        bookRowPriceChild: {
            flexDirection: 'row',
            width: 55,
        },
        priceStyle: {
            padding: 5,
            fontWeight: 'bold',
            textAlign: 'right',
            fontSize: 16,
        },
        currencyStyle: {
            fontWeight: 'bold',
            textAlign: 'right',
            alignSelf: 'center',
            fontSize: 16,
        },
        bottomInfoStyle: {
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        bottomInfoTotalPriceStyle: {},
        bottomInfoDeliveryStyle: {},
    }
);
