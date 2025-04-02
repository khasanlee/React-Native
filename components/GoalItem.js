import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalList}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalList: {
        padding: 10,
        margin: 8,
        backgroundColor: "red",
        borderRadius: 10,
      },
      goalText: {
        color: "white",
        textAlign: "center",
      },
});
