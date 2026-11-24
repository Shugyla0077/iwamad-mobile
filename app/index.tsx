import { useState } from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Shugyla Zhambybay</Text>
      <Text style={styles.counter}>Likes: {likes}</Text>
      <Pressable
        onPress={() => setLikes(likes + 1)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>
      <Pressable
        onPress={() => setLikes(0)}
        disabled={likes === 0}
        style={({ pressed }) => [
          styles.resetButton,
          likes === 0 && styles.buttonDisabled,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>
      <Link href="/events" asChild>
        <Pressable
          style={({ pressed }) => [styles.eventsButton, pressed && styles.buttonPressed]}
        >
          <Text style={styles.eventsButtonText}>Events</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
  },
  name: {
    fontSize: 32,
    fontWeight: '500',
    color: '#374151',
  },
  counter: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 8,
  },
  button: {
    minHeight: 44,
    minWidth: 140,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#2563eb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    minHeight: 44,
    minWidth: 140,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
  eventsButton: {
    minHeight: 44,
    minWidth: 140,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#111827',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  eventsButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
});
