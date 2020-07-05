import React, { useState, useEffect } from 'react';

let timeoutId = null;

export default function Loading() {
  const [dotNumber, setDotNumber] = useState(0);
  let dots = '';

  useEffect(() => {
    timeoutId = setTimeout(() => {
      if (dotNumber === 3) setDotNumber(0);
      else setDotNumber(dotNumber + 1);
      return () => {
        clearTimeout(timeoutId);
      };
    }, 500);
  }, [dotNumber]);

  for (let i = 0; i < dotNumber; i += 1) {
    dots += '.';
  }

  return <div className="loading">{`Loading${dots}`}</div>;
}
