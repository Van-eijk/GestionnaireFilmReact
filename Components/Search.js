import React from 'react'
import {View, TextInput, Button, StyleSheet } from 'react-native'

class Search extends React.Component {
    render() {
        return(
           <View style= {{ marginTop: 20 }}>
                <TextInput style = {styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => {}}/>
                 
           </View>
        )
    }

}


// styles...

const styles = StyleSheet.create({

    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 45,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      }

})

export default Search