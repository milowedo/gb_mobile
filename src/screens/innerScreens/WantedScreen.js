import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as BooksContext} from "../../context/BooksContext";
import LibraryListComponent from "../../components/lists/LibraryListComponent";
import {headerStyles} from "../../constants/Layouts";
import settingsLinkIcon from "../../components/header/settingsLinkIcon";
import {withNavigation} from "react-navigation";

const WantedScreen = () => {

    const {state: {wanted}, fetchWantedBooks, deleteWantedBook, addBookToWanted, editWantedBookPrice} = useContext(BooksContext);

    useEffect(() => {
        console.debug("WantedScreen: inside useEffect function");
        fetchWantedBooks();
        return () => {
            console.debug("WantedScreen: useEffect return");
        }
    }, []);

    return (
        <View style={styles.container}>
            <LibraryListComponent
                showPrice={true}
                data={wanted}
                deleteBook={deleteWantedBook}
                addBook={addBookToWanted}
                editPrice={editWantedBookPrice}
            />
        </View>
    );
};

WantedScreen.navigationOptions = {
    title: 'Wanted',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerRight: settingsLinkIcon,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default withNavigation(WantedScreen);
