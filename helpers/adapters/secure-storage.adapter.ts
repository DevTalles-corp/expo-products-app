import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export class SecureStorageAdapter {
  static async setItem(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
    }
  }

  static async getItem(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      Alert.alert('Error', 'Failed to get data');
      return null;
    }
  }

  static async deleteItem(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to delete data');
    }
  }
}
