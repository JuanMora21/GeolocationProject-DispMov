import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

export const HomeScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const onPress = () => {
    props.navigation.navigate('Maps');
  };

  return (
    <View>
      <Text style={{
        fontSize: 50,
        textAlign: 'center',
        marginTop: "20%",
        fontWeight: 'bold'
      }}>
        Home Screen
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Hello From Home</Text>
      </TouchableOpacity>
    </View>
  );
}