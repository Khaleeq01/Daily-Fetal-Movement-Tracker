import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InfoModal from "../components/InfoModal";
import { saveSession } from "../storage";

export default function CounterScreen({ navigation }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = () => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

 const handleSave = async () => {
  const session = {
    id: Date.now().toString(),
    timestamp: Date.now(),
    minutes: Math.max(1, Math.ceil(seconds / 60)),
  };

  console.log("🟡 SAVING SESSION:", session);

  await saveSession(session);

  navigation.goBack();
};

  return (
    <LinearGradient
      colors={["#F9F3FF", "#FBEAFF"]}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Record DFM</Text>

        <TouchableOpacity onPress={() => setShowInfo(true)}>
          <Text style={styles.info}>i</Text>
        </TouchableOpacity>
      </View>

      {/* Bubble */}
      <View style={styles.bubble}>
        <Text style={styles.bubbleText}>
          Stop recording after{"\n"}10 kicks
        </Text>
      </View>

      {/* Timer */}
      <View style={styles.timerWrapper}>
        <Text style={styles.timer}>{formatTime()}</Text>
      </View>

      {/* Play */}
      <TouchableOpacity
        style={styles.playBtn}
        onPress={() => setRunning(!running)}
      >
        <Text style={styles.playIcon}>{running ? "⏸" : "▶"}</Text>
      </TouchableOpacity>

      {/* Save */}
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>

      {/* Help text */}
      <Text style={styles.helpText}>
        What if I am not getting{"\n"}enough kicks?
      </Text>

      {/* Info Modal */}
      <InfoModal visible={showInfo} onClose={() => setShowInfo(false)} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
    marginTop:20
  },
  back: { fontSize: 24 },
  info: { fontSize: 18 },
  headerTitle: { fontSize: 18, fontWeight: "600" },

  bubble: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    alignSelf: "center",
    marginBottom: 40,
  },
  bubbleText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },

  timerWrapper: {
    borderWidth: 2,
    borderColor: "#EAD7FF",
    borderRadius: 120,
    paddingVertical: 40,
    paddingHorizontal: 80,
    alignSelf: "center",
  },
  timer: {
    fontSize: 36,
    color: "#E85C4A",
    fontWeight: "600",
  },

  playBtn: {
    backgroundColor: "#fff",
    width: 64,
    height: 64,
    borderRadius: 32,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  playIcon: { fontSize: 24 },

  saveBtn: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 20,
  },
  saveText: { fontSize: 16, fontWeight: "600" },

  helpText: {
    marginTop: 16,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
