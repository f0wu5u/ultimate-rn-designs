import React, { PureComponent } from 'react';
import { StatusBar, SafeAreaView, View, FlatList } from 'react-native';
import { page } from '../../utils/styles';
import EventCategory from '../../components/event-category';
import Hero from '../../components/home-hero';
import Grid from '../../components/event-category/grid';
import { events } from '../../models';


export default class home extends PureComponent {

    render() {
        const lastIndex = events.length - 1;
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor="#685BA900" translucent={true} />

                <SafeAreaView style={page} >
                    <FlatList
                        data={events}
                        initialNumToRender={2}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={() => <Hero />}
                        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#dadada', marginBottom: 30 }} />}
                        ListItemComponent={({ index, item }) =>
                            index != lastIndex ?
                                <EventCategory events={item.events} title={item.title} /> :
                                <Grid events={item.events} title={item.title} />
                        }
                        keyExtractor={(_, index) => index.toString()}
                    />

                </SafeAreaView>
            </>
        )
    }
}

