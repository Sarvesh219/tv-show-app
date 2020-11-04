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
    const { show, onRemoveFavoriteShow } = props;
    const classes = useStyles();

    return (
        <Card raised>
            <CardHeader
                avatar={
                    <Avatar classes={{ root: classes.avatar }} aria-label="show" alt={show.name} src={show.image.medium} />
                }
                title={show.name}
                action={
                    <Tooltip title="Remove favorite">
                        <IconButton aria-label="remove_favorite" onClick={() => onRemoveFavoriteShow(show)}>
                            <Icon className={classes.favIcon}>delete_outline</Icon>
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