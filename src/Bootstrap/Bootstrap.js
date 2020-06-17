import React from 'react';
import {useSelector} from 'react-redux';
import {Routes} from '../Routes';

const Bootstrap = () => {
  const {started} = useSelector(state => state.app);
  return <Routes started={started} />;
};

export default Bootstrap;
