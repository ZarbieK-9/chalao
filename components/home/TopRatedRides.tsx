import React from "react";
import { ScrollView, Dimensions, ActivityIndicator, Text } from "react-native";
import TopRatedCard from "./TopRatedCard";
import { useQuery } from "@tanstack/react-query";
import getAllRides from "@/services/getAllRides";
import { useAuth } from "@/context/AuthContext";
const { width } = Dimensions.get("window");
const cardWidth = width * 0.7; // Adjusted to 70% of the screen width for smaller card size

const rides = [
  {
    name: "Vespa Classic VXL",
    image: require("../../assets/bikesimage/scooty1.png"),
    rating: 5,
    availableIn: "2 days",
    price: 450,
    discount: "17% off",
  },
  {
    name: "Royal Enfield Classic",
    image: require("../../assets/bikesimage/scooty5.png"),
    rating: 5,
    availableIn: "Now",
    price: 550,
    discount: "10% off",
  },
];

export const TopRatedRides = () => {
  const { onRefreshToken } = useAuth();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: getAllRides,
  });
  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }
  if (isError) {
    onRefreshToken;
    return null;
  }
  // if (data) {
  //   return null;
  //   console.log(data);
  // }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 10 }}
    >
      {data?.length > 0 ? (
        data?.map((ride: any, index: number) => {
          const img_url = ride?.thumbnail_image
            ? ride?.thumbnail_image
            : "https://bike-zone.co.uk/wp-content/uploads/2023/07/bike-placeholder-gn.png";
          return (
            <TopRatedCard
              key={index}
              name={ride.vehicle_name}
              id={ride.id}
              url={img_url}
              availability={"2"}
              price={ride.price.Daily}
            />
          );
        })
      ) : (
        <Text>All rides have been booked</Text>
      )}
    </ScrollView>
  );
};
