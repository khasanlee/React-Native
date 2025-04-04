import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalList}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
      margin: 8,
      backgroundColor: "red",
      borderRadius: 10,
    },
    pressedItem: {
        opacity: 0.5,
        
    },
    goalText: {
    padding: 10,
    color: "white",
    textAlign: "center",

  },
});
