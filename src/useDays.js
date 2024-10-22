import { useState } from 'react';

const useSelectedDay = () => {
    const [selectedDay, setSelectedDay] = useState('Hoy');

    const changeDay = (day) => {
        setSelectedDay(day);
    };

    return { selectedDay, changeDay };
};

export default useSelectedDay;
