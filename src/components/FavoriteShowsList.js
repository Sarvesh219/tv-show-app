import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import ShowFavoriteCard from './ShowFavoriteCard';

function FavoriteShowsList(props) {
    const { favoriteShowsList, onRemoveFavoriteShow } = props;
    return favoriteShowsList.length > 0 ? (
        <Grid container spacing={3} alignContent="center">
            {favoriteShowsList && favoriteShowsList.map(item => (
                <Grid key={item.id} item xs={4} lg={4} md={4} sm={4}>
                    <ShowFavoriteCard onRemoveFavoriteShow={onRemoveFavoriteShow} show={item} />
                </Grid>
            ))}
        </Grid>
    ) : (
        <Typography style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 600, color: 'red' }} variant="subtitle2">No favorites added!</Typography>
    )
}

export default FavoriteShowsList;