import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context} from "../context/BooksContext";
import LibraryListComponent from "../components/LibraryListComponent";
import {withNavigation} from "@react-navigation/core/src";
import {headerStyles} from "../constants/Layouts";

const WantedScreen = ({navigation}) => {

    const {state : {wanted}, fetchWantedBooks, deleteWantedBook} = useContext(Context);

    useEffect(() => {
        console.info("WantedScreen: useEffect function");
        fetchWantedBooks();
        return () => {
            console.info("WantedScreen: useEffect return");
        }
    }, []);

    return (
        <View style={styles.container}>
            <LibraryListComponent
                data={wanted}
                deleteBook={deleteWantedBook}
            />
        </View>
    );
};


WantedScreen.navigationOptions = {
    title: 'Wanted',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default withNavigation(WantedScreen);
