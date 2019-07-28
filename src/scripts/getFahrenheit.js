const getFahrenheit = celsius => {
    const fahrenheit = Math.round(celsius * 9 / 5 + 32);
    return fahrenheit;
}

export default getFahrenheit;
