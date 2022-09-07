/*
Edit a token's power, toughness, and abilities
*/

import {React} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const EditToken=({route})=>{
    const {imageURL} = route.params
    return(
        <View>
            <Text>{imageURL}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditToken;