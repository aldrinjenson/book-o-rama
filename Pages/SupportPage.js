import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Paragraph } from "react-native-paper";
import CustomButton from "../components/CustomButton";

const SupportPage = () => {
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.about}>
          <Paragraph style={styles.Paragraph}>
            Hey there, did you know that in order to publish an app for the
            first time to play store, the developer needs to pay over 2000
            rupees..? :0
          </Paragraph>
          <Paragraph style={styles.Paragraph}>
            This app is built from the simple reason that most apps with similar
            functionality run with ads and though necessary in some ways, ads
            are always a hinderance to plesant user experience. Hence the
            developer has ensured that there will be no ads in this app and its
            future updates
          </Paragraph>
          <Paragraph style={styles.Paragraph}>
            What you are holding now is the end product of several sleepless
            nights. If you think this app has some value or if you think atleast
            a few people could benefit from this app, take a moment to donate
            something. Even if it is as small as 5 or 10 rupees, it will show
            your appreciation to the hard work put in by the developer..
          </Paragraph>
          <Text style={styles.cheers}>Cheers!!</Text>
          <CustomButton
            text="Donate to Book-o-Rama"
            onPress={() => alert("Thank you")}
          />
          <Text style={styles.footer}>
            Made With <Image source={require("../assets/heart.png")} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SupportPage;

const styles = StyleSheet.create({
  about: {
    padding: 6,
    // borderWidth: 1,
    // height: "100%",
    height: Dimensions.get("screen").height - 150,
    justifyContent: "space-between",
  },
  Paragraph: {
    marginBottom: 12,
    paddingTop: 7,
  },
  cheers: {
    alignSelf: "center",
    marginVertical: 16,
  },
  footer: {
    alignSelf: "center",
    marginVertical: 20,
    paddingVertical: 20,
  },
});
