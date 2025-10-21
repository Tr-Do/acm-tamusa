const calendarId = 'skuteckadjeilqn@gmail.com';
const apiKey = 'AIzaSyC1btdZ6tUdyQ-iPg0NRfsquEUmQo_j5QA';

const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        let events = data.items;
        events.sort((a, b) => {
            const dateA = new Date(a.start.dateTime || a.start.date);
            const dateB = new Date(b.start.dateTime || b.start.date);
            return dateA - dateB;
        });

        const eventsList = document.getElementById('events-list');
        events.forEach(event => {
            const div = document.createElement('div');
            const start = event.start.dateTime || event.start.date;
            const formattedStart = new Date(start).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            div.textContent = `${formattedStart} - ${event.summary}`;
            eventsList.appendChild(div);
            div.classList.add('mb-3', 'bg-white', 'text-dark', 'p-3', 'rounded-3');
        });
    });
