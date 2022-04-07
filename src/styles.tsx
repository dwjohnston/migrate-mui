import React from "react"; 
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(
    ({ spacing, palette }) => ({
      root: {
          padding: spacing(2),
          border: "solid 1px red",
      }
    })
  );
  