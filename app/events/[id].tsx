import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { events } from '../../src/data/events';

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <>
        <Stack.Screen options={{ title: 'Event not found' }} />
        <View style={styles.container}>
          <Text style={styles.title}>Event not found</Text>
          <Text style={styles.detail}>No event with id {id}.</Text>
          <Link href="/events" asChild>
            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            >
              <Text style={styles.buttonText}>Back to events</Text>
            </Pressable>
          </Link>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: event.title }} />
      <View style={styles.container}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.card}>
          <Text style={styles.detail}>Date: {event.date}</Text>
          <Text style={styles.detail}>Place: {event.place}</Text>
          <Text style={styles.detail}>Seats: {event.seats}</Text>
        </View>
        <Link href="/events" asChild>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          >
            <Text style={styles.buttonText}>Back to events</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    gap: 10,
  },
  detail: {
    fontSize: 17,
    color: '#374151',
  },
  button: {
    minHeight: 44,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#2563eb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
