import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const deviceWidth = Dimensions.get('window').width;
const deviceHight = Dimensions.get('window').height;
export default function App() {
 

  const [shouldShow, setShouldShow] = useState(true);
  const [mediumShow, setMediumShow] = useState(false);
  const [hardShow, setHardShow] = useState(false);
  const [expertShow, setExpertShow] = useState(false);

  const easyClick = () => {
     setShouldShow(!shouldShow)
     setMediumShow(false)
     setHardShow(false)
     setExpertShow(false)
  } 
 
  const mediumClick = () => {
    setMediumShow(!mediumShow)
    setShouldShow(false)
    setMediumShow(true)
    setHardShow(false)
    setExpertShow(false)
 } 

 const hardClick = () => {
  setHardShow(!hardShow)
  setShouldShow(false)
  setMediumShow(false)
  setHardShow(true)
  setExpertShow(false)
} 

const expertClick = () => {
  () => setExpertShow(!expertShow)
  setShouldShow(false)
  setMediumShow(false)
  setHardShow(false)
  setExpertShow(true)
} 
  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Settings</Text>
      </View>

      <View style={styles.subContainer}>
        <Text style={styles.subText}>
          Select the difficulty level to increase or decrease the number of
          populated squares.
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 50, marginLeft: 10 }}>
        <TouchableOpacity activeOpacity={0.7} onPress={easyClick}>
        <View style={styles.cardView}>
          <View style={{ marginLeft: 140, marginBottom: -20 }}>
            {shouldShow ? (
              <Image
                style={styles.selectIcon}
                source={require("./assets/images/select.png")}
              />
            ) : null}
          </View>

          <Image
            style={styles.stretch}
            source={require("./assets/images/easy.png")}
          />

          <Text style={styles.modeText}>Easy</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity activeOpacity={0.7} onPress={mediumClick}>
        <View style={styles.cardView}>
        <View style={{ marginLeft: 140, marginBottom: -20 }}>
            {mediumShow ? (
              <Image
                style={styles.selectIcon}
                source={require("./assets/images/select.png")}
              />
            ) : null}
          </View>
          <Image
            style={styles.stretch}
            source={require("./assets/images/medium.png")}
          />

          <Text style={styles.modeText}>Medium</Text>
        </View>
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
      <TouchableOpacity activeOpacity={0.7} onPress={hardClick}>
        <View style={styles.cardView}>
        <View style={{ marginLeft: 140, marginBottom: -20 }}>
            {hardShow ? (
              <Image
                style={styles.selectIcon}
                source={require("./assets/images/select.png")}
              />
            ) : null}
          </View>
          <Image
            style={styles.stretch}
            source={require("./assets/images/hard.png")}
          />
          <Text style={styles.modeText}>Hard</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.7} onPress={expertClick}>
        <View style={styles.cardView}>
        <View style={{ marginLeft: 140, marginBottom: -20 }}>
            {expertShow ? (
              <Image
                style={styles.selectIcon}
                source={require("./assets/images/select.png")}
              />
            ) : null}
          </View>
          <Image
            style={styles.stretch}
            source={require("./assets/images/expert.png")}
          />
          <Text style={styles.modeText}>Expert</Text>
        </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ marginTop: 60 }}>
        <TouchableHighlight
          style={styles.submit}
          //onPress={() => this.submitSuggestion(this.props)}
        >
          <Text style={styles.submitText}>Continue</Text>
        </TouchableHighlight>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#362616",
  },
  settingContainer: {
    marginTop: 50,
    marginLeft: 30,
  },
  settingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  subContainer: {
    marginTop: 20,
    marginLeft: 30,
  },
  subText: {
    color: "white",
    fontSize: 14,
  },
  cardView: {
    backgroundColor: "#B28A6742",
    width:  deviceWidth / 2,
    height:  200,
    borderColor: "#3A2A1A",
    borderWidth: 2,
    borderRadius: 19,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: 'hidden',
  
  },
  modeText: {
    padding: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  stretch: {
    width: 150,
    height: 100,
    resizeMode: "cover",
  },
  selectIcon: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#9B7350",
    borderRadius: 30,
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
