import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Paragraph } from "react-native-paper";
import CustomButton from "../components/CustomButton";

const SupportPage = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About Book-o-Rama</Text>
      <View style={styles.about}>
        <Paragraph>
          Did you know that in order to publish an app for the first time to
          play store, the developer needs to pay over 2000 rupees.?
        </Paragraph>
        <Paragraph>
          The creator of this app believes that 
        </Paragraph>
        <CustomButton
          text="Donate to Book-o-Rama"
          onPress={() => alert("Thank you")}
        />
      </View>
    </View>
  );
};

export default SupportPage;

const styles = StyleSheet.create({
  about: {
    padding: 6,
  },
});
