import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";

export const Link = (props: {
  children: ReactNode;
  style: TextStyle;
  href: string;
  target?: string;
}) => (
  <Text accessibilityRole="link" {...props}>
    {props.children}
  </Text>
);
