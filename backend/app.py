from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load summarization and keyword extraction models (optimized for minimal space usage)
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
ner = pipeline("ner", model="dslim/bert-base-NER")

class TextRequest(BaseModel):
    text: str

@app.post("/summarize/")
def summarize_text(request: TextRequest):
    try:
        summary = summarizer(request.text, max_length=1000, min_length=50, do_sample=False)
        keywords = list(set([ent['word'] for ent in ner(request.text) if ent['entity'].startswith("B-")]))
        return {"summary": summary[0]['summary_text'], "keywords": keywords}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
