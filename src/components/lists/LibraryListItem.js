import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const LibraryListItem = ({book, price}) => {

    return (
        <View style={libraryStyles.container}>
            <View
                style={price ? libraryStyles.bookInfoWithPrice : libraryStyles.bookInfoWithoutPrice}>
                <Text style={libraryStyles.titleStyle}>
                    {book.title}
                </Text>

                <Text style={libraryStyles.writerStyle}>
                    {book.writer}
                </Text>
            </View>
            {price ?
                <View style={libraryStyles.priceStyle}>
                    <Text
                        style={libraryStyles.priceStyle_top}>
                        {"max"}
                    </Text>
                    <View style={libraryStyles.priceStyle_bottom}>
                        <TextInput
                            selectTextOnFocus
                            style={libraryStyles.priceInputStyle}
                            keyboardType={"numeric"}
                            maxLength={2}
                            onBlur={() => console.log("TODO change books price")}
                        >
                            {book.price}
                        </TextInput>
                        <Text
                            style={libraryStyles.priceCurrencyStyle}>
                            {"pln"}
                        </Text>
                    </View>
                </View>
                : null}
        </View>
    );
};

export default LibraryListItem;

export const libraryStyles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between'

        },
        titleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        writerStyle: {
            fontSize: 14,
        },
        bookInfoWithPrice: {
            width: '80%',
        },
        bookInfoWithoutPrice: {
            width: '80%',
        },
        priceStyle: {
            paddingRight: 15,
            alignItems: 'center',
            justifyContent: 'center'
        },
        priceStyle_top: {
            height: 16,
        },
        priceStyle_bottom: {
            paddingRight: 6,
            flexDirection: 'row',
            alignItems: 'flex-start'
        },
        priceInputStyle: {
            textAlign: 'center',

        },
        priceCurrencyStyle: {
            alignSelf: 'center'
        },
    }
);
