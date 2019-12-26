import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Icon, Input} from "react-native-elements";

function clearForm(showFormCallback, setPriceCap, setWriter, setTitle) {
    showFormCallback(false);
    setPriceCap("8");
    setWriter('');
    setTitle('')
}

const BookForm = ({showFormCallback, addBook}) => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [priceCap, setPriceCap] = useState("8");
    return (
        <View style={newItemStyles.container}>

            <View style={newItemStyles.leftHandInputsStyle}>
                <Input
                    inputStyle={newItemStyles.titleStyle}
                    placeholder={"Słońce też wschodzi"}
                    value={title}
                    onChangeText={setTitle}
                    multiline
                />
                <Input
                    inputStyle={newItemStyles.writerStyle}
                    placeholder={"Hemingway"}
                    value={writer}
                    onChangeText={setWriter}
                />
            </View>

            <View style={newItemStyles.priceStyle}>
                <Text
                    style={newItemStyles.priceCurrencyStyle}>
                    {"max pln"}
                </Text>
                <Input
                    maxLength={2}
                    inputStyle={newItemStyles.priceInputStyle}
                    value={priceCap}
                    onChangeText={setPriceCap}
                    keyboardType={"numeric"}
                />
            </View>

            <View style={newItemStyles.iconsStyle}>
                <Icon
                    onPress={() => {
                        addBook(title, writer, priceCap);
                        clearForm(showFormCallback, setPriceCap, setWriter, setTitle);
                    }}
                    name='check'
                    type='evilicon'
                    color='#517fa4'
                    size={30}
                />
                <Icon
                    onPress={() => clearForm(showFormCallback, setPriceCap, setWriter, setTitle)}
                    name='close'
                    type='evilicon'
                    color='#517fa4'
                    size={30}
                />
            </View>

        </View>
    );
};

export default BookForm;

export const newItemStyles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            backgroundColor: 'rgba(4,232,68,0.18)'
        },
        leftHandInputsStyle: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            width: '65%',
        },
        priceStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
        },
        priceInputStyle: {
            textAlign: 'center',
        },
        priceCurrencyStyle: {
            alignSelf: 'center'
        },
        iconsStyle: {
            width: '25%',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingRight: 40,
        }
    }
);
