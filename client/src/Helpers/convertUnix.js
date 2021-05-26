const convertUnix = (unix, format) => {
    let time = new Date(unix * 1000);
    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    let month = months[time.getMonth()];
    let date = time.getDate();
    let hour = time.getHours();
    let year = time.getFullYear();
    let minutes = time.getMinutes();

    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    let dayOfWeek = days[time.getDay()];

    if (format === 'dd/mm') {
        return `${date}/${month}`;
    } else if (format === 'hh/dd') {
        return `${hour}h/${date}th`;
    } else if (format === 'dd/mm/yy') {
        return `${date}/${month}/${year}`;
    } else if (format === 'hh/mm') {
        return `${hour}h/${minutes}min`;
    } else if (format === 'nd/dd/mm') {
        return `${dayOfWeek} ${date}/${month}`;
    } else if (format === 'nd') {
        return dayOfWeek;
    }
};

export default convertUnix;
