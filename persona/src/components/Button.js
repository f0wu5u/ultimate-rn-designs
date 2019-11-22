import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export default class Button extends PureComponent {
    render() {
        const { full, light, title, style, onPress } = this.props;

        // Define button style per props
        let buttonStyle = full ? { ...mStyle.baseStyle, ...mStyle.fullStyle } : mStyle.baseStyle;
        buttonStyle = light ? { ...buttonStyle, ...mStyle.lightStyle } : buttonStyle;
        let textStyle = light ? { ...mStyle.baseTextStyle, ...mStyle.lightTextStyle } : mStyle.baseTextStyle;


        return (
            <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.SelectableBackground()} >
                <View style={[buttonStyle, style]}>
                    <Text style={textStyle} >{title}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const mStyle = {
    baseStyle: {
        minWidth: '50%',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 5,
        backgroundColor: "#31ad61"
    },
    lightStyle: {
        backgroundColor: "#ffffff"
    },
    fullStyle: {
        width: '100%'
    },

    baseTextStyle: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 18,
        textAlign: "center"
    },
    lightTextStyle: {
        color: "#424242"
    }

}