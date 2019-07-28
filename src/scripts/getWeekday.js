const getWeekday = date => {
    const options = { weekday: 'long'};
    const weekday = date.toLocaleDateString('en-US', options);
    return weekday;
}

export default getWeekday;
