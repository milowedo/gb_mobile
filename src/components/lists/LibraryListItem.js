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
                    <Text>
                        {"max"}
                    </Text>
                    <TextInput
                        style={libraryStyles.priceInputStyle}
                        keyboardType={"numeric"}
                        maxLength={2}
                        onBlur={() => console.log("TODO change books price")}
                    >
                        {book.price}
                    </TextInput>
                    <Text>
                        {"pln"}
                    </Text>
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
            alignItems: 'center',
            flexDirection: 'row',
        },
        priceInputStyle: {
            textAlign: 'right',
            paddingVertical: 5,
            paddingRight: 2,
        }
    }
);
