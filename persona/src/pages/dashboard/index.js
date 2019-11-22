import React, { PureComponent } from 'react';
import { FlatList, SafeAreaView, View, ActivityIndicator, RefreshControl, Text } from 'react-native';
import ShowsListHeader from '../../components/ShowsListHeader';
import CustomAppBar from '../../components/CustomAppBar';
import ShowCatogory from '../../components/ShowCatogory';
import Button from '../../components/Button';

export default class Dashboard extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            errorOccured: false,
            data: {}
        }
    }
    render() {
        const { loading, errorOccured, data } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <CustomAppBar />
                {
                errorOccured ?
                (
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:28,color:"#fff"}} children="Error occured, try again later"/>
                        <Button title="Reload" onPress={_=>this.loadData()} style={{alignSelf:'center',marginTop:16}}/>
                    </View>
                )
                 :

                    (
                        loading && data.shows == undefined ? <ActivityIndicator size="large" style={{ alignSelf: "center", flex: 1 }} /> :
                            <FlatList
                                data={data.shows}
                                refreshControl={<RefreshControl refreshing={loading} />}
                                onRefresh={() => this.loadData()}
                                refreshing={loading}
                                ListHeaderComponentStyle={{ marginBottom: 32 }}
                                initialNumToRender={3}
                                ListHeaderComponent={_ => <ShowsListHeader nowShowing={data.featured} newEpisodes={data.watch_again} />}
                                renderItem={({ item }) => <ShowCatogory show={item} />}
                                keyExtractor={(_, index) => index.toString()}
                                ItemSeparatorComponent={_ => <View style={{ height: 32 }} />}
                            />
                    )
                }



            </SafeAreaView>
        )
    }

    componentDidMount() {
        this.loadData()
    }

    async loadData() {
        const response = await fetch('https://ctosdata.com/persona/persona.json');

        if (response.ok && response.status == 200) {
            const responseJSON = await response.json();
            this.setState({ data: responseJSON, loading: false, errorOccured:false });
        }else{
            this.setState({loading:false, errorOccured: true})
        }

    }
}
