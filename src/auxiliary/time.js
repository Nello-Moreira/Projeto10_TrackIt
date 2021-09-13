const daysFirstLetter = [
    'D', 'S', 'T', 'Q', 'Q', 'S', 'S'
];

function getDateFormattedString(date, locale) {
    const options = { weekday: 'long', day: 'numeric', month: 'numeric' };
    const todayString = date.toLocaleDateString(locale, options);

    return todayString[0].toUpperCase() + todayString.slice(1);
}

function getDateInNumbers(date, locale) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(locale, options);
}

export { daysFirstLetter, getDateFormattedString, getDateInNumbers };