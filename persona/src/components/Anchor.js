import React, { PureComponent } from 'react';
import { Text, TouchableNativeFeedback } from 'react-native';

export default class Anchor extends PureComponent {
    render() {
        const { title, onPress,style } = this.props
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.SelectableBackgroundBorderless()} >
                <Text style={[{ paddingHorizontal: 4, paddingVertical: 8, color:"#ffffff80", textDecorationLine:"underline" },style]} children={title} />
            </TouchableNativeFeedback>
        )
    }
}
