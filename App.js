import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Form from '../CryptoNative/Components/Formulario'
import { StyleSheet, Text} from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style ={styles.gretting}>CryptoNative</Text>
        <Form/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gretting: {
    fontSize: 30,
    fontWeight: '800'
  }
});



