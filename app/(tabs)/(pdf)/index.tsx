import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { DataContext } from '@/store/context';
import { Button } from '@/components/Button';
import { useContext } from 'react';

export default function PDFScreen() {
    const { chosenPDF } = useContext(DataContext);

    return (
        <ThemedView style={styles.container}>
            <ThemedText>
                Description: {chosenPDF!.description}
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title' style={styles.emoji}>
                🤖
                </ThemedText>
                <Button
                    onPress={() => console.log('chat')}
                    title="Chat with PDF"
                />
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title' style={styles.emoji}>
                📚
                </ThemedText>
                <Button
                    onPress={() => console.log('chat')}
                    title="Study Flashcards"
                />
            </ThemedView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title' style={styles.emoji}>
                🔊
                </ThemedText>
                <Button
                    onPress={() => console.log('chat')}
                    title="Listen PDF"
                />
            </ThemedView>            
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        height: '100%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
    },
    emoji: {
        lineHeight: 40
    }
});
