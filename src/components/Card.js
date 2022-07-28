import React,{useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
function CardView(props) {
  const [iconStyle,setIconStyle] = useState(null)
  
  useEffect(()=>
  {
    console.log("Icon",props.forIcon);
    if(props.forIcon)
    {
      setIconStyle({display:'flex', justifyContent:'center' })
    }
  },[props.forIcon])
  return (
    <Card  style={iconStyle}  sx={{ minWidth: 275 }} variant="outlined" ma>
      <CardContent>{props.children}</CardContent>
      <CardActions>
        {/* <Button size="small" onClick={(event)=>goToDepartmentCredentialDetailCard(event)}>Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default CardView;
