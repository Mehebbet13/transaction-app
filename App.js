import {StatusBar} from 'react-native';
import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {RootNav} from "./navigation";

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar style="auto"/>
            <RootNav/>
        </Provider>
    );
}

