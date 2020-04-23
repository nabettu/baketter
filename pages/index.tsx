import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import qs from "querystring";

import { Link } from "../components/Link";
import { bake } from "../libs/bake";
import { useInput } from "../hooks/useInput";
import { title, url } from "../app.json";

export default function App() {
  const text = useInput("こんにちは");
  const [bakeText, setBakeText] = useState("");

  useEffect(() => {
    setBakeText(bake(text.value));
  }, [text.value]);

  const _tweet = () => {
    if (!bakeText) {
      return;
    }
    const twContent = {
      url,
      hashtags: [title],
      text: bakeText,
    };
    window.open("https://twitter.com/share?" + qs.stringify(twContent));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          文章を入力すると、文字化けした文章に変換出来ます
        </Text>
        <TextInput style={styles.textInput} multiline {...text}></TextInput>
        <Text style={styles.arrow}>↓</Text>
        <Text style={styles.sample}>{bakeText}</Text>
        <TouchableOpacity onPress={_tweet} style={styles.tweetBtn}>
          <Text style={styles.tweetBtnText}>化けた文字をつぶやく</Text>
        </TouchableOpacity>
        <Text>
          Created by{" "}
          <Link
            style={styles.link}
            href="https://twitter.com/nabettu"
            target="_blank"
          >
            @nabettu
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 12,
    paddingVertical: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  link: {
    color: "blue",
  },
  textInput: {
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 200,
    height: 100,
  },
  arrow: {
    fontSize: 30,
    marginVertical: 12,
  },
  sample: {
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 200,
  },
  tweetBtn: {
    marginTop: 16,
    marginBottom: 32,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "#1ba1f2",
  },
  tweetBtnText: {
    color: "#fff",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  description: {
    alignItems: "center",
    fontSize: 18,
    marginBottom: 24,
  },
});
