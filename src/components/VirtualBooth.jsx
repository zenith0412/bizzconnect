import { Box, Button, Container, Grid, InputLabel, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CustomSeparator } from './BreadCrumbs';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';


const commonStyles = {
    borderColor: 'text.primary',
    marginTop: '10px',
    border: '2px solid #7755771a',
    height: 'auto',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'left'
};

export const VertualBooth = () => {
    const classes = useStyles();
    const [startDate, setStartDate] = React.useState(null);
    const [startTime, setStartTime] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);

    const handleDate = (sdate) => {
        setStartDate(sdate)
        let result = new Date(sdate);
        let d = result.setDate(result.getDate() + 7);
        setEndDate(d);
    }

    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <CustomSeparator />
                <Typography>IS77@biz.com</Typography>
            </Grid>

            <Grid
                container
                sx={{ mt: 4 }}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Typography variant="h6" className={classes.titleFontWeight}>Virtual Booth</Typography>
                <Stack direction="row">
                    <Button style={{ backgroundColor: "grey" }} className={classes.commonButtonStyle} size="large" variant="contained" startIcon={<FontAwesomeIcon style={{ fontSize: '15px' }} icon={faChevronLeft} />}>
                        Go Back
                    </Button>
                    <Button sx={{ ml: 1 }} className={classes.commonButtonStyle} size="large" variant="contained" endIcon={<FontAwesomeIcon style={{ fontSize: '15px' }} icon={faChevronRight} />}>
                        Continue
                    </Button>
                </Stack>
            </Grid>
            <Box
                container
                sx={{ ...commonStyles, boxShadow: 1 }}
            >
                <Typography style={{ fontWeight: 600 }} variant="h6" gutterBottom component="div">General</Typography>
                <FormControl style={{ margin: '20px' }} component="fieldset">
                    <FormLabel className={classes.inputLableStyle} component="legend">Event Name</FormLabel>
                    <TextField size="small" fullWidth label="Choose event name" id="fullWidth" />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={4}>
                                <FormLabel className={classes.inputLableStyle} component="legend">Start Date</FormLabel>
                                <DatePicker
                                    size="small"
                                    className={classes.eventFormField}
                                    width={50}

                                    value={startDate}
                                    onChange={(newValue) => {
                                        handleDate(newValue);
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            height: 45
                                        }
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                {/* <Item>xs=6 md=8</Item> */}
                            </Grid>
                            <Grid item xs={2}>
                                <FormLabel className={classes.inputLableStyle} component="legend">Start Time</FormLabel>
                                <TimePicker
                                    value={startTime}
                                    onChange={(newValue) => {
                                        setStartTime(newValue);
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            height: 45
                                        }
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                {/* <Item>xs=6 md=8</Item> */}
                            </Grid>
                            <Grid item xs={4}>
                                <FormLabel className={classes.inputLableStyle} component="legend">End Date</FormLabel>
                                <DatePicker
                                    value={endDate}
                                    onChange={(newValue) => {
                                        setEndDate(newValue);
                                    }}
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            height: 45
                                        }
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />

                                {/* <Item>xs=6 md=8</Item> */}
                            </Grid>
                            <Grid item xs={2}>
                                <FormLabel className={classes.inputLableStyle} component="legend">End Time</FormLabel>
                                <TimePicker
                                    InputProps={{
                                        style: {
                                            fontSize: 14,
                                            height: 45
                                        }
                                    }}
                                    value={endTime}
                                    onChange={(newValue) => {
                                        setEndTime(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                {/* <Item>xs=6 md=8</Item> */}
                            </Grid>

                        </Grid>
                        <FormLabel sx={{ mt: 3 }} className={classes.inputLableStyle} component="legend">Slug(www.bizconnectevents.com/slug)</FormLabel>
                        <TextField size="small" fullWidth label="Choose your event name as slug, Min 6 Characters" id="fullWidth" />
                    </LocalizationProvider>
                </FormControl>
            </Box >
        </Container>
    );
}

const useStyles = makeStyles(theme => ({
    inputLableStyle: {
        color: '#000 !important',
        fontSize: '15px !important',
        fontWeight: 'bold !important',
        marginBottom: '10px',
    },
    commonButtonStyle: {
        borderRadius: '10px !important',
        fontWeight: "600",
    },
    '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
        width: '100% !important'
    }

}))