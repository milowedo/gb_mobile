import React, {useContext, useEffect} from 'react'
import {StyleSheet, View} from "react-native";
import {Context as BooksContext} from "../../context/BooksContext";
import LibraryListComponent from "../../components/lists/LibraryListComponent";
import {headerStyles} from "../../constants/Layouts";
import settingsLinkIcon from "../../components/header/settingsLinkIcon";

const MyLibraryScreen = () => {

    const {state: {my}, fetchMyBooks, deleteMyBook, addBookToLibrary} = useContext(BooksContext);

    useEffect(() => {
        console.info("MyLibraryScreen: useEffect function");
        fetchMyBooks();
        return () => {
            console.info("MyLibraryScreen: useEffect return");
        }
    }, []);

    return (
        <View style={styles.container}>
            <LibraryListComponent
                showPrice={false}
                data={my}
                deleteBook={deleteMyBook}
                addBook={addBookToLibrary}
            />
        </View>
    );
};

MyLibraryScreen.navigationOptions = {
    headerTitle: 'My library',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerRight: settingsLinkIcon,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});

export default MyLibraryScreen;
