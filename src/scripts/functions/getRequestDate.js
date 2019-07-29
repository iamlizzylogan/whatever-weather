const getRequestDate = date => {
    let arr = date.toLocaleDateString('en-GB').split('/');
    let arrReversed = arr.sort((prev, curr) => arr.indexOf(curr) - arr.indexOf(prev));
    let requestDate = arrReversed.join('-');
    return requestDate;
}

export default getRequestDate;
