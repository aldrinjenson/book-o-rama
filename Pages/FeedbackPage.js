import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Formik } from "formik";
import * as yup from "yup";

import * as firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";
import CustomButton from "../components/CustomButton";

// firebase.initializeApp(firebaseConfig)

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const dbh = firebase.firestore();

const handleSubmit = (values) => {
  dbh.collection("feedback").doc(values.name).set({
    email: values.email,
    feedback: values.feedback,
  });
  Alert.alert("Your feedback has been sent. Thank you :)");
  console.log("Submitted");
};

const feedbackSchema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().required().min(6).email(),
  feedback: yup.string().required().min(4),
});

const FeedbackPage = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: "", email: "", feedback: "" }}
        validationSchema={feedbackSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          Alert.alert('Submitted.')
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              style={styles.feedbackInput}
              value={props.values.name}
              onBlur={props.handleBlur("name")}
            />
            <Text style={styles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>
            <TextInput
              placeholder="E-mail"
              onChangeText={props.handleChange("email")}
              style={styles.feedbackInput}
              value={props.values.email}
              onBlur={props.handleBlur("email")}
            />
            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
            <TextInput
              placeholder="Feedback"
              multiline
              minHeight={75}
              onChangeText={props.handleChange("feedback")}
              style={styles.feedbackInput}
              value={props.values.feedback}
              onBlur={props.handleBlur("feedback")}
            />
            <Text style={styles.errorText}>
              {props.touched.feedback && props.errors.feedback}
            </Text>
            <CustomButton text="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FeedbackPage;

const styles = StyleSheet.create({
  feedbackInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "purple",
    marginBottom: 10,
  },
});
