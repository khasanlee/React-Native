import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <View 
      style={{
        padding:50,
        flexDirection: 'row', 
        width:'80%', 
        height:300, 
        justifyContent: 'space-around', 
        alignItems:'stretch'
      }}
    >
      <View 
        style={{
          backgroundColor: 'red',
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View 
        style={{
          backgroundColor: 'blue',
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View><View 
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: '80%',
    padding: 5,
    marginRight:5
  }
});
