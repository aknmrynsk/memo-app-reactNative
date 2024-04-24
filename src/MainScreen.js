import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { List } from "react-native-paper";
import format from "date-fns/format";

const memos = [
    {
        text: 'メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1メモ1',
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
                        titleNumberOfLines={5}
                        description={`作成日時:${format(item.createdAt,
                            'yyyy.mm.dd HH:mm')}`}
                        descriptionStyle={{ textAlign: 'right' }} />

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