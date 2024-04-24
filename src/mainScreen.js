import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

export const MainScreen = () => {
    return (
        <View style={style.container}>
            <Title>ここはメイン画面です。</Title>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});