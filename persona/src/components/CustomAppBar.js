import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';

export default class CustomAppBar extends PureComponent {
    render() {
        return (
            <View style={style.actionBarStyle}>
                <Image style={style.imageIconsStyle} source={require('../assets/images/screen.png')} />
                <View style={style.searchBarStyle}>
                    <Text style={style.searchBarTextStyle} children="Search" />
                </View>
                <Image style={style.imageIconsStyle} source={require('../assets/images/user.png')} />
            </View>
        )
    }
}

const style = {
    actionBarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#111"
    },
    imageIconsStyle: { width: 24, height: 24 },
    searchBarStyle: {
        flex: 1,
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#1b1b1b',
        marginHorizontal: 8
    },
    searchBarTextStyle: {
        color: "#ffffff40",
        fontSize: 12
    }
}