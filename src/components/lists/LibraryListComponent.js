import React, {useState} from "react";
import {SwipeListView} from "react-native-swipe-list-view";
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LibraryListItem from "./LibraryListItem";
import {Icon} from "react-native-elements";
import BookForm from "../forms/BookForm";
import Spinner from "../utilities/Spinner";

const LibraryListComponent = ({data, deleteBook, showPrice, addBook, editPrice}) => {

    const [clicked, setClicked] = useState(false);

    return data === undefined ? <Spinner/>
        : (
            <>
                <View style={styles.addingNewBookStyleView}>
                    {clicked ?
                        <BookForm addBook={addBook}
                                  showFormCallback={setClicked}/>
                        :
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
                                             book={item}
                                             editCallback={editPrice}/>
                        </TouchableOpacity>
                    )}
                    renderHiddenItem={({item}) => (
                        <View style={styles.rowBack}>

                            {/*<TouchableOpacity*/}
                            {/*    onPress={null}>*/}
                            {/*    <Icon*/}
                            {/*        name='sc-telegram'*/}
                            {/*        type='evilicon'*/}
                            {/*        color='#517fa4'*/}
                            {/*    />*/}
                            {/*    <Text>edit</Text>*/}
                            {/*</TouchableOpacity>*/}

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
                    leftOpenValue={70}
                    rightOpenValue={0}

                    previewRowKey={'3'}
                    previewOpenValue={70}
                    previewOpenDelay={1000}

                    onRowDidOpen={(rowKey, rowMap) => {
                        var xd = new Promise(() => {
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
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
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
