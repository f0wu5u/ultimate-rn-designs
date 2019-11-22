import React, { PureComponent } from 'react';
import { Image,TouchableOpacity } from 'react-native';

export default class UpdatedShowItem extends PureComponent {
    render() {
        const {uri} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <Image style={style.imageStye} source={{ uri, cache:'force-cache' }} />
            </TouchableOpacity>
        )
    }
}

const style = {
    imageStye: { width: 60, height: 60, borderRadius: 60, borderColor: "#31ad6160", borderWidth: 2 }
}