import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Linking, TouchableHighlight} from "react-native";
import {libraryStyles} from "./LibraryListItem";
import {pure} from 'recompose';

const OffersListItem = ({id, books, totalPrice, delivery}) => {

    return (
        <View style={offerStyles.container}>
            {/*<Text style={offerStyles.sellerNameStyle}>{id}</Text>*/}

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
                                <Image
                                    source={item.imageUrl[0] ? {uri: item.imageUrl[0].url} : require('../../../assets/images/robot-dev.png')}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                            <TouchableOpacity style={offerStyles.bookRowTextChild}
                                                onPress={() => Linking.openURL("https://allegro.pl/oferta/".concat(item.auction_id)).catch((err) => console.error('An error occurred', err))}>
                                <View>
                                    <Text style={libraryStyles.titleStyle}>{item.bookTitle}</Text>
                                    <Text style={libraryStyles.writerStyle}>{item.writer}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={offerStyles.bookRowPriceChild}>
                                <Text style={offerStyles.priceStyle}>{(item.priceAmount).toFixed(2)}</Text>
                                <Text style={offerStyles.currencyStyle}>pln</Text>
                            </View>
                        </View>
                    )
                }
            }
        />
    <View style={offerStyles.bottomInfoStyle}>
        <Text style={offerStyles.bottomInfoTotalPriceStyle}>total: {(totalPrice).toFixed(2)}</Text>
        <Text style={offerStyles.bottomInfoDeliveryStyle}>+ delivery from: {(delivery).toFixed(2)}</Text>
    </View>
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
            margin: 3,
            width: 50,
            height: 50,
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
