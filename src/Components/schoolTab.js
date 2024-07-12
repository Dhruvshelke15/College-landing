import React, { useState } from 'react';
import './schoolTab.css';
import Pace from '../Components/Resources/pace.jpeg';
import Button from '../Components/Button';
import { Tabs, Tab, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTab-root': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: '#00008B',
    },
  },
});

const SchoolTab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="box2t">
      <Box sx={{ width: '100%', marginTop: 4 }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="tabs example" sx={{ marginBottom: 2 }}>
          <Tab label="In School Preparation" />
          <Tab label="Revision" />
          <Tab label="Mock Tests" />
          <Tab label="Feedback" />
          <Tab label="Study Material" />
          <Tab label="Counselling" />
          <Tab label="Career Guidance" />
        </StyledTabs>
        <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px' }}>
          {value === 0 && 
          <Box>
            <div class="text-content">
              <h2 class="heading2">In School Preparation</h2>
              <p class="para2">We provide in school preparation without disturbing the schedule of your curriculum</p>
              <div class="button2"><Button/></div>
            </div>
            <div class="image-content">
              <img src={Pace} alt="pace" height="284px" width="516px"/>
            </div>
          </Box>
          }
          {value === 1 && <Box>Content for Tab 2</Box>}
          {value === 2 && <Box>Content for Tab 3</Box>}
          {value === 3 && <Box>Content for Tab 4</Box>}
          {value === 4 && <Box>Content for Tab 5</Box>}
          {value === 5 && <Box>Content for Tab 6</Box>}
          {value === 6 && <Box>Content for Tab 7</Box>}
        </Paper>
      </Box>
    </div>
  );
};

export default SchoolTab;
