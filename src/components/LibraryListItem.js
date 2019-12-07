import React from "react";
import {StyleSheet, Text} from "react-native";

const LibraryListItem = ({book}) => {
    return (
        <>
            <Text style={styles.titleStyle}>
                {book.title}
            </Text>

            <Text style={styles.writerStyle}>
                {book.writer}
            </Text>
        </>
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
