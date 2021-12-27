import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Events } from './Events';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core';
import { VertualBooth } from './VirtualBooth';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ width: '100%' }}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.sideBarTabs}
      >
        <Tab icon={<FontAwesomeIcon className={classes.tabsIcon} icon={faPersonBooth} />} label="Selfie Booth" {...a11yProps(0)} />
        <Tab icon={<FontAwesomeIcon className={classes.tabsIcon} icon={faImage} />} label="Gallery" {...a11yProps(1)} />
        <Tab icon={<FontAwesomeIcon className={classes.tabsIcon} icon={faImage} />} label="Template" {...a11yProps(1)} />
      </Tabs>
      <TabPanel style={{ width: '100%' }} value={value} index={0}>
        <Events />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VertualBooth />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tamplates
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  sideBarTabs: {
    "& .MuiButtonBase-root.MuiTab-root": {
      display: 'flex !important',
      flexDirection: 'row',
      marginLeft: '10px',
      width: '100px !important',
    },
    width: "15%"
  },
  tabsIcon: {
    marginRight: '8px'
  }

}));