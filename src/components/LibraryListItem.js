import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const LibraryListItem = ({book, price}) => {

    return (
        <View style={styles.container}>
            <View
                onLongPress={() => {
                    alert("pressed it long")
                }}
                style={price ? styles.bookInfoWithPrice : styles.bookInfoWithoutPrice}>
                <Text style={styles.titleStyle}>
                    {book.title}
                </Text>

                <Text style={styles.writerStyle}>
                    {book.writer}
                </Text>
            </View>
            {price ?
                <View style={styles.priceStyle}>
                    <Text>
                        {"max"}
                    </Text>
                    <TextInput
                        style={styles.priceInputStyle}
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

const styles = StyleSheet.create(
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
            paddingRight: 10,
            paddingLeft: 5,
        }
    }
);
