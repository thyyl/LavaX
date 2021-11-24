import { Linking } from "react-native";

export const validateArticle = (link, toast) => {

  if (link) {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log("Don't know how to open URI: " + link);
      }
    });
  } else {
    toast.show("Links is empty");
  }
}