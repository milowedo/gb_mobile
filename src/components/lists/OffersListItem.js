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
                keyExtractor={element => element._id}
                listKey={element => `${id}.${element._id}`
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
                                <Text style={libraryStyles.titleStyle}>{item.title}</Text>
                                <Text style={libraryStyles.writerStyle}>{item.writer}</Text>
                            </View>
                            <View style={offerStyles.bookRowPriceChild}>
                                <Text style={offerStyles.priceStyle}>{item.price}</Text>
                            </View>
                        </View>
                    )
                }}/>
            <View style={offerStyles.bottomInfoStyle}>
                <Text style={offerStyles.bottomInfoTotalPriceStyle}>total: {totalPrice}</Text>
                <Text style={offerStyles.bottomInfoDeliveryStyle}>delivery options: {delivery}</Text>
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
            borderTopWidth: 1,
            borderColor: '#525257'
        },
        bookRowImageChild: {
            alignSelf: 'center',
            width: 50,
            // borderWidth: 1,
            // borderColor: 'red'
        },
        bookRowTextChild: {
            width: '65%',
            paddingLeft: 15,
            // borderWidth: 1,
            // borderColor: 'green'
        },
        bookRowPriceChild: {
            alignSelf: 'flex-end',
            borderWidth: 1,
            borderColor: 'pink'
        },
        priceStyle: {
            padding: 5,
            fontWeight: 'bold',
            fontSize: 18,
        },
        bottomInfoStyle: {
            marginHorizontal: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // borderWidth: 1,
            // borderColor: 'blue'
        },
        bottomInfoTotalPriceStyle: {},
        bottomInfoDeliveryStyle: {}
    }
);
