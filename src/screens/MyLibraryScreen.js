import React, {useContext} from 'react'
import {
    Text, TouchableOpacity, View, StyleSheet, TouchableHighlight,
} from "react-native";
import {SwipeListView} from 'react-native-swipe-list-view';
import {Icon} from "react-native-elements";
import LibraryListItem from "../components/LibraryListItem";
import NavigationEvents from "@react-navigation/core/src/views/NavigationEvents";
import {Context} from "../context/BooksContext";


const MyLibraryScreen = () => {
    const {state, fetchWantedBooks, deleteBook} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={() => {
                fetchWantedBooks()
            }}/>
            <SwipeListView
                data={state}
                keyExtractor={item => item._id}
                renderItem={({item}) => (
                    <TouchableHighlight
                        onPress={() => console.log('You touched ' + item.writer)}
                        style={styles.rowFront}>
                        <LibraryListItem book={item}/>
                    </TouchableHighlight>
                )}
                renderHiddenItem={({item}) => (
                    <View style={styles.rowBack}>

                        <TouchableOpacity onPress={null}>
                            <Icon
                                name='sc-telegram'
                                type='evilicon'
                                color='#517fa4'
                                onPress={() => {
                                    console.log("TO DO: on click of the position do something")
                                }}
                            />
                            <Text>edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.backRightBtn}
                            onPress={() => {
                                console.log("delete clicked");
                                deleteBook(item._id);
                            }}>
                            <Text>delete</Text>
                            <Icon
                                name='sc-telegram'
                                type='evilicon'
                                color='#517fa4'
                            />
                        </TouchableOpacity>

                    </View>
                )}
                renderSectionHeader={({section}) => (
                    <Text>{section.title}</Text>
                )}
                leftOpenValue={60}
                rightOpenValue={-70}
                previewRowKey={'3'}
                previewOpenValue={-70}
                previewOpenDelay={1000}
                onRowDidOpen={this.onRowDidOpen}
                onSwipeValueChange={this.onSwipeValueChange}
            />
        </View>
    );
};


MyLibraryScreen.navigationOptions = {
    title: 'My library',
    headerStyle: {
        backgroundColor: '#517fa4',
    },
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    rowFront: {
        backgroundColor: 'white',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 70,
        paddingHorizontal: 15
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MyLibraryScreen;
