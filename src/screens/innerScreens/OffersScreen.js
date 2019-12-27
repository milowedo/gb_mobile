import React, {useContext, useEffect, useRef} from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import {headerStyles} from "../../constants/Layouts";
import settingsLinkIcon from "../../components/header/settingsLinkIcon";
import OffersListItem from "../../components/lists/OffersListItem";
import {Context} from "../../context/BooksContext";
import {Icon} from "react-native-elements";

const OffersScreen = () => {
    const {state: {calculated}, calculateOffers} = useContext(Context);

    const useIsMounted = () => {
        const isMounted = useRef(false);
        useEffect(() => {
            isMounted.current = true;
            return () => (isMounted.current = false);
        }, []);
        return isMounted;
    };

    const isMounted = useIsMounted();

    useEffect(() => {
        if (isMounted.current) {
            calculateOffers();
        }
    }, [isMounted]);


    return (
        <>
            {/*TODO implement it in further release*/}
            {/*<View style={styles.topGroupWithButtonsStyle}>*/}
            {/*    /!*<Text style={styles.filterHeaderStyle}>filter</Text>*!/*/}
            {/*    <View style={styles.buttonsTopGroupStyle}>*/}
            {/*        <Button*/}
            {/*            containerStyle={styles.singleButtonTopStyle}*/}
            {/*            title={"count"}*/}
            {/*        />*/}
            {/*        <Button*/}
            {/*            containerStyle={styles.singleButtonTopStyle}*/}
            {/*            title={"lowest price"}*/}
            {/*        />*/}
            {/*        <Button*/}
            {/*            containerStyle={styles.singleButtonTopStyle}*/}
            {/*            title={"include"}*/}
            {/*        />*/}
            {/*    </View>*/}
            {/*</View>*/}
            <View>
                <Icon
                    size={20}
                    containerStyle={{
                        alignItems:"flex-end"}}
                    name='refresh'
                    type='evilicon'
                    color="black"
                    onPress={
                        () => {
                            calculateOffers()
                        }
                    }
                />
            </View>
            <View style={styles.offersListStyle}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={calculated}
                    keyExtractor={offer => offer.seller.seller_id}
                    renderItem={({item}) => {
                        return <OffersListItem sellerName={item.seller.seller_id}
                                               books={item.bookResult}
                                               totalPrice={item.seller.total}
                                               delivery={item.seller.lowestPriceDelivery}
                                               id={item.seller.seller_id}
                        />

                    }
                    }/>
            </View>

        </>
    )
};

OffersScreen.navigationOptions = {
    title: 'Offers',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerRight: settingsLinkIcon,
};

const styles = StyleSheet.create({
    topGroupWithButtonsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomColor: '#525257',
        borderBottomWidth: 2,
    },
    buttonsTopGroupStyle: {
        height: 60,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singleButtonTopStyle: {
        marginHorizontal: 5,
    },
    filterHeaderStyle: {
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    offersListStyle: {
        flex: 1,
    }
});

export default OffersScreen;
