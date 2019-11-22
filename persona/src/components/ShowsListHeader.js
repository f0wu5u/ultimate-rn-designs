import React, { PureComponent } from 'react';
import NewEpisodesList from './NewEpisodesList';
import NowShowing from './NowShowing';

export default class ShowsListHeader extends PureComponent {
    render() {
        const {newEpisodes, nowShowing} = this.props;
        return (
            <>
                <NewEpisodesList list={newEpisodes} />
                <NowShowing nowShowing={nowShowing} />
            </>
        )
    }
}