import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { List } from "react-native-paper";

const memos = [
    {
        text: 'メモ1',
        createdAt: 1713948778000
    },
    {
        text: 'メモ2',
        createdAt: 1713948778010
    },
    {
        text: 'メモ3',
        createdAt: 1713948778100
    },
    {
        text: 'メモ4',
        createdAt: 1713948778200
    }
]

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={memos}
                keyExtractor={item => `${item.createdAt}`}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.text}
                        description={item.createdAt} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
});