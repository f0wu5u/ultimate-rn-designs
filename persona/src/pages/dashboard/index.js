import React, { PureComponent } from 'react';
import { FlatList, View, ActivityIndicator, RefreshControl, Text } from 'react-native';
import ShowsListHeader from '../../components/ShowsListHeader';
import CustomAppBar from '../../components/CustomAppBar';
import ShowCatogory from '../../components/ShowCatogory';
import Button from '../../components/Button';

export default class Dashboard extends PureComponent {

    render() {
        const { loading, error_occured, data } = this.props.dashboardState;

        return (
            <View style={{ flex: 1 }}>

                <CustomAppBar onLogout={this.props.doLogout} />
                {
                    error_occured ?
                        (
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 28, color: "#fff" }} children="Error occured, try again later" />
                                <Button title="Reload" onPress={_ => this.loadData()} style={{ alignSelf: 'center', marginTop: 16 }} />
                            </View>
                        )
                        :

                        (
                            loading ? <ActivityIndicator size="large" style={{ alignSelf: "center", flex: 1 }} /> :
                                <FlatList
                                    data={data.shows}
                                    refreshControl={<RefreshControl refreshing={loading} />}
                                    onRefresh={() => this.props.loadData()}
                                    refreshing={loading}
                                    ListHeaderComponentStyle={{ marginBottom: 32 }}
                                    initialNumToRender={3}
                                    ListHeaderComponent={_ => <ShowsListHeader nowShowing={data.featured} newEpisodes={data.watch_again} />}
                                    renderItem={({ item }) => <ShowCatogory show={item} />}
                                    keyExtractor={(_, index) => index.toString()}
                                    ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
                                />
                        )
                }

            </View>
        )
    }
    componentDidMount() {
        if (this.props.dashboardState.loading) {
            this.props.loadData()
        }
    }
}
