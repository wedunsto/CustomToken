1/*
Edit a token's power, toughness, and abilities
*/

import {React, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

const EditToken=({navigation, route})=>{
    const [tokenURLs, setTokenURLs] = useState([0])
    const [power, setPower] = useState(null);
    const [toughness, setToughness] = useState(null);
    const [abilities, setAbilities] = useState(null);
    const {imageURL} = route.params

    const populateArray =()=>{
        setTokenURLs(arr => [...arr, {value: imageURL}])
        if(tokenURLs.length > 1){
            navigation.navigate('Search')
        }
    }

    return(
        <View style={styles.background}>
            <Image
                style={styles.tokenImage}
                source={{uri: imageURL}}
            /> 
            <View style={styles.powerToughnessEdits}>
                <TextInput
                    style={styles.powerToughness}
                    value={power}
                    onChangeText={setPower}
                    placeholder="0"
                />
                <Text style={{fontSize: 25}}>/</Text>
                <TextInput
                    style={styles.powerToughness}
                    value={toughness}
                    onChangeText={setToughness}
                    placeholder="0"
                />
            </View> 
            <View>
                <TextInput
                    style={styles.powerToughness}
                    value={abilities}
                    onChangeText={setAbilities}
                    placeholder="None"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        flex: 1
    },
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
    },
    tokenImage:{
        marginTop: 30,
        width: 350,
        height: 350,
        alignSelf: 'center',
        resizeMode:'contain'
    },
    powerToughnessEdits:{
        margin: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    powerToughness:{
        fontSize: 25,
        textAlign: 'center',
        borderWidth: 3,
        borderColor:"black",
        borderRadius: 10,
        padding: 5,
        marginHorizontal: 5
    }
});

export default EditToken;