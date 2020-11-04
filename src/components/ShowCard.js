import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Icon,
    IconButton,
    Link,
    Tooltip,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { truncate } from 'lodash';

const useStyles = makeStyles(() => ({
    favIcon: {
      color: 'red'
    },
    avatar: {
        borderRadius: 2
    },
    header: {
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    link: {
        color: '#65CED5',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'system-ui'
    },
    description: {
        marginTop: 10
    }
}));

function ShowCard(props) {
    const { show, onToggleFavoriteShow } = props;
    const classes = useStyles();

    const stripHtml = html => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    const getSubheader = show => {
        if (show.language && show.premiered) {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {`${show.premiered.split('-')[0]}, [${show.language}]`}
                </div>
            );
        }
        return 'None';
    }

    return (
        <Card raised>
            <CardHeader
                classes={{ title: classes.header }}
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
                subheader={getSubheader(show)}
            />
            <CardContent>
                <Grid container spacing={2} alignContent="center">
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Typography style={{ fontWeight: 600 }} variant="subtitle2">Genre: </Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        <Typography variant="body2">{show.genres.length > 0 ? show.genres.toString().replace(/,/g, ', ') : 'None'}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Typography style={{ fontWeight: 600 }} variant="subtitle2">Rating: </Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        <Typography variant="body2">{show.rating.average ? show.rating.average : 'None'}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Typography style={{ fontWeight: 600 }} variant="subtitle2">Official Site: </Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        {show.network && (
                            <Link classes={{ root: classes.link }} href={show.officialSite} color="secondary" target="_blank">{show.network.name}</Link>
                        )}
                        {!show.network && (
                            <Typography variant="body2">None</Typography>
                        )}
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <Typography style={{ fontWeight: 600 }} variant="subtitle2">Status: </Typography>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        <Typography variant="body2">{show.status ? show.status : 'None'}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography style={{ fontWeight: 600 }} variant="subtitle2">Description: </Typography>
                        {show.summary && stripHtml(show.summary).length > 150 ? (
                            <Tooltip
                              title={stripHtml(show.summary)}
                              placement="top"
                              enterDelay={300}
                              disableFocusListener={true}
                            >
                              <p className={classes.description}>{truncate(stripHtml(show.summary), { length: 150 })}</p>
                            </Tooltip>
                          ) : (
                            <p className={classes.description}>{stripHtml(show.summary || 'None')}</p>
                          )}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ShowCard;