import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Quiz = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>This is a question for the quiz  </Text>
            </View>
            <View style={styles.options}>
            <TouchableOpacity>
                <Text>Option 1</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Option 2</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Option 3</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text>Option 4</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity>
                <Text>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Result")}>
                <Text> END </Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
    container:{
        padding: 12,
        height: '100%',

    },
    top:{
        marginVertical: 16,
    },
    options:{
        marginVertical: 16,
        flex: 1,
    },
    bottom:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

});
