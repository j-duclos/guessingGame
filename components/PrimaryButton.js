import { View, Text, Pressable, StyleSheet } from 'react-native';

function pressHandler() {
    console.log('pressHandler')
}

function PrimaryButton({ children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                android_ripple={{ color: '#2b256e' }}
                onPress={pressHandler}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 25,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#5a4cef',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 'top',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    // For IOS Feedback
    pressed: {
        opacity: 0.75,
    }
})