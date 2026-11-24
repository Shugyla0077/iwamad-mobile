import { useState } from 'react';
import { router } from 'expo-router';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { EventRow } from '../../src/components/EventRow';
import { events } from '../../src/data/events';

export default function EventsScreen() {
  const [query, setQuery] = useState('');
  const [savedIds, setSavedIds] = useState<number[]>([]);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(normalizedQuery)
  );

  const toggleSave = (id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((savedId) => savedId !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search events"
        placeholderTextColor="#9ca3af"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        style={styles.searchInput}
      />
      <Text style={styles.hint}>
        Long-press an event to save it. Saved: {savedIds.length}
      </Text>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <EventRow
            event={item}
            saved={savedIds.includes(item.id)}
            onPress={() => router.push(`/events/${item.id}`)}
            onLongPress={() => toggleSave(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No events match.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
    gap: 12,
  },
  searchInput: {
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
    fontSize: 16,
    color: '#111827',
  },
  hint: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '500',
  },
  listContent: {
    gap: 10,
    paddingBottom: 24,
  },
  empty: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 32,
  },
});
