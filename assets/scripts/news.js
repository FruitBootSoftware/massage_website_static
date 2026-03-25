function getLocale() {
    const match = window.location.pathname.match(/^\/(en|hu)\//);
    return match ? match[1] : 'hu';
}

function init_news() {
    const locale = getLocale();
    fetch('/assets/data/news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.news.sort((a, b) => new Date(b.date) - new Date(a.date));
            data.news.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = getNewsFeedComponent(item.date, item[`title_${locale}`], item[`content_${locale}`]);
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error loading news:', error));
}

function getNewsFeedComponent(date, title, content) {
    return `
    <div class="flex flex-col mx-8">
        <p class="text-md font-bold mx-2">${date}</p>
        <div class="flex flex-col gap-2 bg-white rounded-md shadow-card px-4 py-2">
            <h1 class="text-xl font-bold">${title}</h1>
            <div class="mt-2">
                <p class="text-md">${content}</p>
            </div>
        </div>
    </div>
    `
}

document.addEventListener('DOMContentLoaded', () => init_news());