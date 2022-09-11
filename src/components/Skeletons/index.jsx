import {Skeleton} from "@mui/material";
import React from "react";



export default function Skeletons(){
  return(
    <>
      <Skeleton variant="rounded" width="100%" height="20vh" sx={{marginBottom: "1em"}} />
      <Skeleton variant="rounded" width="100%" height="20vh" sx={{marginBottom: "1em"}}/>
      <Skeleton variant="rounded" width="100%" height="20vh" sx={{marginBottom: "1em"}}/>
      <Skeleton variant="rounded" width="100%" height="20vh" sx={{marginBottom: "1em"}}/>
    </>
  )
}