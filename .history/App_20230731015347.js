// SHA1 Fingerprint = 93:67:57:FC:C8:03:2C:FC:F4:DB:E1:61:EE:29:AB:75:CA:2D:B1:FF

// ID do cliente = 653357165851 - pmon2earat97vos49ujtpdsf6f5pofqg.apps.googleusercontent.com;

// {"installed":{"client_id":"653357165851-pmon2earat97vos49ujtpdsf6f5pofqg.apps.googleusercontent.com","project_id":"sinuous-faculty-394420","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs"}}

import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "653357165851-pmon2earat97vos49ujtpdsf6f5pofqg.apps.googleusercontent.com",
  });

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.setItem("@user");
    if (!user) {
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text>TESTE</Text>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
