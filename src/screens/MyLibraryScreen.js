import React from 'react'
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import NavigationEvents from "@react-navigation/core/src/views/NavigationEvents";
import {Button, ListItem} from "react-native-elements";


const MyLibraryScreen = () => {
    const mock = [
        {_id: "1", name: "Kurt Vonnegut"},
        {_id: "2", name: "Kurt Vonnegut"},
        {_id: "3", name: "Kurt Vonnegut"},
    ];
    return (
        <>
            <NavigationEvents onWillFocus={() => {
                console.log("TO DO: on focus fetch from remote and check if data up to date")
            }}/>
            <FlatList
                data={mock}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return <TouchableOpacity
                        onPress={() => {
                            console.log("TO DO: on click of the position do something ugh")
                        }}>
                        <ListItem chevron title={item.name}/>
                    </TouchableOpacity>
                }}/>

            <Button title={"Go to Track detail"} onPress={() => {
                navigation.navigate('TrackDetail')
            }}/>
        </>
    );
};

MyLibraryScreen.navigationOptions = {
    title: 'My library',
};

export default MyLibraryScreen;
