import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';

import { DataContext } from '@/store/context';
import { useContext } from 'react';

export default function HomeScreen() {
    const { pdfs } = useContext(DataContext);

    return (
        <ThemedView style={styles.list}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome!</ThemedText>
            </ThemedView>
            <Button
                onPress={() => console.log('vida')}
                title="Upload meu PDF"
            />
            {pdfs.map(pdf => <Button onPress={() => console.log(`Clicou no pdf ${pdf.name}`)} title= {pdf.name} />)}
        </ ThemedView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        maxWidth: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '15%',
    },
    list: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        height: '100%',
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
