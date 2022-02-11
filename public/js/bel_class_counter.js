function getDaysOfBelLeft() {
    const holidays = ['2022-02-16', '2022-02-23', '2022-03-01', '2022-03-02',
        '2022-03-03', '2022-03-09', '2022-03-16', '2022-03-23', '2022-03-30',
        '2022-04-06', '2022-04-07', '2022-04-08', '2022-04-09', '2022-04-10',
        '2022-04-13', '2022-04-20', '2022-04-22', '2022-04-25', '2022-04-27',
        '2022-05-02', '2022-05-04', '2022-05-06', '2022-05-11'];
    const startDate = new Date();
    const endDate = new Date("2022-05-12"); // end of school year

// Validate input
    if (endDate <= startDate) {
        return 0;
    }

// Calculate days between dates
    const millisecondsPerDay = 86400000; // Day in milliseconds
    startDate.setHours(0, 0, 0, 1);  // Start just after midnight
    endDate.setHours(23, 59, 59, 999);  // End just before midnight
    const diff = endDate - startDate;  // Milliseconds between datetime objects
    let days = Math.ceil(diff / millisecondsPerDay);

    // Subtract two weekend days for every week in between
    const weeks = Math.floor(days / 7);
    days -= weeks * 2;

    // Handle special cases
    const startDay = startDate.getDay();
    const endDay = endDate.getDay();

    // Remove weekend not previously removed.
    if (startDay - endDay > 1) {
        days -= 2;
    }
    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay === 0 && endDay !== 6) {
        days--;
    }

    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay === 6 && startDay !== 0) {
        days--;
    }

    /* Here is the code */
    holidays.forEach(day => {
        if ((day >= startDate.toISOString()) && (day <= endDate.toISOString())) {
            /* If it is not Saturday (6) or Sunday (0), subtract it */ // but also Wednesday
            if ((parseDate(day).getDay() % 6) !== 0) {
                days--;
            }
        }
    });
    return days;
}

function parseDate(input) {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

