import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './style';
import StyleButton from '../StyledButton';

const CarItem = (props) => {
    return (
      <View style={styles.carContainer}>

        <ImageBackground 
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.image}
        />

        <View style={styles.titles}>
          
          <Text style={styles.title}>NTSA</Text>
          <Text style={styles.subtitle}>Your Safety Matters</Text>

        </View>

      <View style={styles.buttonsContainer}>
          
        <StyleButton type="primary"
          content={"Report an Incident"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyleButton type="secondary"
          content={"Suggestion Box"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
        }}
        />
        
        
        </View>           


        

      </View>
    );

};

export default CarItem; 