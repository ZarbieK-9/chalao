import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Button from "../Button";
import { router } from "expo-router";
type topRatedCardProps = {
  id: number;
  name: string;
  url: string;
  availability: string;
  price: number;
};
const TopRatedCard = ({
  name,
  url,
  availability,
  price,
  id,
}: topRatedCardProps) => {
  //use dimension to give height and width in future
  return (
    <View
      className=" mr-3 bg-white rounded-lg"
      style={{ width: Dimensions.get("window").width * 0.5, elevation: 5 }}
    >
      <View className=" p-2">
        {url === null ? null : (
          <Image
            resizeMode="contain"
            source={{ uri: url }}
            style={{ height: 100, width: "100%" }}
          />
        )}
      </View>
      <View
        style={styles.details}
        className=" bg-[#F6FAFF] py-3 px-2 rounded-b-lg"
      >
        <Text className=" font-medium text-sm">{name}</Text>
        <View className=" flex-row mb-1 items-center">
          <Text className=" text-[8px] text-[#35dca1]">🟢</Text>
          <Text className=" text-[#116245]">
            Available in {availability} days
          </Text>
        </View>
        <View className=" flex-row">
          <View className=" mr-2">
            <Text className=" font-semibold text-sm">
              Rs. {price}{" "}
              <Text className=" text-gray-500 text-xs">per day</Text>
            </Text>
          </View>
          <View className=" flex-1" />
          {/* <Button title={"Book Now"} /> */}
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/screens/DetailsOfBike",
                params: { id: id },
              })
            }
            className="px-2 py-2 rounded-lg bg-primary justify-center items-center"
          >
            <Text className=" text-white font-medium ">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopRatedCard;
const styles = StyleSheet.create({
  details: {
    elevation: 5,
  },
});
