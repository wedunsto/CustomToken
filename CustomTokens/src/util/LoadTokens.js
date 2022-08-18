/*
Objective: Parse the token URL for token images
*/
import DomSelector from 'react-native-dom-parser';

const loadTokens=async(tokenURL)=>{
    const response = await fetch(tokenURL);
    const htmlString = await response.text();
    const rootNode = DomSelector(htmlString);
    //return rootNode.getElementsByClassName('cardLink')[0].children[0].attributes.src;
    console.log("=================")
    console.log(rootNode.getElementsByClassName('cardLink')[0].children[0].attributes.src)
    console.log("=================")
}

module.exports={
    loadTokens
}