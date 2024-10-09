import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import LogoutIconButton from '@/presentation/auth/components/LogoutIconButton';

const CheckAuthenticationLayout = () => {
  const { status, checkStatus } = useAuthStore();
  const backgroundColor = useThemeColor({}, 'background');

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === 'checking') {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (status === 'unauthenticated') {
    // Guardar la ruta del usuario
    return <Redirect href="/auth/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        contentStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Stack.Screen
        name="(home)/index"
        options={{
          title: 'Productos',
          headerLeft: () => <LogoutIconButton />,
        }}
      />
    </Stack>
  );
};
export default CheckAuthenticationLayout;
