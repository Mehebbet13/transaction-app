import React from "react";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity, StyleSheet } from "react-native";

export const Back = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.icon}>
            <Svg height="26" viewBox="0 0 512 512" width="24">
                <Path
                    d="M503.462,213.331H156.19l80.307-81.894c3.234-3.311,3.251-8.602,0.017-11.93l-47.386-48.666
			c-1.604-1.647-3.806-2.577-6.11-2.577s-4.514,0.93-6.118,2.577L2.419,250.042c-3.226,3.319-3.226,8.602,0,11.913l174.481,179.2
			c1.604,1.647,3.806,2.577,6.11,2.577s4.506-0.93,6.118-2.577l47.386-48.666c3.234-3.319,3.226-8.619-0.017-11.93l-80.307-81.894
			h347.273c4.71,0,8.533-3.823,8.533-8.533v-68.267C511.996,217.154,508.173,213.331,503.462,213.331z"
                    fill="#ffffff"
                />
            </Svg>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        marginLeft: 10,
    },
});
