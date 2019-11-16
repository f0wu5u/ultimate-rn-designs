import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Hero extends PureComponent {
    render() {
        return (
            <View style={{
                width: null,
                height: 180,
                backgroundColor: '#4E365C',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 24
            }}>

                <View >
                    <Text style={{
                        fontSize: 28,
                        margin: 0,
                        color: "#fff",
                        fontWeight: '700'
                    }} >What's Good In</Text>

                    <Text style={{
                        fontWeight: '100',
                        color: '#ffffff70',
                    }}>
                        Irvine, CA
                     </Text>
                </View>
            </View>
        )
    }
}
