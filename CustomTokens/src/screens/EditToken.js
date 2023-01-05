1/*
Edit a token's power, toughness, and abilities
*/

import {React, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const EditToken=({navigation, route})=>{
    const [tokenURLs, setTokenURLs] = useState([0])
    const {imageURL} = route.params

    const populateArray =()=>{
        setTokenURLs(arr => [...arr, {value: imageURL}])
        if(tokenURLs.length > 1){
            console.log(tokenURLs)
            navigation.navigate('Search')
        }
    }

    return(
        <View>
            <TouchableOpacity
            style={styles.searchButton}
            onPress={populateArray}>
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