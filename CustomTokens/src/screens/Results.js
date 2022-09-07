/*
Show the results of the search criteria
*/
import {React, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
var HTMLParser = require('fast-html-parser')

const Results =({route})=>{
    const [tokenURL, setTokenURL] = useState(null);
    let imageURLs = []

    const {searchURL} = route.params
    useEffect(()=>{
        const loadTokens=async()=>{
            const response = await fetch(searchURL);
            const htmlString = await response.text();
            try{
                var root = HTMLParser.parse(htmlString)
                /*for(let i=0; i<root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes.length; i++){
                    console.log("==================================")
                    console.log(i)
                    console.log(root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes[i])
                    console.log("==================================")
                }*/
                //console.log("==================================")
                //console.log(root.querySelectorAll('img').length)
                //console.log(root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3])
                //console.log(root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1])
                //console.log("==================================")
                
                for(let i=0; i<root.querySelectorAll('img').length; i++){
                    if(root.querySelectorAll('img')[i].classNames.includes("cardSrc")){
                        console.log("==================================")
                        console.log(i)
                        //console.log(root.querySelectorAll('img')[i].hasOwnProperty('class'))
                        //console.log(Object.keys(root.querySelectorAll('img')[i]).length === 0)
                        //console.log(Object.getOwnPropertyNames(root.querySelectorAll('img')[i]))
                        console.log(root.querySelectorAll('img')[i])
                        //console.log(root.querySelectorAll('img')[i])
                        console.log("==================================")
                    }
                }

                let rawAttrs = root.childNodes[0].childNodes[3].childNodes[1].childNodes[5].childNodes[3].childNodes[11].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].rawAttrs
                let startIndex = rawAttrs.indexOf("https")
                let stopIndex = rawAttrs.indexOf("jpg")+3
                setTokenURL(rawAttrs.substring(startIndex, stopIndex))
            }
            catch(error){
                console.error(error)
            }
        }
        loadTokens()
    }, []);
    return(
        <View style={styles.headerTextStyle}>
            <Image 
                    style={styles.buttonStyle}
                    source={{uri: tokenURL}}
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