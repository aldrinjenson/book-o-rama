import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../global/globalStyles";
import BookCollection from "../components/BookCollection";
import axios from "axios";
import { query, baseUrl, apiKey } from "../config/apiKey";

const HomeTab = ({ navigation }) => {
  const [topBooksList, setTopBooksList] = useState([]);
  const [netWorkError, setNetWorkError] = useState(false);
  const [extraTraffic, setExtraTraffic] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = baseUrl + query + "?api-key=" + apiKey;
      try {
        const res = await axios.get(API_URL);
        setTopBooksList(res.data.results.lists);
      } catch (error) {
        console.log("error in accessing," + error);
        if (error.message === "Network Error") setNetWorkError(true);
        if (error.response.status == 401) setExtraTraffic(true); // in case apiKey expired status
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ ...globalStyles.container, justifyContent: "flex-start" }}>
      {netWorkError ? (
        <View style={styles.errorMessage}>
          <Text style={{ marginTop: 4, paddingTop: 2 }}>
            There seems to be some network delay
          </Text>
          <Text style={{ marginTop: 4, paddingTop: 2 }}>
            Please check your internet connectivity!!
          </Text>
        </View>
      ) : extraTraffic ? (
        <View style={styles.errorMessage}>
          <Text>Whew...</Text>
          <Text style={{ marginTop: 4, paddingTop: 2, flexWrap: "nowrap" }}>
            There seems to be some extra network traffic at this moment to the
            database
          </Text>
          <Text style={{ marginTop: 4, paddingTop: 2 }}>
            Please try again after some time
          </Text>
        </View>
      ) : null}
      {!topBooksList.length ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size="large"
            color="0000ff"
            style={{ marginBottom: 30 }}
          />
          <Text style={{ marginTop: 20 }}>
            Loading New York Times' best sellers collection...
          </Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => item.list_id.toString()}
          data={topBooksList}
          renderItem={({ item }) => (
            <BookCollection
              key={item.list_id}
              collection={item}
              navigation={navigation}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 60,
    alignItems: "center",
  },
});
