import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Icon,
    IconButton,
    Tooltip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
    favIcon: {
      color: 'red'
    },
    avatar: {
        borderRadius: 2
    }
}));

function ShowCard(props) {
    const { show, onToggleFavoriteShow } = props;
    const classes = useStyles();

    return (
        <Card raised>
            <CardHeader
                avatar={
                    <Avatar classes={{ root: classes.avatar }} aria-label="show" alt={show.name} src={show.image.medium} />
                }
                title={show.name}
                action={
                    <Tooltip title={!show.isFavorite ? 'Add favorite' : 'Remove favorite'}>
                        <IconButton aria-label="favorite" onClick={() => onToggleFavoriteShow(show)}>
                            <Icon className={classes.favIcon}>{!show.isFavorite ? 'favorite_border': 'favorite'}</Icon>
                        </IconButton>
                    </Tooltip>
                }
            />
            <CardContent>
                {show.name}
            </CardContent>
        </Card>
    );
}

export default ShowCard;