import React, { PureComponent } from 'react'
import { Text, View, FlatList } from 'react-native'
import EventItem from '../event'

export default class EventCategory extends PureComponent {
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
                    horizontal={true}
                    initialNumToRender={2}
                    // initialScrollIndex={0.5}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 1, backgroundColor: '#dadada', marginHorizontal: 8 }} />}
                    ListItemComponent={({ item }) => <EventItem event={item} />}
                    keyExtractor={(_, index) => index.toString()}
                />
            </>
        )
    }
}
