// SHA1 Fingerprint = 93:67:57:FC:C8:03:2C:FC:F4:DB:E1:61:EE:29:AB:75:CA:2D:B1:FF


// ID do cliente = 653357165851 - pmon2earat97vos49ujtpdsf6f5pofqg.apps.googleusercontent.com;


// {"installed":{"client_id":"653357165851-pmon2earat97vos49ujtpdsf6f5pofqg.apps.googleusercontent.com","project_id":"sinuous-faculty-394420","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs"}}

import * as Rea]
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TESTE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
