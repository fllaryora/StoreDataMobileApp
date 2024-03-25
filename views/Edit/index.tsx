import * as SQLite from "expo-sqlite";
import * as React from "react";
import * as Constants from "../../constants/constant"
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { useState } = React;
const db = SQLite.openDatabase(Constants.DATABASE_FILE_NAME);

const Edit = (props: any) => {
  const { navigation, route } = props;

  let data = route.params?.data;
  const {
    id,
    postdate,
    first,
    firstDesc,
    second,
    secondDesc,
    third,
    thirdDesc,
    fourth,
    fourthDesc,
    fifth,
    fifthDesc,
  } = data;

  const [newFirst, setFirst] = useState(first);
  const [newFirstDesc, setFirstDesc] = useState(firstDesc);
  const [newSecond, setSecond] = useState(second);
  const [newSecondDesc, setSecondDesc] = useState(secondDesc);
  const [newThird, setThird] = useState(third);
  const [newThirdDesc, setThirdDesc] = useState(thirdDesc);
  const [newFourth, setFourth] = useState(fourth);
  const [newFourthDesc, setFourthDesc] = useState(fourthDesc);
  const [newFifth, setFifth] = useState(fifth);
  const [newFifthDesc, setFifthDesc] = useState(fifthDesc);

  const update = () => {
    if (
      newFirst === null ||
      newFirst === "" ||
      newSecond === null ||
      newSecond === "" ||
      newThird === null ||
      newThird === ""
    ) {
      return false;
    }
    db.transaction(
      (tx:SQLite.SQLTransaction) => {
        tx.executeSql(Constants.UPDATE_FIRST_FROM_JOURNAL_BY_ID, [
          newFirst,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_FIRSTDESC_FROM_JOURNAL_BY_ID, [
          newFirstDesc,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_SECOND_FROM_JOURNAL_BY_ID, [
          newSecond,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_SECONDDESC_FROM_JOURNAL_BY_ID, [
          newSecondDesc,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_THIRD_FROM_JOURNAL_BY_ID, [
          newThird,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_THIRDDESC_FROM_JOURNAL_BY_ID, [
          newThirdDesc,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_FOURTH_FROM_JOURNAL_BY_ID, [
          newFourth,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_FOURTHDESC_FROM_JOURNAL_BY_ID, [
          newFourthDesc,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_FIFTH_FROM_JOURNAL_BY_ID, [
          newFifth,
          id,
        ]);
        tx.executeSql(Constants.UPDATE_FIFTHDESC_FROM_JOURNAL_BY_ID, [
          newFifthDesc,
          id,
        ]);
      },
      undefined,
      undefined
    );
    return true;
  };

  const { container, button, label, input, formGroup } = styles;
  return (
    <ScrollView style={container}>
      <View style={formGroup}>
        <Text style={label}>1 (required): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setFirst(val)}
          placeholder={"First value"}
          value={newFirst}
          multiline
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>1 Description (optional): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setFirstDesc(val)}
          placeholder={"First value description *Optional"}
          value={newFirstDesc}
          multiline
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>2 (required): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setSecond(val)}
          placeholder={"Second value"}
          multiline
          value={newSecond}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>2 Description (optional): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setSecondDesc(val)}
          multiline
          placeholder={"Second value description *Optional"}
          value={newSecondDesc}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>3 (required): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setThird(val)}
          multiline
          placeholder={"Third value"}
          value={newThird}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>3 Description (optional): </Text>
        <TextInput
          style={input}
          multiline
          onChangeText={(val) => setThirdDesc(val)}
          placeholder={"Third value description *Optional"}
          value={newThirdDesc}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>4: </Text>
        <TextInput
          multiline
          style={input}
          onChangeText={(val) => setFourth(val)}
          placeholder={"Fourth value"}
          value={newFourth}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>4 Description (optional): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setFourthDesc(val)}
          multiline
          placeholder={"Fourth value description *Optional"}
          value={newFourthDesc}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>5: </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setFifth(val)}
          placeholder={"Fifth value"}
          multiline
          value={newFifth}
        />
      </View>
      <View style={formGroup}>
        <Text style={label}>5 Description (optional): </Text>
        <TextInput
          style={input}
          onChangeText={(val) => setFifthDesc(val)}
          placeholder={"Fifth value description *Optional"}
          multiline
          value={newFifthDesc}
        />
      </View>
      <TouchableOpacity
        style={button}
        onPress={() => {
          if (update()) {
            navigation.popToTop();
          } else {
            Alert.alert(
              "Failed to update! Make sure at least three items are added!"
            );
          }
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 16, color: "#3C6074" }}>
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  label: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
  },
  input: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 150,
    height: 50,
    fontSize: 16,
  },
  formGroup: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    color: "#3C6074",
    borderRadius: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#3C6074",
    padding: 10,
  },
});
export { Edit };