import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Platform } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

class Location extends Component {
    state = {
        location: null,
        errorMessage: null
    };

    componentWillMount() {
        if (Platform.OS === "android" && !Constants.isDevice) {
            this.setState({
                errorMessage:
                    "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
            this.setState({
                errorMessage: "Permission to access location was denied"
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    render() {
        <View style={styles.container}>
            <Text>Location</Text>
        </View>
    }
}