import React from "react";
import { Tabs } from "expo-router";
import CustomHeader from "../../components/Header";

const TabsLayout = () => {
  console.log("tabs");
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        header: () => <CustomHeader />,
      }}
    >
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="repository" options={{ title: "Repository" }} />
    </Tabs>
  );
};

export default TabsLayout;
