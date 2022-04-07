
import React from 'react';
import { useStyles } from './MyComponent.styles';

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
