import {useContext, useEffect} from "react";
import {Context as AuthContext} from "../../context/AuthenticationContext";

export default () => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin()
    }, []);

    return null;
};
