import {NavigationActions} from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
    let action;
    if (routeName === "Back") {
        action = NavigationActions.back({key: params["current"]});
    } else {
        action = NavigationActions.navigate({
            routeName, params
        });
    }
    navigator.dispatch(action);
};
