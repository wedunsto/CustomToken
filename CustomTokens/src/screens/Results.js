/*
Show the results of the search criteria
*/
import {React, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
//import DomSelector from 'react-native-dom-parser';
var HTMLParser = require('fast-html-parser')

const Results =({route})=>{
    const [tokenURL, setTokenURL] = useState(null);
    const {searchURL} = route.params
    useEffect(()=>{
        const loadTokens=async()=>{
            const response = await fetch(searchURL);
            const htmlString = await response.text();
            try{
                var root = HTMLParser.parse(htmlString)
                //console.log("==================================")
                for(let i=0; i<root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes[1].childNodes.length; i++){
                    console.log("==================================")
                    console.log(i)
                    console.log(root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes[1].childNodes[i])
                    console.log("==================================")
                }
                //console.log(root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes[1].childNodes)
                //console.log("==================================")
                //const rootNode = await DomSelector(htmlString);
            }
            catch(error){
                console.error(error)
            }
            /*const rootNode = await DomSelector(htmlString);
            console.log("==================================")
            console.log(rootNode.getElementsByClassName('mainListing').length);
            console.log("==================================")
            //setTokenURL(rootNode.getElementsByClassName('cardLink')[0].children[0].attributes.src);*/
        }
        loadTokens()
    }, []);

    return(
        <View style={styles.headerTextStyle}>
            <Image 
                    style={styles.buttonStyle}
                    source={{uri:"http://107.15.209.95/applications/images/29-291888_plus-png-doctor-plus-symbol-transparent-png.png"}}
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