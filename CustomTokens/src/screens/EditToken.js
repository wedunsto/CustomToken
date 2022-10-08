/*
Edit a token's power, toughness, and abilities
*/

import {React, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const EditToken=({navigation, route})=>{
    const [tokenURLs, setTokenURLs] = useState([1])
    const [tokenID, setTokenID] = useState(0)
    const {imageURL} = route.params
    console.log(imageURL)

    const populateArray =()=>{
        //setDigits(arr => [...arr, {id: digit, value: digit}]);
        setTokenURLs(arr => [...arr, {value: imageURL}])
    }

    return(
        <View>
            <TouchableOpacity
            style={styles.searchButton}
            onPress={populateArray}>
                <Text style={styles.searchText}>Pre-Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.searchButton}>
                <Text style={styles.searchText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchButton:{
        alignSelf: "center",
        marginTop: 150
    },
    searchText:{
        fontSize: 25,
        textAlign: "center",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: 10,
        padding: 5
    }
});

export default EditToken;