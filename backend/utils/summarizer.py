import nltk
from nltk.tokenize import sent_tokenize
nltk.download('punkt')

def summarize_text(text):
    sentences = sent_tokenize(text)
    return " ".join(sentences[:2])  # Simple summary with first 2 sentences
