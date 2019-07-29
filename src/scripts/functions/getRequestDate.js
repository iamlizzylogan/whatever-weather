const getRequestDate = date => {
    let arr = date.toLocaleDateString().split('/');
    let arrReversed = arr.sort((prev, curr) => arr.indexOf(prev) < arr.indexOf(curr));
    let requestDate = arrReversed.join('-');
    return requestDate;
}

export default getRequestDate;
