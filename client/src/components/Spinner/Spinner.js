import React from 'react';

import { Spin } from './Spinner.style';

export default (props) => {
  return (
    <div className="spinner">
      <Spin>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="length" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
      </Spin>
    </div>
  );
}
