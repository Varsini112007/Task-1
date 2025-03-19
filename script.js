const tradingNewsItems = [
    "BEL got ₹2,463 crore IAF order; focus.",
    "Oil prices surge amid geopolitical tensions.",
    "Coromandel International acquires 53% stake in NACL Industries for ₹820 crore.",
    "Fed announces interest rate hikes to combat inflation.",
    "Tech stocks expected to grow with new product launches.",
    "S&P 500 shows strong growth after tech sector gains.",
    "Global trade tensions affect market performance.",
    "Investors are optimistic as earnings season begins.",
    "Hang Seng Index surges 21% under Trump, world’s top performer.",
    "Murthy urges India to focus on real AI innovation."
];

let currentNewsIndex = 0;

function displayNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.textContent = tradingNewsItems[currentNewsIndex];
    newsContainer.appendChild(newsItem);
    newsContainer.style.top = '100%';

    setTimeout(() => {
        newsContainer.style.top = '0';
    }, 0);

    setTimeout(() => {
        currentNewsIndex = (currentNewsIndex + 1) % tradingNewsItems.length;
        newsContainer.style.transition = 'none';
        newsContainer.style.top = '100%';

        setTimeout(() => {
            newsContainer.style.transition = 'top 1s ease-in-out';
            displayNews();
        }, 100);
    }, 5000);
}

displayNews();
