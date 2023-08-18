import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { PiListDashesFill } from 'react-icons/pi';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/Simple_light_bulb_graphic.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Typography className={classes.heading} variant="h2" align="center">Revisit</Typography>
          <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <PiListDashesFill fontSize="40px"/>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;