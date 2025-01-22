import { router } from "expo-router";
import { useEffect } from "react";
import asyncStorageService from "../services/asyncStorage-service";

export default function App() {
  useEffect(() => {
    const displayData = async () => {
      const token = await asyncStorageService.getData("token");
      console.log("token: " + token);
      if (token != null) {
        router.navigate("/drawer/welcome");
      } else {
        router.navigate("login/login");
      }
    };

    displayData();
  }, []);

  return;
}
