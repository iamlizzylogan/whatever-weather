const getDateString = date => {
    let arr = date.toLocaleDateString().split('/');
    let arrReversed = arr.sort((prev, curr) => arr.indexOf(prev) < arr.indexOf(curr));
    let dateString = arrReversed.join('-');
    return dateString;
}

export default getDateString;
