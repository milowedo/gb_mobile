import React, {useContext, useEffect} from 'react'
import {View, StyleSheet} from "react-native";
import NavigationEvents from "@react-navigation/core/src/views/NavigationEvents";
import {Context} from "../context/BooksContext";
import LibraryListComponent from "../components/LibraryListComponent";


const MyLibraryScreen = ({navigation}) => {

    const {state : {my}, fetchMyBooks, deleteMyBook} = useContext(Context);

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
                data={my}
                deleteBook={deleteMyBook}
            />
        </View>
    );
};


MyLibraryScreen.navigationOptions = {
    title: 'My library',
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
        backgroundColor: 'white',
        paddingTop: 5,
        flex: 1,
    }
});

export default MyLibraryScreen;
