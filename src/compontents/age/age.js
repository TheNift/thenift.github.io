import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './age.css';

const Age = () => {
  const [age, setAge] = useState(0);
  const birthday = dayjs('2001-03-20');

  useEffect(() => {
    const interval = setInterval(() => {
      const time = dayjs().diff(birthday, 'year', true);
      setAge(time.toFixed(10));
    }, 50);

    return () => clearInterval(interval);
  }, [birthday]);

  return <span id="age" className="age-component">{age}</span>;
};

export { Age };