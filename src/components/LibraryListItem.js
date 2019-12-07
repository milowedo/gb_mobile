import React from "react";
import {StyleSheet, Text, View} from "react-native";

const LibraryListItem = ({book}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>
                {book.title}
            </Text>

            <Text style={styles.writerStyle}>
                {book.writer}
            </Text>
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
        }
    }
);
