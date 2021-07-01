import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>IS657 Quiz</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 40,
        fontWeight: '600',
        backgroundColor: "#43aa8b",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        width: '100%',
        textAlign: 'center',
        color: 'white',
    },
    container:{
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
