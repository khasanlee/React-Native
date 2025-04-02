import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalList}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
