import { AsyncStorage } from "react-native";

export const saveToAsyncStorage = async (bestSellerList) => {
  try {
    let stringedBestSellerList = JSON.stringify(bestSellerList);
    await AsyncStorage.setItem("SavedBestSellerList", stringedBestSellerList);
    const dt = new Date();
    let savedDate = dt.getDate();   // stores the date in which the data is saved
    await AsyncStorage.setItem("savedDate", JSON.stringify(savedDate));
    console.log("Successfully saved to local storage");
  } catch (error) {
    console.log("Error in storing to local storage:::" + error);
  }
  return;
};
