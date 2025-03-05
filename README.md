This project is led by the **Kaggle Club at BASIS Independent Silicon Valley**. It is currently in progress (started January 2025).

- **Project leaders**: Nelson Nishio, Jason Nishio, Bill Huang

- **Other Members**:  Eric Niu, Wesley Lazuardi, Kevin Li

Our focus is to use natural language processing and deep learning to detect sarcasm from social media comments and news headlines. We strive to create a browser extension to help non-native English speakers better understand the true intentions behind text in online media. We will first optimize a model that can perform well on both of our datasets, and then integrate that model to the browser extension. On the extension, we will give probabilities of predictions and highlight (using explainable AI) the most important words that impact the model's decision to maintain the trustability of our technology.

# Datasets:
- News Headlines Dataset: https://www.kaggle.com/datasets/rmisra/news-headlines-dataset-for-sarcasm-detection
- Self-Annotated Reddit Corpus (SARC) Dataset: https://www.kaggle.com/datasets/danofer/sarcasm?select=train-balanced-sarcasm.csv

# Data preprocessing
### Data Cleaning & Normalization for all models
  - Convert text to lowercase → Ensures consistency in tokenization
  - Expand contractions for better tokenization (eg. convert "can't" to "cannot")
  - Remove URLs, special characters, and emojis
  - Remove HTML tags
  - Remove extra whitespaces and line breaks
  - Expand slang expressions (eg. "lol" to "laughing out loud")

### LSTM/BiLSTM-specific Preprocessing
  - Lemmatization
  - Removing stop words
  - Handling Out-of-Vocabulary (OOV) Words
  - Convert words to integer sequences using Tokenizers
  - Pad sequences to ensure uniform input length
### BERT/RoBERTa-specific Preprocessing
  - Subword Tokenization
  - Add special tokens ([CLS] at the beginning, [SEP] at the end).
  - Generate token IDs, attention masks, and segment embeddings using transformers library.

# Models used:
We use contextual word embeddings, as many studies have shown that they significantly outperform static embeddings in sarcasm detection tasks.
- LSTM
- BiLSTM
- BERT
- RoBERTa

We will compare the performances of the above models and make interpretations on the reasons for the differences based on the nature of each model.

# Browser Extension for Practical Use
In progress.
