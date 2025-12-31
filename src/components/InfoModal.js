import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function InfoModal({ visible, onClose }) {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Steps to count fetal kicks</Text>

          <Text style={styles.point}>
            1. Choose a time when you are least distracted.
          </Text>
          <Text style={styles.point}>
            2. Lie down on your left side or sit comfortably.
          </Text>
          <Text style={styles.point}>
            3. Place your hands on your belly.
          </Text>
          <Text style={styles.point}>
            4. Start a timer or watch the clock.
          </Text>
          <Text style={styles.point}>
            5. Count movements until you reach 10 kicks.
          </Text>
          <Text style={styles.point}>
            6. Note how many minutes it took.
          </Text>

          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  point: {
    fontSize: 14,
    marginBottom: 8,
  },
  closeBtn: {
    marginTop: 20,
    alignItems: "center",
  },
  closeText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
