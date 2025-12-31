import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'DFM_RECORDS';

export async function saveSession(session) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const records = existing ? JSON.parse(existing) : [];

    const updated = [...records, session];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    console.log('✅ SESSION SAVED:', updated);
  } catch (e) {
    console.log('❌ SAVE ERROR', e);
  }
}

export async function getRecords() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    const records = data ? JSON.parse(data) : [];

    console.log('📦 LOADED RECORDS:', records);

    return records;
  } catch (e) {
    console.log('❌ LOAD ERROR', e);
    return [];
  }
}
