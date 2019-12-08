import {useContext, useEffect} from "react";
import {Context} from "../../context/AuthenticationContext";


export default () => {
    const {tryLocalSignin} = useContext(Context);

    useEffect(() => {
        tryLocalSignin()
    }, []);

    return null;
};
