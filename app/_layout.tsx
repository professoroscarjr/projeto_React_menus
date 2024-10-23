import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import 'react-native-reanimated';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <DrawerItem 
        label="Website" 
        onPress={() => Linking.openURL('https://www.example.com')} 
        labelStyle={styles.drawerItemLabel} // Estilo do texto do DrawerItem
      />
      
      <View style={styles.linkContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()} // Fecha o drawer ao clicar
          style={styles.linkWrapper}
        >
          <Link href={'/(tabs)/explore'} style={styles.linkText}>Explore</Link>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()} // Fecha o drawer ao clicar
          style={styles.linkWrapper}
        >
          <Link href={'/(tabs)/'} style={styles.linkText}>Home</Link>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {/* All other screens should be hidden */}
    </Drawer>
  );
};

// Estilos personalizados para o layout
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f0f0f5',  // Cor de fundo do Drawer
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  drawerItemLabel: {
    fontSize: 18,
    color: '#333',  // Cor do texto
    fontWeight: 'bold', // Texto em negrito
  },
  linkContainer: {
    marginTop: 20,
    paddingVertical: 10,
  },
  linkWrapper: {
    marginVertical: 10,  // Espaço entre links
    padding: 10,
    backgroundColor: '#dfe6e9', // Cor de fundo dos links
    borderRadius: 5,  // Bordas arredondadas
  },
  linkText: {
    fontSize: 16,
    color: '#0984e3',  // Cor dos links
    textAlign: 'center',  // Texto centralizado
    fontWeight: '600',
  },
});
