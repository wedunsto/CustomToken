/*
Show the results of the search criteria
*/
import {React, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
//const {loadTokens} = require('../util/LoadTokens');
import DomSelector from 'react-native-dom-parser';

const Results =({route})=>{
    const [tokenURL, setTokenURL] = useState(null);
    const {searchURL} = route.params
    useEffect(()=>{
        const loadTokens=async()=>{
            const response = await fetch(searchURL);
            const htmlString = await response.text();
            const rootNode = DomSelector(htmlString);
            setTokenURL(rootNode.getElementsByClassName('cardLink')[0].children[0].attributes.src);
        }
        loadTokens()
    }, []);

    return(
        <View style={styles.headerTextStyle}>
            <Image 
                    style={styles.buttonStyle}
                    source={{uri:tokenURL}}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    headerTextStyle:{
        flex: 1,
    },
    buttonStyle:{
        marginTop: 40,
        width: 350,
        height: 350,
        alignSelf: 'center',
        resizeMode:'contain'
    }
});

export default Results;