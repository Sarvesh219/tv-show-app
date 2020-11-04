import { Grid } from '@material-ui/core';
import React from 'react';

import ShowCard from './ShowCard';

function ShowsList(props) {
    const { showsList, onToggleFavoriteShow } = props;
    return (
        <Grid container spacing={3} alignContent="center">
            {showsList && showsList.map(item => (
                <Grid key={item.id} item xs={4} lg={4} md={4} sm={4}>
                    <ShowCard onToggleFavoriteShow={onToggleFavoriteShow} show={item} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ShowsList;