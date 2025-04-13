from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

Analyzer = SentimentIntensityAnalyzer()

def analyze_sentiment(text):
    score = Analyzer.polarity_scores(text)
    return{
        "text": text,
        "sentiment": "positive" if score['compound'] > 0.05 else
                     "negative" if score['compound'] < -0.05 else
                     "neutral",
        "score": score
    }
