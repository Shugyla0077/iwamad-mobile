import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { CampusEvent } from '../data/events';

type EventRowProps = {
  event: CampusEvent;
  saved: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export function EventRow({ event, saved, onPress, onLongPress }: EventRowProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.row,
        saved && styles.rowSaved,
        pressed && styles.rowPressed,
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{event.title}</Text>
        {saved && <Text style={styles.savedBadge}>★ Saved</Text>}
      </View>
      <Text style={styles.meta}>
        {event.date} · {event.place} · {event.seats} seats
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 60,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    gap: 4,
  },
  rowSaved: {
    borderColor: '#f59e0b',
    backgroundColor: '#fffbeb',
  },
  rowPressed: {
    backgroundColor: '#dbeafe',
    borderColor: '#93c5fd',
    opacity: 0.85,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    flexShrink: 1,
  },
  savedBadge: {
    fontSize: 13,
    fontWeight: '700',
    color: '#b45309',
  },
  meta: {
    fontSize: 14,
    color: '#4b5563',
  },
});
