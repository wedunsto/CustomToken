/*
Objectives:
    Store the image of a token
    Store the aditional attributes of a token if they exist
*/

import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const EditedToken =({imageURL})=>{
    return(
        <View style={styles.tokenView}>
            <Image
                style={styles.buttonImageStyle}
                source={{uri: imageURL}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    tokenView:{
        marginBottom: 5
    },
    buttonImageStyle:{
        width: 350,
        height: 350,
        alignSelf: 'center',
        resizeMode:'contain'
    }
});

export default EditedToken;