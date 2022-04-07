
import React from 'react';
import { useStyles } from './style';

export type MyComponentProps = {
};





export const MyComponent = (props: MyComponentProps) => {
  const {  } = props;
  const {root} = useStyles();


  return (
    <div className ={root}>
        this is a component
    </div>
  );
};
