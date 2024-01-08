import "./MyWorkCardStyle.css"

// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const MyWorkCard = (props) => {
//   return (
//     <div className="project-card">
//         <img src={props.imgsrc} alt="img" /> {/*here src used from WorkData.js file as a props. WorkData.js file will act like API.*/ }
//         <h2 className="project-title">{props.title}</h2>
//         <div className="proj-details">
//             <p>{props.text}</p>
//             <div className="proj-btns">
//                 <a href={props.view} target="_blank" rel="noreferrer" className="btn">View</a>
//                 <a href={props.source} target="_blank" rel="noreferrer" className="btn">Source</a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default MyWorkCard

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { Box, CardActionArea } from '@mui/material';
import styled from "@emotion/styled";
import CircleIcon from '@mui/icons-material/Circle';

const SkillList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'row'
});

const SkillItem = styled('li')({
  marginRight: '5px',
  padding:'1px'
});

const styledTypo = styled('Typography')({
  fontWeight: 'bold',
  fontFamily: 'sans-serif'
})


export default function MyWorkCard(props) {
  console.log('47', props);
  return (
    <Card sx={{ maxWidth: 345, position:'relative', boxShadow: 'offset-x offset-y blur-radius spread-radius color inset'}}>
      <CardActionArea href={props.view} target="_blank" rel="noreferrer">
        <CardMedia
          component="img"
          src={props.imgsrc}
          alt=""
          style={{objectFit:'cover', width:'100%', height:'180px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box style={{padding:'6px', marginLeft:'1%'}}>
         <SkillList>
           {props.skills.map((skill, index) => (
             <SkillItem key={index}>
               <styledTypo variant="body2" color="text.secondary">• {skill}</styledTypo>
             </SkillItem>
            ))}
         </SkillList>
       </Box>
      <Box style={{position: 'absolute', bottom:'3px', right: '2px', padding: '3px'}}>
        <Button  variant="contained" href={props.source} style={{backgroundColor:'#3D3B40', textTransform: 'none', padding:'1px', fontSize:'13px'}}>
          Source
        </Button>
      </Box>
    </Card> 
  );
}

