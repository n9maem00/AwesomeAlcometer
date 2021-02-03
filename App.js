import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [promilles, setPromilles] = useState (0);

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
   

    if (gender === 'male'){
      result = gramsLeft / (weight * 0.7);
    } else{
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0){
      return;
    }
    setPromilles(result);
  }



  return (
    <View style={styles.container}>

      <View style={styles.field}>
        <Text style={styles.weight}>Weight</Text>
          <TextInput style={styles.input} 
                    keyboardType="numeric" 
                    placeholder="Enter weight"
                    value={weight} 
                    onChangeText={text => setWeight(text)}
          ></TextInput>
      </View>

      <View style={styles.field, {zIndex:6000}}>
        <Text style={styles.bottles}>Bottles</Text>
          <DropDownPicker items={[
            {label: '1 bottle', value: 1},
            {label: '2 bottles', value: 2},
            {label: '3 bottles', value: 3},
            {label: '4 bottles', value: 4},
            {label: '5 bottles', value: 5},
          ]}
          containerStyle={{height: 40}}
          labelStyle= {{color: '#000'}}
          defaultValue={1}
          onChangeItem= {item => setBottles(item.value)}
          >
          </DropDownPicker>
      </View>


      <View style={styles.field, {zIndex:5000}}>
        <Text style={styles.time}>Time</Text>
          <DropDownPicker items={[
            {label: '1 hour', value: 1},
            {label: '2 hours', value: 2},
            {label: '3 hours', value: 3},
            {label: '4 hours', value: 4},
            {label: '5 hours', value: 5},
          ]}
          containerStyle={{height: 40}}
          labelStyle= {{color: '#000'}}
          defaultValue={1}
          onChangeItem= {item => setTime(item.value)}
          >
          </DropDownPicker>
      </View>



      <View style={styles.field}>
        <Text style={styles.gender}>Gender</Text>
          <RadioForm
          radio_props={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'}
          ]}
          onPress={(value) => {setGender(value)}}
          style= {styles.dropdown}
          >
          </RadioForm>
      </View>



      <View>
        <Text style={styles.promilles}>Promilles</Text>
          <Text style={styles.field}>{promilles.toFixed(2)}</Text>
            <Button onPress={calculate} title='Calculate'  >Calculate</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10
  },
  input: {
    marginTop: 10,
  },
  dropdown: {
    zIndex: 100,
  },
  field: {
    marginBottom: 10,
  },
  gender: {
    marginTop: 20,
    marginBottom: 5,
    color: '#599c9a'
  },
  time: {
    marginTop: 20,
    marginBottom: 5,
    color: '#599c9a'
  },
  bottles: {
    marginTop: 20,
    marginBottom: 5,
    color: '#599c9a'
  },
  weight: {
    marginTop: 20,
    color: '#599c9a',
  },
  promilles: {
    color: '#599c9a',
    marginBottom: 5,
  },
  
  
});
