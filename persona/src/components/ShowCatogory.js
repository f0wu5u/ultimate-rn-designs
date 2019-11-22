import React, { PureComponent } from 'react'
import { Text, View, FlatList } from 'react-native'
import ShowListItem from './ShowListItem';

export default class ShowCatogory extends PureComponent {
    render() {
        const { show } = this.props,
            { name, shows } = show;
        return (
            <>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#31ad61", marginBottom: 8 }} >{name}</Text>
                <FlatList
                    horizontal={true}
                    data={shows}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor = { (_, index)=>index.toString()}
                    ItemSeparatorComponent = { _=> <View style={{width:10}}/>}
                    renderItem = { ({item})=> <ShowListItem show={item}/>}
                />
            </>
        )
    }
}
