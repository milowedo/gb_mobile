import React from 'react'
import {
    Text, TouchableOpacity, View, StyleSheet,
    Dimensions, TouchableHighlight,
} from "react-native";
import {SwipeListView} from 'react-native-swipe-list-view';
import {Icon} from "react-native-elements";


const MyLibraryScreen = () => {
    const mock = [
        {_id: "0", writer: "Kurt Vonnegut", title: "Slaughterhouse no 5"},
        {
            _id: "1",
            writer: "Philip Gourevitch",
            title: "We Wish to Inform You That Tomorrow We Will Be Killed with Our Families"
        },
        {_id: "2", writer: "Philip Kindred Dick", title: "Do Androids Dream of Electric Sheep?"},
        {_id: "3", writer: "Jerome K. Jerome", title: "Trzech panów w łódce (nie licząc psa)"},
        {_id: "4", writer: "James Jones", title: "The Thin Red Line"},
        {_id: "5", writer: "William Golding", title: "Widzialna ciemność"},
        {_id: "6", writer: "Luke Dittrich", title: "Eksperyment"},
        {_id: "7", writer: "Franz Kafka", title: "Proces"},
        {_id: "8", writer: "Niccolò Machiavelli", title: "Książe"},
        {_id: "9", writer: "James Clavell", title: "Król szczurów"},
        {_id: "10", writer: "Norman Davies", title: "Boże igrzysko"},
        {_id: "11", writer: "Jaume Cabré", title: "Głosy panamo"},
        {_id: "12", writer: "Jaume Cabré", title: "Wyznaję"},
        {
            _id: "13",
            writer: "Alexandra Elizabeth Sheedy",
            title: "She Was Nice To Mice: The Other Side of Elizabeth I's Character Never Before Revealed by Previous Historians"
        },
    ];
    return (
        <View style={styles.container}>
            <SwipeListView
                data={mock}
                keyExtractor={item => item._id}
                renderItem={({item}) => (
                    <TouchableHighlight
                        onPress={() => console.log('You touched ' + item.writer)}
                        style={styles.rowFront}
                    >
                        <Text>
                            {item.title}
                        </Text>
                    </TouchableHighlight>
                )}
                renderHiddenItem={(data, rowMap) => (
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
                            onPress={null}>
                            <Text>delete</Text>
                            <Icon
                                name='sc-telegram'
                                type='evilicon'
                                color='#517fa4'
                                onPress={() => {
                                    console.log("TO DO: on click of the position do something")
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                )}
                renderSectionHeader={({section}) => (
                    <Text>{section.title}</Text>
                )}
                leftOpenValue={60}
                rightOpenValue={-70}
                previewRowKey={'0'}
                previewOpenValue={-70}
                previewOpenDelay={1000}
                onRowDidOpen={this.onRowDidOpen}
                onSwipeValueChange={this.onSwipeValueChange}
            />
        </View>

    )
};

MyLibraryScreen.navigationOptions = {
    title: 'My library',
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 70,
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
