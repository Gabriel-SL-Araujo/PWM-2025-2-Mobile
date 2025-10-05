// App.js
import { StatusBar } from 'expo-status-bar';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "Gabriel Araújo"; // <-- seu nome
  const bio = "Sou estudante de Ciência da Computação, focado em QA/automação com Python e desenvolvimento de habilidades no meu White Room. Curioso por Machine Learning, gosto de treinar, estudar inglês (Cambridge) e construir projetos que unem teoria e prática.";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text accessibilityRole="header" style={styles.name}>
        {name}
      </Text>

      {/* Opção A: imagem local em assets/me.jpg */}
       <Image
        source={{ uri: "https://picsum.photos/600" }} // troque para a URL real da sua foto se quiser
        style={styles.photo}
        accessibilityLabel={`Foto de ${name}`}
      />

      {/* Opção B (alternativa): usar URL. 
          Se usar URL, troque o bloco acima por:
          <Image source={{ uri: "https://link-da-sua-foto" }} style={styles.photo} /> */}

      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.linksBox}>
        <Text style={styles.linksTitle}>Links</Text>
        <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/seu-usuario/mini-bio-expo")}>
          GitHub: github.com/seu-usuario/mini-bio-expo
        </Text>
        <Text style={styles.link} onPress={() => Linking.openURL("https://expo.dev/accounts/seu-usuario/projects/mini-bio-expo")}>
          Expo: expo.dev/accounts/seu-usuario/projects/mini-bio-expo
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
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#bcd1e6',
    textAlign: 'center',
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
