from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS module
from sentiment import analyze_sentiment
from reddit_fetcher import get_reddit_posts

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return "Sentiment Analyzer Backend Running"

@app.route("/analyze", methods=["POST"])
def analyze():
    text = request.json.get("text", "")
    result = analyze_sentiment(text)
    return jsonify(result)

@app.route("/fetch/reddit", methods=["GET"])
def reddit():
    sub = request.args.get("subreddit", "technology")
    posts = get_reddit_posts(sub)
    return jsonify(posts)

if __name__ == "__main__":
    app.run(debug=True)



