import React from "react";
import {StyleSheet, Text, View} from "react-native";

const LibraryListItem = ({book, price}) => {

    return (
        <View style={{flexDirection: 'row'}}>
            <View style={styles.bookInfo}>
                <Text style={styles.titleStyle}>
                    {book.title}
                </Text>

                <Text style={styles.writerStyle}>
                    {book.writer}
                </Text>
            </View>
            {price ?
                <View style={styles.priceStyle}>
                    <Text style>
                        11 zł
                    </Text>
                </View>
                : null}
        </View>
    );
};

export default LibraryListItem;

const styles = StyleSheet.create(
    {
        titleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        writerStyle: {
            fontSize: 14
        },
        bookInfo: {},
        priceStyle: {}
    }
);
