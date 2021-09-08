function todaysFormattedString() {
    const today = new Date();
    const options = { weekday: 'long', month: 'numeric', day: 'numeric' };
    const todayString = today.toLocaleDateString('pt-BR', options);

    return todayString[0].toUpperCase() + todayString.slice(1);
}

function getDayPercentage() {
    const now = new Date();
    const midnightBefore = new Date();
    const midnightAfter = new Date();

    midnightBefore.setHours(0, 0, 0);
    midnightAfter.setHours(0, 0, 0);
    midnightAfter.setDate(now.getDate() + 1);

    const dayPercentage = (now - midnightBefore) / (midnightAfter - midnightBefore) * 100;

    return dayPercentage;
}

export { todaysFormattedString, getDayPercentage };