import React, {useState} from "react";
import {SwipeListView} from "react-native-swipe-list-view";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LibraryListItem from "./LibraryListItem";
import {Icon} from "react-native-elements";
import BookForm, {newItemStyles} from "../forms/BookForm";

const LibraryListComponent = ({data, deleteBook, showPrice}) => {

    const [clicked, setClicked] = useState(false);

    return (
        <>
            <View style={styles.addingNewBookStyleView}>
                {clicked ? <BookForm showFormTrigger={setClicked}/> :
                    <TouchableOpacity
                        style={styles.inputTriggerStyle}
                        onPress={() => {
                            setClicked(true);
                        }}>
                        <Text style={styles.inputTriggerTextStyle}>new book</Text>
                    </TouchableOpacity>}
            </View>

            <SwipeListView
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item._id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => console.log('You touched ' + item.writer)}
                        style={styles.rowFront}>
                        <LibraryListItem price={showPrice}
                                         book={item}/>
                    </TouchableOpacity>
                )}
                renderHiddenItem={({item}) => (
                    <View style={styles.rowBack}>

                        <TouchableOpacity
                            onPress={null}>
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

                onRowDidOpen={(rowKey, rowMap) => {
                    new Promise(() => {
                        setTimeout(() => {
                            rowMap[rowKey] ? rowMap[rowKey].closeRow() : null;
                        }, 5000)
                    }).then();
                }}

                closeOnRowPress
            />
        </>

    )
};

const styles = StyleSheet.create({
    rowFront: {
        backgroundColor: 'white',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        paddingVertical: 15,
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
    },
    addingNewBookStyleView: {
        borderBottomWidth: 2,
        borderTopWidth: 2,
    },
    inputTriggerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: 'rgba(4,232,68,0.18)'
    },
    inputTriggerTextStyle: {
        textAlign: 'center',
    }
});

export default LibraryListComponent;
