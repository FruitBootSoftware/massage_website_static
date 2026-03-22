function initTimetable() {
    fetch('/assets/data/availability.json').then(res => res.json()).then(data => {
        var weekdays = document.getElementsByClassName('weekday');
        for (let i = 0; i < weekdays.length; i++) {
            const element = weekdays[i];
            var availability = data.availability[element.getAttribute('data-id')];
            element.innerText = `${availability.from ?? ''} - ${availability.to ?? ''}`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => initTimetable());