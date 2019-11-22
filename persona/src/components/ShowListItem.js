import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

export default class ShowListItem extends PureComponent {
    render() {
        const { show } = this.props,
            { name, type, image_url } = show;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => alert(name)}>
                <View style={{ width: 150 }}>
                    <Image style={style.imageStyle} source={{ uri: image_url }} />
                    <Text style={style.nameStyle} numberOfLines={1} children={name} />
                    {type == "tv show" ? <Text style={style.showTypeStyle} children={type} /> : null}
                </View>
            </TouchableOpacity>
        )
    }
}

const style = {
    showTypeStyle: {
        fontSize: 10,
        fontWeight: "bold",
        paddingVertical: 2,
        paddingHorizontal: 4,
        backgroundColor: "#ecdb3f",
        textTransform: "capitalize",
        borderRadius: 2,
        position: 'absolute',
        top: 5,
        right: 5
    },
    imageStyle: {
        width: 150,
        height: 110,
        borderRadius: 5
    },
    nameStyle: {
        color: "#fff",
        fontWeight: 'bold',
        letterSpacing: 0.7
    }
}
