import React, { useState } from "react";
import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput, Button } from 'react-native-paper';

export const ComposeScreen = () => {
    const [text, setText] = useState('');
    const onPressSave = () => {
        // ToDO 保存処理
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput style={{ marginBottom: 16 }}
                mode="outlined"
                placeholder="メモを入力してください"
                multiline
                onChangeText={(text) => setText(text)} />
            <Button
                mode="contained"
                onPress={onPressSave}>保存</Button>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});