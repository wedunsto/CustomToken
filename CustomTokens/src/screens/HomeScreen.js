import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HomeScreen =({navigation})=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.headerTextStyle}>Custom Tokens</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Search")}}>
                <Image 
                    style={styles.buttonStyle}
                    source={{uri:"http://107.15.209.95/applications/images/29-291888_plus-png-doctor-plus-symbol-transparent-png.png"}}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerTextStyle:{
        fontSize: 40,
        margin:15,
        textAlign: 'center'
    },
    viewStyle:{
        flex: 1
    },
    buttonStyle:{
        margin: 20,
        marginTop: 200,
        width: 150,
        height: 150,
        alignSelf: 'center'
    }
});

export default HomeScreen;