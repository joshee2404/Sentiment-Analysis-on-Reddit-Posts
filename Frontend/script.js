// Function to fetch Reddit posts from the backend
async function fetchRedditPosts() {
    // Get the subreddit from the input field (default to 'technology' if empty)
    const subreddit = document.getElementById('redditSubreddit').value.trim() || "technology";
    
    // Send a GET request to the backend to fetch posts from the specified subreddit
    const response = await fetch(`http://127.0.0.1:5000/fetch/reddit?subreddit=${subreddit}`);
    
    if (response.ok) {
        const posts = await response.json();
        displayRedditPosts(posts);
    } else {
        console.error("Error fetching Reddit posts");
    }
}

// Function to display fetched Reddit posts in the UI
function displayRedditPosts(posts) {
    const postsContainer = document.getElementById('redditPosts');
    postsContainer.innerHTML = '';  // Clear previous posts

    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts found for this subreddit.</p>';
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-display');
        postElement.innerHTML = `
            <h3>${post}</h3>
        `;
        postElement.addEventListener('click', () => {
            document.getElementById('inputText').value = post;
        });
        postsContainer.appendChild(postElement);
    });
}



// Function to analyze sentiment
async function analyze() {
    const text = document.getElementById('inputText').value;
    const res = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });

    const data = await res.json();

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="sentiment-box">
            <p><strong>Sentiment:</strong> <span class="${data.sentiment}">${data.sentiment.toUpperCase()}</span></p>
            <p><strong>Text:</strong> ${data.text}</p>
            <p><strong>Score:</strong> 
                <span>Positive: ${data.score.pos}</span>, 
                <span>Neutral: ${data.score.neu}</span>, 
                <span>Negative: ${data.score.neg}</span>, 
                <span>Compound: ${data.score.compound}</span>
            </p>
        </div>
    `;
}
