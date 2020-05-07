import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Paragraph } from "react-native-paper";
import CustomButton from "../components/CustomButton";

const AboutPage = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About Book-o-Rama</Text>
      <View style={styles.about}>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          commodi possimus repellendus quos! Dolorum natus, porro consectetur
          earum minus suscipit tenetur temporibus ratione repellat vitae ea
          magni sapiente dicta aut.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          commodi possimus repellendus quos! Dolorum natus, porro consectetur
          earum minus suscipit tenetur temporibus ratione repellat vitae ea
          magni sapiente dicta aut.
        </Paragraph>
        <CustomButton text='Donate to Book-o-Rama' onPress={()=>alert('Thank you')} />
      </View>
    </View>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  about: {
    padding: 6,
  },
});
