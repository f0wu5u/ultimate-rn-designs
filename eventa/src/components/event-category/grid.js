import React, { PureComponent } from 'react'
import { Text, View,FlatList } from 'react-native'
import EventItem from '../event';

export default class Grid extends PureComponent {
    render() {

        const { events, title } = this.props;

        return (
            <>
                <Text style={{
                    marginBottom: 20,
                    fontSize: 20,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#4E365C',
                    marginStart: 16
                }}
                    children={title}
                />

                <FlatList
                    style={{
                        marginHorizontal: 10
                    }}
                    data={events}
                    numColumns={2}
                    initialNumToRender={2}
                    ItemSeparatorComponent={() => <View style={{ height:10 }} />}
                    ListItemComponent={({ item }) => <EventItem event={item} isEvenView={true}/>}
                    keyExtractor={(_, index) => index.toString()}
                />
            </>
        )
    }
}
