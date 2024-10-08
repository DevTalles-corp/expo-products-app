import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { KeyboardAvoidingView, useWindowDimensions, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
const LoginScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText type="title">Ingresar</ThemedText>
          <ThemedText style={{ color: 'grey' }}>
            Por favor ingrese para continuar
          </ThemedText>
        </View>

        {/* Email y Password */}
        <View style={{ marginTop: 20 }}>
          <ThemedTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />

          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
