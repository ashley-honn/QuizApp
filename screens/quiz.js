import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const getQuiz= async () => {
        const url= 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res= await fetch(url);
        const data= await res.json();
        console.log(data.results[0]);
        setQuestions(data.results);
    };
    useEffect(() =>{
        getQuiz();
    }, []);
    return (
    <View style={styles.container}>
        {questions && (
            <View style={styles.parent}>
            <View style={styles.top}>
                <Text style={styles.question}>Q. {questions[ques].question}</Text>
            </View>
            <View style={styles.options}>

            <TouchableOpacity style={styles.touching}>
                <Text style={styles.option}>Option1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touching}>
                <Text style={styles.option}>Option 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touching}>
                <Text style={styles.option}>Option 3</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.touching}>
                <Text style={styles.option}>Option 4</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}> END </Text>
    </TouchableOpacity>
            </View>
        </View>
    )}
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
    container:{
        paddingTop: 50,
        paddingHorizontal: 40,
        height: "100%",
    },
    button:{
        backgroundColor: "#70d6ff",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '600',
        
    },
    question:{
        fontSize: 28,
        color: "#335c67",
        backgroundColor: "#84a98c",
        padding: 16,
        borderRadius: 20,
        fontWeight: "500",
    },
    option:{
        fontSize: 18,
        fontWeight: "500",
        

    },
    touching:{
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#bee1e6",
        borderRadius: 16,
        padding: 20,
        borderRadius: 12, 
    },
    parent:{
    height: '%100',
    },
});
