import praw

reddit = praw.Reddit(
    client_id="g7gPq4IkvQKC1tSLFK6Wrw",
    client_secret="q6sr2tkpTSRI8c1Wcsde3oEcFwVcew",
    user_agent="Sentiment-Analysis"
)


def get_reddit_posts(subreddit, limit=5):
    posts = []
    for submission in reddit.subreddit(subreddit).hot(limit=limit):
        posts.append(submission.title)
    return posts

