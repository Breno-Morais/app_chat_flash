import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Slot } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DataContext } from '@/store/context';

export default function TabLayout() {

    return (
        <>
            <Header />
            <Slot />
        </>
    );
}

export function Header() {
    const { chosenPDF } = useContext(DataContext);

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.emoji}>
                📑 {chosenPDF?.name}
            </ThemedText>
        </ThemedView>
    );
}

// TODO: Wrap when PDF file name is too long

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 15,
        paddingLeft: 15,
    },
    emoji: {
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: 50,
    }
});