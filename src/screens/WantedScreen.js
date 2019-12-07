import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context} from "../context/BooksContext";
import LibraryListComponent from "../components/LibraryListComponent";
import {withNavigation} from "@react-navigation/core/src";

const WantedScreen = ({navigation}) => {

    const {state : {wanted}, fetchWantedBooks, deleteWantedBook} = useContext(Context);

    useEffect(() => {
        console.log("Wanted first time");
        fetchWantedBooks();
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
    headerStyle: {
        backgroundColor: '#517fa4',
        height: 100,
    },
    headerTitleStyle: {
        color: 'white'
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#fff',
    },
});

export default withNavigation(WantedScreen);
