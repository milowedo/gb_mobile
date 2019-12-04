import {Icon, ListItem} from "react-native-elements";
import React from "react";

const LibraryListItem = ({book}) => {
    return (
        <ListItem
            title={book.title}
            subtitle={book.writer}
            bottomDivider
            chevron={
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                    onPress={() => {
                        console.log("TO DO: on click of the position do something")
                    }}
                />
            }
        />
    )
};

export default LibraryListItem;
