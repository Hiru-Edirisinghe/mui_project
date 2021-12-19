import React from 'react';
import {AppBar, Toolbar, TextField, Grid, Card, CardContent, InputAdornment, Typography,Button, CssBaseline, Container} from '@material-ui/core';
import {Search, TouchApp, CallReceived, LocationOn} from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Paper from '@material-ui/core/Paper';
import {ArgumentAxis, ValueAxis, Chart, LineSeries, PieSeries, Title, BarSeries, Legend} from '@devexpress/dx-react-chart-material-ui';

import useStyles from './analyticsStyles';



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

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 18 },
  { argument: 2, value: 14 },
  { argument: 3, value: 20 },
];

const barChartdata = [
  { argument: 'Mon', value: 30 },
  { argument: 'Tue', value: 20 },
  { argument: 'Wed', value: 10 },
  { argument: 'Thur', value: 50 },
  { argument: 'Fri', value: 60 },
];

const Analytics = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar postion="relative" className={classes.header}>
        <Toolbar style={{display: 'flex',justifyContent: 'center'}}>
           <Typography variant="h3" align='center'>
              Menu
           </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
          <div maxWidth="md">
              <Container className={classes.container}>
                  <div maxWidth="md">
                  <Grid container spacing={3} justify="center">
                      <Grid item xs={12} sm={8}>
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
                      <Grid item xs={6} sm={2} className={classes.btnGrid}>
                          <Button variant="outlined" className={classes.btn}>
                            New Campaign
                          </Button>
                      </Grid>
                      <Grid item xs={6} sm={2} className={classes.btnGrid}>
                          <Button variant="outlined" className={classes.btn}>
                            Shortner URL
                          </Button>
                      </Grid>
                  </Grid>
                  </div>
              </Container>
              <Container className={classes.container}>
                  <div maxWidth="md">
                        <div className={classes.cardGrid}>
                        <Grid container spacing={4} justify="center">
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                            <Grid container spacing={2} justify="center">
                                                <Grid item xs={1} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                    <TouchApp /> 
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography className={classes.cardText}>
                                                      10
                                                    </Typography>
                                                    <Typography className={classes.cardText}>
                                                      Total Clicks
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <div>
                                            <Grid container spacing={2} justify="center">
                                                <Grid item xs={1} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                    <CallReceived /> 
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography className={classes.cardText}>
                                                      10
                                                    </Typography>
                                                    <Typography className={classes.cardText}>
                                                      Total Refferers
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <div>
                                            <Grid container spacing={2} justify="center">
                                                <Grid item xs={1} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                    <LocationOn /> 
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography className={classes.cardText}>
                                                      5
                                                    </Typography>
                                                    <Typography className={classes.cardText}>
                                                      Top Location
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                  </div>
              </Container>
              <Container className={classes.container}>
                  <div maxWidth="md">
                  <Grid container spacing={8} justify="center">
                      <Grid item xs={12} md={12}>
                          <Paper style={{padding: '10px'}}>
                            <Chart data={barChartdata}>
                              <ArgumentAxis />
                              <ValueAxis />
                              <BarSeries
                                name="Label" valueField="value" argumentField="argument" />
                              <Title text="Chart One"/>
                              <Legend />
                            </Chart>
                          </Paper>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Paper style={{padding: '10px'}}>
                          <Chart data={data} >
                            <ArgumentAxis />
                            <ValueAxis />
                            <LineSeries valueField="value" argumentField="argument" />
                            <Title text="Chart Two"/>
                          </Chart>
                        </Paper>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                          <Paper style={{padding: '10px'}}>
                            <Chart data={barChartdata}>
                              <PieSeries name="Label" valueField="value" argumentField="argument" />
                              <Title text="Chart Three"/>
                              <Legend />
                            </Chart>
                          </Paper>
                      </Grid>
                      <Grid item xs={12} md={4}>
                          <Paper style={{padding: '10px'}}>
                            <Chart data={barChartdata}>
                              <PieSeries valueField="value" 
                                argumentField="argument" 
                                innerRadius={0.6} />
                              <Title text="Chart Four"/>
                              <Legend />
                            </Chart>
                          </Paper>
                      </Grid>
                  </Grid>
                  
                  </div>
              </Container>
          </div>
          
      </main>
    </>
  );
}

export default Analytics;