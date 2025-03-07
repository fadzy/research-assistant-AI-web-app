import nltk
from nltk.corpus import stopwords
from collections import Counter
nltk.download('stopwords')

def extract_keywords(text):
    words = text.lower().split()
    words = [word for word in words if word.isalnum() and word not in stopwords.words('english')]
    return [word for word, _ in Counter(words).most_common(5)]  # Top 5 keywords
