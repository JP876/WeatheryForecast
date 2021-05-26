import { useEffect, useReducer } from 'react';

const useLocalStorageReducer = (key, defaultVal, reducer) => {
    // make piece of state, based off of value in localstorage
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });
    // use useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, dispatch];
};

export default useLocalStorageReducer;
