import React from "react";
import {SwipeListView} from "react-native-swipe-list-view";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LibraryListItem from "./LibraryListItem";
import {Icon} from "react-native-elements";

const LibraryListComponent = ({data, deleteBook, showPrice}) => {
    return (
        <SwipeListView
            data={data}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
                <View
                    onPress={() => console.log('You touched ' + item.writer)}
                    style={styles.rowFront}>
                    <LibraryListItem price={showPrice}
                                     book={item}/>
                </View>
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
            leftOpenValue={60}
            rightOpenValue={-70}
            previewRowKey={'3'}
            previewOpenValue={-70}
            previewOpenDelay={1000}
            onRowDidOpen={this.onRowDidOpen}
            onSwipeValueChange={this.onSwipeValueChange}
        />
    )
};

const styles = StyleSheet.create({
    rowFront: {
        backgroundColor: 'white',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 80,
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

export default LibraryListComponent;
