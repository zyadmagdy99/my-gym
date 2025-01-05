import { Box } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import { Typography } from '@mui/material';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography style={{position:"absolute",top:1240}} onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography style={{position:"absolute",top:1240}} onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
function HorizontalScrollBar({data,bodyPart,setbodyPart}) {
  return (
    //Horizontal Scroll Bar in home page
<div style={{ maxWidth: "100vw", overflowX: "hidden" }}>

    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=>(
        <Box m="0 40px" key={item.id||item}
        itemId={item.id||item}
        title={item.id||item} >
           <BodyPart item={item} setbodyPart={setbodyPart} bodyPart={bodyPart}/> 
        </Box>
      ))}
    </ScrollMenu>
          </div>
  )
}

export default HorizontalScrollBar
