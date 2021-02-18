import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

interface Props {
  inverted?: boolean;
  context?: string;
}

const LoadingComponent = ({ inverted = true, context = 'Loading' }: Props) => {
  return (
    <div id='loader' className='text-center'>
      <strong>{context}</strong>
      <br />
      <br />
      <Spinner animation='border' role='status'>
        <span className='sr-only'>{context}</span>
      </Spinner>
    </div>
  );
};

export default LoadingComponent;
