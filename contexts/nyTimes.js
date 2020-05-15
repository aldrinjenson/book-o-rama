import { AsyncStorage } from "react-native";

export const saveToAsyncStorage = async (bestSellerList) => {
  try {
    let stringedBestSellerList = JSON.stringify(bestSellerList);
    await AsyncStorage.setItem("SavedBestSellerList", stringedBestSellerList);
    console.log("Successfully saved to local storage");
  } catch (error) {
    console.log("Error in storing to local storage" + error);
  }
  return;
};
