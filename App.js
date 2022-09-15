import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const windowHeight = Dimensions.get("window").height;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      listOfItems: [],
    };
  }

  addItem = () => {
    if (this.state.newItem != "") {
      const newItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      };

      const list = this.state.listOfItems;

      list.push(newItemJSON);

      this.setState({
        listOfItems: list,
        newItem: "",
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.text}>To Do List</Text>
        </View>
        <View>
          <TextInput
            placeholder="Type item here..."
            placeholderTextColor="#999"
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ newItem: text });
            }}
            value={this.state.newItem}
          />
          <View>
            <TouchableOpacity style={styles.button} onPress={this.addItem}>
              <Text style={styles.buttontext}>+</Text>
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView>
              {this.state.listOfItems.map((item) => {
                return (
                  <View style={styles.listview}>
                    <Text style={styles.textstyle}>{item.value}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48AAAD",
  },
  textView: {
    backgroundColor: "#fff",
    height: 80,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  },
  text: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: "#dcdcdc",
    fontSize: 20, height: 60,
    paddingHorizontal: 20
  },
  button: {
    position: "absolute",
    right: 20,
    top: windowHeight / 1.5,
    backgroundColor: "maroon",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  buttontext: {
    color: "#fff",
    fontSize: 24,
  },
  textstyle: {
    fontSize: 20,
    color: "maroon",
  },
  listview: {
    borderWidth: 2,
    height: 40,
    justifyContent: "space-between",
    borderColor: "maroon",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});