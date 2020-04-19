import React, {useContext, useEffect} from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import {headerStyles} from "../../constants/Layouts";
import settingsLinkIcon from "../../components/header/settingsLinkIcon";
import OffersListItem from "../../components/lists/OffersListItem";
import {Context as BooksContext} from "../../context/BooksContext";
import {Icon} from "react-native-elements";
import Spinner from "../../components/utilities/Spinner";
import {Context as SettingsContext} from "../../context/SettingsContext";

const OffersScreen = () => {
    const {state: {calculated, wanted, reloadFlag}, calculateOffers} = useContext(BooksContext);

    const {state: {imagesDownloading}, getImagesSettingProperty} = useContext(SettingsContext);

    useEffect(() => {
        let mounted = true;
        if (mounted && imagesDownloading === undefined) {
            getImagesSettingProperty()
        }
        return () => {
            mounted = false;
        }
    }, [imagesDownloading]);

    useEffect(() => {
        if (wanted !== undefined && calculated === undefined) {
            calculateOffers()
        }
    }, [reloadFlag])

    // const useIsMounted = () => {
    //     const isMounted = useRef(false);
    //     useEffect(() => {
    //         isMounted.current = true;
    //         return () => (isMounted.current = false);
    //     }, []);
    //     return isMounted;
    // };
    //
    // const isMounted = useIsMounted();
    //
    // useEffect(() => {
    //     if (isMounted.current) {
    //         calculateOffers();
    //     }
    // }, [isMounted]);

    return (wanted !== undefined && calculated === undefined) || (reloadFlag === true) ? <Spinner/>
        : (
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
                        size={45}
                        containerStyle={{
                            margin: 5,
                            marginLeft: 8,
                            marginTop: 8,
                            alignItems: "flex-start"
                        }}
                        name='refresh'
                        type='evilicon'
                        color="black"
                        onPress={
                            () => {
                                calculateOffers(true)
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
                            return <OffersListItem books={item.bookResult}
                                                   totalPrice={item.seller.total}
                                                   delivery={item.seller.lowestPriceDelivery}
                                                   id={item.seller.seller_id}
                                                   duplicates={item.bookDuplicates}
                                                   imagesDownloading={imagesDownloading}
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
