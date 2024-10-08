import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import { useRef, useState } from 'react';

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'text');

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View
      style={{
        ...styles.border,
        borderColor: isActive ? primaryColor : '#ccc',
      }}
      onTouchStart={() => inputRef.current?.focus()}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={textColor}
          style={{ marginRight: 10 }}
        />
      )}

      <TextInput
        ref={inputRef}
        placeholderTextColor="#5c5c5c"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={{
          color: textColor,
          marginRight: 10,
          flex: 1,
        }}
        {...rest}
      />
    </View>
  );
};
export default ThemedTextInput;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
