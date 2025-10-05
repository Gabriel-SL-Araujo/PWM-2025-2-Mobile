import { StatusBar } from 'expo-status-bar';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "Gabriel de Souza Leão Araújo";             
  const phrase = "Cientista da Computação em desenvolvimento, apaixonado por aprender,criar e evoluir na área de tecnologia";
  const useLocalImage = true;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text accessibilityRole="header" style={styles.name}>
        {name}
      </Text>

      {useLocalImage ? (
        <Image
          source={require('./assets/me.jpg')}
          style={styles.photo}
          accessibilityLabel={`Foto de ${name}`}
        />
      ) : (

        <Image
          source={{ uri: "https://picsum.photos/600" }}
          style={styles.photo}
          accessibilityLabel={`Foto de ${name}`}
        />
      )}

      <Text style={styles.phrase}>"{phrase}"</Text>

      <View style={styles.linksBox}>
        <Text style={styles.linksTitle}>Links</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/seu-usuario/mini-bio-expo")}
        >
          GitHub: github.com/seu-usuario/mini-bio-expo
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://expo.dev/accounts/seu-usuario/projects/mini-bio-expo")}
        >
          Expo (OTA): expo.dev/accounts/seu-usuario/projects/mini-bio-expo
        </Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#0b0f14',
    minHeight: '100%',
  },
  name: {
    fontSize: 32,
    fontWeight: '800',
    color: '#e6f1ff',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  photo: {
    width: 220,
    height: 220,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#4ea8de',
  },
  phrase: {
    fontSize: 18,
    lineHeight: 26,
    color: '#bcd1e6',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  linksBox: {
    marginTop: 24,
    width: '100%',
    backgroundColor: '#0e1720',
    borderWidth: 1,
    borderColor: '#1f2a37',
    borderRadius: 16,
    padding: 16,
  },
  linksTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#d1e3f8',
    marginBottom: 8,
  },
  link: {
    color: '#7cc4ff',
    marginBottom: 6,
  },
});
