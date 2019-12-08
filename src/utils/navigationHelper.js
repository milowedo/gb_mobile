import {NavigationActions} from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};


export const navigate = (routeName, params) => {
    console.info("navigationHelper: navigating to " + routeName);
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, params
        })
    )
};
