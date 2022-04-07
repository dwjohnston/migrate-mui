
import React from 'react';
import { makeStyles } from '@material-ui/core';

export type MyComponentProps = {
};


export const useStyles = makeStyles(
  ({ spacing, palette }) => ({
    root: {
        padding: spacing(2),
        border: "solid 1px red",
    }
  })
);



export const MyComponent = (props: MyComponentProps) => {
  const {  } = props;
  const {root} = useStyles();


  return (
    <div className ={root}>
        this is a component
    </div>
  );
};
