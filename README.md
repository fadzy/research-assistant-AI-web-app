Project Summary: Research Assistant Web App

This project is a text summarization and keyword extraction web app that allows users to paste large amounts of text (such as research papers) and generate concise summaries with relevant keywords.
How It Works

    Frontend (React & Tailwind CSS)
        User pastes text into a styled textarea.
        Clicking the "Summarize & Extract Keywords" button sends a request to the backend.
        The summary and extracted keywords are displayed in a responsive UI with a modern gradient design.

    Backend (FastAPI & Transformers)
        Receives text input from the frontend via a POST request.
        Uses Facebook’s BART model (facebook/bart-large-cnn) for text summarization.
        Uses BERT-based Named Entity Recognition (dslim/bert-base-NER) to extract keywords.
        Sends the summary and keywords back to the frontend as JSON.

    Tech Stack
        Frontend: React, Tailwind CSS (for styling), Axios (for API calls).
        Backend: FastAPI, Hugging Face Transformers, CORS Middleware.
        ![image](https://github.com/user-attachments/assets/3cb831c1-591d-4fb9-a448-71ce7345a5a6)
        https://github.com/fadzy/research-assistant-AI-web-app/blob/main/Screen%20Recording%202025-03-07%20195325.mp4
        
