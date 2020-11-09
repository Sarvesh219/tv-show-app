import { AppBar, Box, Container, Tab, Tabs  } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { getShows, toggleFavorite } from './actions';
import FavoriteShowsList from './components/FavoriteShowsList';
import ShowsList from './components/ShowsList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function App(props) {
  const { dispatch, showsList } = props;
  const [value, setValue] = useState(0);

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getShows());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavoriteShow = show => {
    dispatch(toggleFavorite(show));
  }

  const removeFavoriteShow = show => {
    dispatch(toggleFavorite(show));
  }

  const favoriteShowsList = showsList.filter(item => item.isFavorite);

  return (
    <Container maxWidth="lg" data-test="app-container">
      <AppBar position="static" data-test="appbar-main">
        <Tabs value={value} onChange={handleTabsChange} aria-label="simple tabs example" data-test="appbar-tabs">
          <Tab label="Shows" {...a11yProps(0)} />
          <Tab label="Favorites" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} data-test="tabpanel-main">
        <ShowsList onToggleFavoriteShow={toggleFavoriteShow} showsList={showsList} />
      </TabPanel>
      <TabPanel value={value} index={1} data-test="tabpanel-main">
        <FavoriteShowsList onRemoveFavoriteShow={removeFavoriteShow} favoriteShowsList={favoriteShowsList} />
      </TabPanel>
    </Container>
  );
}

const mapStateToProps = state => ({
  showsList: state.shows.showsList
});

export default connect(mapStateToProps)(App);
