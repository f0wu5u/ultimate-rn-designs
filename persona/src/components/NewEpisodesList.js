import React, { PureComponent } from 'react';
import { FlatList, Text, View } from 'react-native';
import UpdatedShowItem from './UpdatedShowItem';

export default class NewEpisodesList extends PureComponent {
    render() {
        const {list} = this.props;
        return (

            <View style={style.baseViewStyle}>
                <Text style={style.topTextStyle} children="New Episodes" />
                <FlatList
                    data={list}
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    keyExtractor={(_, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={5}
                    horizontal={true}
                    renderItem={({ item }) => <UpdatedShowItem uri={item} />}
                />
            </View>
        )
    }
}

const style = {
    topTextStyle: { marginStart:16,marginTop:8, marginBottom: 12, fontSize: 10, color: "#ffffff70" },
    baseViewStyle: {
        paddingBottom:16,
        backgroundColor: "#111"
    }
}
