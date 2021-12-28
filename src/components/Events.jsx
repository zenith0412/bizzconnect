import { Autocomplete, Button, Container, Grid, IconButton, Stack, StepButton, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Box, fontWeight } from '@mui/system';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomSeparator } from './BreadCrumbs';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCamera, faShareAlt, faChevronDown, faPencilAlt, faCopy, faTrashAlt, faPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/styles';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('77777777', 'test11111111', '21/12/2021, 01:02:20 AM', 24, 4.0),
    createData('Demo_selfie', 'test11111111', '21/12/2021, 01:02:20 AM', 37, 4.3),
    createData('Photo_booth_Demo', 'test11111111', '21/12/2021, 01:02:20 AM', 24, 6.0),
    createData('Testing_project', 'test11111111', '21/12/2021, 01:02:20 AM', 67, 4.3),
];

const commonStyles = {
    // bgcolor: 'background.paper',
    borderColor: 'text.primary',
    marginTop: '10px',
    border: '2px solid #7755771a',
    // width: '100%',
    height: 'auto',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'left'
};

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Events = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <CustomSeparator />
                <Typography>IS77@biz.com <FontAwesomeIcon style={{ fontSize: '12px', marginLeft: '8px' }} icon={faPowerOff} /></Typography>
            </Grid>
            <Grid
                container
                sx={{ mt: 4 }}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Typography variant="h6" className={classes.titleFontWeight}>Events</Typography>.
                <Button className={classes.commonButtonStyle} size="small" variant="contained" startIcon={<FontAwesomeIcon style={{ fontSize: '15px' }} icon={faPlus} />}>
                    New Event
                </Button>
            </Grid>
            <Box
                container
                sx={{ ...commonStyles, boxShadow: 1 }}

            >
                <Typography style={{ fontWeight: '600' }} variant="subtitle1" gutterBottom component="div">Activity</Typography>
                <Divider />
                <Stack
                    sx={{ mt: 1 }}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Grid item xs={4} className={classes.eventCards} >
                        {/* <Item></Item> */}
                        <FontAwesomeIcon icon={faCalendar} className={classes.eventCardsIcon} color="#1976d2" />
                        <Box sx={{ ml: 1, alignItems: 'center' }}>
                            <Typography className={`${classes.eventCardsDescriptionCount} ${classes.titleFontWeight}`}>3</Typography>
                            <Typography className={classes.eventCardsDescription}>Events Created</Typography>
                        </Box>
                    </Grid>
                    <Grid item className={classes.eventCards} xs={4} >
                        <FontAwesomeIcon icon={faCamera} className={classes.eventCardsIcon} color="#1976d2" />
                        <Box sx={{ ml: 1, alignItems: 'center' }}>
                            <Typography className={classes.eventCardsDescriptionCount}>18</Typography>
                            <Typography className={classes.eventCardsDescription}>Photos Captured</Typography>
                        </Box>
                    </Grid>
                    <Grid item className={classes.eventCards} xs={4} >
                        <FontAwesomeIcon icon={faShareAlt} className={classes.eventCardsIcon} color="#1976d2" />
                        <Box sx={{ ml: 1, alignItems: 'center' }}>
                            <Typography className={classes.eventCardsDescriptionCount}>-</Typography>
                            <Typography className={classes.eventCardsDescription}>Shares Collected</Typography>
                        </Box>
                    </Grid>
                </Stack>
            </Box >
            <Box
                container
                sx={{ ...commonStyles, mt: 2 }}
            >
                <Stack>
                    <TextField
                        label="Search..."
                        id="outlined-size-small"
                        size="small"
                        InputProps={{ className: classes.searchBar }}
                        InputLabelProps={{ className: classes.searchBarLabel }}
                        sx={{ width: 300, mb: 2 }}
                    />

                    <Divider />

                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell >Slug</TableCell>
                                    <TableCell >Event Start Date</TableCell>
                                    <TableCell >Photos</TableCell>
                                    <TableCell ></TableCell>
                                    <TableCell ></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        className={classes.tableBorder}
                                    >
                                        <TableCell component="th" width="15%">
                                            {row.name}
                                        </TableCell>
                                        <TableCell width="15%">{row.calories}</TableCell>
                                        <TableCell width="25%" >{row.fat}</TableCell>
                                        <TableCell width="11%">{row.protein}</TableCell>
                                        <TableCell >
                                            <Button className={classes.commonButtonStyle} size="small" variant="contained" startIcon={<FontAwesomeIcon style={{ fontSize: '15px' }} icon={faChevronDown} />}>
                                                De-activate
                                            </Button>
                                        </TableCell>
                                        <TableCell width="15%">
                                            <Stack direction="row">
                                                <IconButton className={classes.tableIconsStyle} aria-label="upload picture" component="span">
                                                    <FontAwesomeIcon icon={faPencilAlt} />
                                                </IconButton>
                                                <IconButton className={classes.tableIconsStyle} aria-label="upload picture" component="span">
                                                    <FontAwesomeIcon icon={faCopy} />
                                                </IconButton>
                                                <IconButton className={classes.tableIconsStyle} aria-label="upload picture" component="span">
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </IconButton>
                                            </Stack>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Stack>
            </Box >
        </Container >
    );
}

const useStyles = makeStyles(theme => ({
    eventCards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: "25px",
    },
    eventCardsDescriptionCount: {
        fontSize: '15px !important',
        fontWeight: 'bold !important',
    },
    eventCardsDescription: {
        fontSize: '12px !important',
        fontWeight: 'bold !important',
        color: '#757575',
    },
    searchBar: {
        height: 35,
    },
    searchBarLabel: {
        fontSize: '12px !important'
    },
    tableBorder: {
        "& .MuiTableCell-root": {
            borderBottom: 'none'
        }
    },
    titleFontWeight: {
        fontWeight: '600 !important',
    },
    commonButtonStyle: {
        fontSize: '13px !important',
        textTransform: 'capitalize !important',
        borderRadius: '10px !important',
    },
    eventCardsIcon: {
        fontSize: '40px'
    },
    tableIconsStyle: {
        color: '#000 !important',
        fontSize: '14px !important',
    }
}))