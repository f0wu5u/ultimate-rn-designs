import React, { PureComponent } from 'react'
import { TouchableNativeFeedback, ImageBackground, Image, View, Text } from 'react-native'

export default class NowShowing extends PureComponent {


    render() {
        const { nowShowing } = this.props,
            { background, foreground } = nowShowing.images;
        return (
            <ImageBackground style={style.baseStyle}
                source={{ uri: background }}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={style.cardOverlayStyle}>
                        <Image source={{ uri: foreground }} style={style.showImageOverlay} />
                        <Text style={style.showTimerStyle} children="08:04 / 24:09" />
                        <Text style={style.liveIndicatorStyle} children="Now Showing" />
                    </View>
                </TouchableNativeFeedback>
            </ImageBackground>
        )
    }
}

const style = {

    baseStyle: {
        width: null,
        height: 210

    },
    cardOverlayStyle: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
        height: null,
        backgroundColor: "#00000090",
        justifyContent: "flex-end"
    },
    showImageOverlay: { width: 120, height: 51, marginBottom: 20 },
    showTimerStyle: {
        color: "#ffffff80",
        position: "absolute",
        right: 10,
        bottom: 5
    },
    liveIndicatorStyle: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 10,
        color: "#fff",
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: "#ad3131",
        borderRadius: 5,
        textTransform: "uppercase"
    }
}