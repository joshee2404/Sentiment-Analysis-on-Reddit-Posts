
# 🔍 Sentiment Analysis Web App

A simple and clean web application that performs sentiment analysis on custom input text and fetches the latest Reddit posts from a given subreddit. Users can analyze the sentiment of their own input or quickly analyze Reddit content with a single click.

---

## ✨ Features

- **⚡ Sentiment Analysis**  
  Analyze the sentiment of any text as **Positive**, **Neutral**, or **Negative** using VADER (Valence Aware Dictionary and sEntiment Reasoner).

- **📥 Reddit Post Fetching**  
  Enter a subreddit and fetch the 5 latest posts instantly using the Reddit API.

- **🧠 One-Click Analysis**  
  Click on any Reddit post to automatically fill it into the sentiment box for quick analysis.

- **💻 Clean UI with Dark Mode**  
  Fully responsive interface with a modern, minimalistic dark-mode design.

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Fetch API (for backend communication)
- GitHub Pages (optional for frontend deployment)

### Backend
- Python (Flask)
- VADER Sentiment Analysis (`nltk`)
- Reddit API (`praw`)

---

⚠️ **Note:** The app is not currently deployed online. You can run it locally using the instructions below.

---

## 🧪 How to Use

### Analyze Sentiment
1. Enter any text in the input box.
2. Click **Analyze**.
3. The sentiment result will appear below.

### Fetch Reddit Posts
1. Enter a subreddit name (e.g., `technology`, `news`).
2. Click **Fetch Reddit Posts**.
3. The latest 5 posts will be displayed.

### Analyze Reddit Post
1. Click on any Reddit post.
2. It auto-fills into the sentiment box.
3. Click **Analyze** to view the result.

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Backend Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Backend
```bash
python app.py
```
Backend will be available at:  
`http://127.0.0.1:5000/`

### 4. Open the Frontend
Open `index.html` directly in your browser to use the app.

---

## 📁 Large Files Not Included

The following files are excluded from this repository due to GitHub’s 100MB size limit:

- `torch_cpu.dll`
- `dnnl.lib`

🔗 **You must download and place these in the project root folder manually.**

**Download Links** (Host these somewhere like Google Drive or Dropbox and replace below):
- [Download torch_cpu.dll](https://drive.google.com/file/d/1ZIOhm9bwSRo3fA247-dv75DnsDKXH9Z4/view?usp=drive_link)
- [Download dnnl.lib](https://drive.google.com/file/d/13Kf0swJGZAKusBl_hH7JV0TYFkZZ2brs/view?usp=drive_link)

---

## 📡 API Endpoints

### `POST /analyze`

Analyzes the sentiment of the input text.

#### Request Body:
```json
{
  "text": "Your input text here"
}
```

#### Response:
```json
{
  "score": {
    "compound": 0.6,
    "neg": 0.0,
    "neu": 0.3,
    "pos": 0.7
  },
  "sentiment": "positive",
  "text": "Your input text here"
}
```

---

### `GET /fetch/reddit?subreddit=<subreddit-name>`

Fetches the 5 most recent posts from a subreddit.

#### Example:
```http
GET /fetch/reddit?subreddit=technology
```

#### Response:
```json
[
  {
    "title": "New AI model released by OpenAI",
    "url": "https://reddit.com/r/technology/post1"
  },
  ...
]
```

## 🙏 Acknowledgements

- [VADER Sentiment Analysis - NLTK](https://github.com/cjhutto/vaderSentiment)
- [Reddit API via PRAW](https://praw.readthedocs.io/)
- [Flask Framework](https://flask.palletsprojects.com/)
