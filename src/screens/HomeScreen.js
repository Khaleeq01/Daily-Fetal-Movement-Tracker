import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { useEffect, useState } from 'react';
import { getRecords } from '../storage';

export default function HomeScreen({ navigation }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
  const unsubscribe = navigation.addListener('focus', async () => {
    const data = await getRecords();

    // sort latest first
    const sorted = data.sort((a, b) => b.timestamp - a.timestamp);

    setRecords(sorted);
  });

  return unsubscribe;
}, [navigation]);

const renderItem = ({ item }) => {
  const d = new Date(item.timestamp);

  const day = d.toLocaleDateString('en-US', { weekday: 'long' });
  const date = d.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <View style={styles.recordItem}>
      <Text style={styles.recordDate}>
        {day}, {date}
      </Text>
      <Text style={styles.recordTime}>{item.minutes} mins</Text>
    </View>
  );
};


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DFM (Kick counter)</Text>
        <View style={styles.avatar}>
          <Text>👶</Text>
          <Text style={styles.count}>0</Text>
        </View>
      </View>

      {/* Article Card */}
      <View style={styles.articleCard}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a'
          }}
          style={styles.articleImage}
        />

        <View style={styles.articleOverlay}>
          <Text style={styles.articleTag}>leap Articles</Text>

          <TouchableOpacity style={styles.saveBtn}>
            <Text>Save</Text>
          </TouchableOpacity>

          <Text style={styles.articleTitle}>DFM (fetal movement)</Text>
        </View>
      </View>

      {/* CTA */}
      <TouchableOpacity
        style={styles.cta}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.ctaText}>Record fetal movement</Text>
      </TouchableOpacity>

      {/* Past Records */}
      <Text style={styles.sectionTitle}>Past records</Text>

      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:30
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600'
  },

  avatar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },

  count: {
    fontSize: 14
  },

  articleCard: {
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20
  },

  articleImage: {
    width: '100%',
    height: '100%'
  },

  articleOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.35)'
  },

  articleTag: {
    color: '#fff',
    fontWeight: '600'
  },

  saveBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12
  },

  articleTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },

  cta: {
    borderWidth: 1,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20
  },

  ctaText: {
    fontSize: 15,
    fontWeight: '500'
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12
  },

  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10
  },

  recordDate: {
    fontSize: 14
  },

  recordTime: {
    fontSize: 14,
    fontWeight: '500'
  }
});
