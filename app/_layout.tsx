import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0F172A' },
        headerTintColor: '#F8FAFC',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'CineApp' }} />
      <Stack.Screen name="catalogo" options={{ title: 'Catálogo' }} />
      <Stack.Screen name="detalhes" options={{ title: 'Detalhes do Filme' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre' }} />
    </Stack>
  );
}
