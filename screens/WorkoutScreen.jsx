import React from 'react';
import {Text , View , StyleSheet} from'react-native';

const Home = props =>{
    return(
        <View style={styles.screen}>
        <Text>Home Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignitems:'center',
        justifycontent:'center'
    }
});
export default Home;