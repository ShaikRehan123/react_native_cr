import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import Header from "./Header";
import { useState } from "react";
import CardFlip from "react-native-card-flip";

export default function Toss() {
  const [card, setCard] = useState(false);
  return (
    <SafeAreaView>
      <Header />
      <View className="flex">
        <View className="flex justify-center items-center">
          <Text className="text-center text-2xl underline mb-2">
            Toss Screen
          </Text>
          <CardFlip style={styles.cardContainer} ref={(card) => setCard(card)}>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card1]}
            >
              <Text style={styles.label}>Tails</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.card, styles.card2]}
            >
              <Text style={styles.label}>Heads</Text>
            </TouchableOpacity>
          </CardFlip>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  cardContainer: {
    width: 320,
    height: 470,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 320,
    height: 320,
    backgroundColor: "#FE474C",
    borderRadius: 5000,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    lineHeight: 330,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
