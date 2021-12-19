import React from 'react';
import { useNavigate } from "react-router-dom";
import {TextField, Grid, Card, CardContent, InputAdornment, Typography,Button, CssBaseline, Container} from '@material-ui/core';
import {Search, SpeakerNotes} from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from "@material-ui/lab/Pagination";

import useStyles from './campaignStyles';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const cards = [1, 2]

const Campaign = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <main className={classes.main}>
          <div className={classes.box} maxWidth="sm">
              <Container style={{backgroundColor: '#f5f2f0'}}>
                  <Typography variant='h3'align='center' className={classes.menuHeading}>
                    Menu
                  </Typography>
              </Container>
              <div className={classes.container}>
                  <Container maxWidth="sm">
                      <div className={classes.buttons}>
                          <Grid container spacing={2} justify="center">
                              <Grid item xs={12} sm={6}>
                                <Autocomplete
                                  freeSolo
                                  id="free-solo-2-demo"
                                  disableClearable
                                  options={top100Films.map((option) => option.title)}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Search input"
                                      InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        endAdornment: <InputAdornment position="start"><Search/></InputAdornment>,
                                      }}
                                      id="outlined-basic" 
                                      variant="outlined"
                                      
                                    />
                                  )}
                                />
                              </Grid>
                              <Grid item xs={6} sm={3} className={classes.btnGrid}>
                                  <Button variant="outlined" className={classes.btn}>
                                    New Campaign
                                  </Button>
                              </Grid>
                              <Grid item xs={6} sm={3} className={classes.btnGrid}>
                                  <Button variant="outlined" className={classes.btn}>
                                    Shortner URL
                                  </Button>
                              </Grid>
                          </Grid>
                      </div>
                      
                  </Container>
                  
              </div>
              <Container className={classes.cardGrid} maxWidth="sm">
                  <Grid container spacing={4} justify="center">
                  {cards.map((card) => (
                      <Grid item key={card} xs={12}>
                          <Card className={classes.card} onClick={() => {
                          navigate("/analytics");
                        }}>
                          <CardContent className={classes.cardContent}>
                              <div>
                                  <Grid container spacing={2} justify="center">
                                      <Grid item xs={10}>
                                          <Typography gutterBottom>
                                            URL
                                          </Typography>
                                          <Typography>
                                            Campaign Name
                                          </Typography>
                                      </Grid>
                                      <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                          <SpeakerNotes className={classes.icon}/> 
                                      </Grid>
                                  </Grid>
                              </div>
                              
                          </CardContent>
                          </Card>
                      </Grid>
                  ))}
                  </Grid>
              </Container>
              <Container className={classes.pagination} maxWidth="sm">
                  <div>
                    <Pagination count={4} size="large" hidePrevButton hideNextButton />
                  </div>
              </Container>
          </div>
          
      </main>
    </>
  );
}

export default Campaign;