import * as React from "react";
import { Link } from "../components/Link";
import { StyleSheet, Text, View } from "react-native";

export default () => (
  <View style={styles.container}>
    <Text accessibilityRole="header" style={styles.text}>
      Alternate Page
    </Text>

    <Link style={styles.link} href={`/`}>
      Go Back
    </Link>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: "blue",
  },
});
