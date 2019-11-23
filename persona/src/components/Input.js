import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

export default class Input extends PureComponent {
    render() {
        const { style, type, placeholder, isPassword, onChangeText } = this.props;

        return (
            <TextInput
                autoCorrect={false}
                autoCompleteType="off"
                keyboardAppearance="dark"
                keyboardType={type || 'default'}
                numberOfLines={1}
                spellCheck={false}
                secureTextEntry={isPassword || false}
                style={[mStyle.baseStyle, style]}
                placeholder={placeholder}
                placeholderTextColor="#ffffff60"
                underlineColorAndroid="transparent"
                onChangeText = {onChangeText}
            />
        )
    }
}

const mStyle = {
    baseStyle: {
        color: "#fff",
        fontSize: 18,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ffffff40",
        borderRadius: 5,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#22222290'
    }
}