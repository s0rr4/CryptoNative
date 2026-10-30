import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {useState} from 'react'

const Form = () => {
  const [moneda, setMoneda] = useState('');
  const [crypto, setCrypto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const cotizar = () => {
    setMensaje('Formulario creado');
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(itemValue) => setMoneda(itemValue)}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar USD" value="USD" />
        <Picker.Item label="Peso Mexicano MXN" value="MXN" />
        <Picker.Item label="Euro EUR" value="EUR" />
        <Picker.Item label="Libra Esterlina GBP" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={crypto}
        onValueChange={(itemValue) => setCrypto(itemValue)}
      >
        <Picker.Item label="- Seleccione -" value="" />
      </Picker>

      <Pressable style={styles.btnCotizar} onPress={cotizar}>
        <Text style={styles.textoBtn}>Cotizar</Text>
      </Pressable>

      {mensaje !== '' && (
        <Text style={styles.mensaje}>{mensaje}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    label: {
        textTransform: 'uppercase',
        color: '#5E49E2',
        fontWeight: '700',
        fontSize: 22,
        marginVertical: 20
    },
    pickerInput: {
        height: 50,
        backgroundColor: '#FFF'
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20
    },
    textCotizar: {
        color: '#FFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})
export default Form;