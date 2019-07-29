const getDisplayDate = date => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const displayDate = date.toLocaleDateString('en-US', options);
    return displayDate;
}

export default getDisplayDate;
