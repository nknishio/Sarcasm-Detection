This project is led by the Kaggle Club at BASIS Independent Silicon Valley. It is currently in progress.

- **Project leaders**: Nelson Nishio, Jason Nishio, Bill Huang

- **Other Members**:  Eric Niu, Wesley Lazuardi, Kevin Li

We focus on using natural language processing and deep learning to detect sarcasm from social media comments and news headlines. Creating a browser extension to help non-native English speakers better understand true intentions behind text in online media. For our task

# Datasets:
- News Headlines Dataset: https://www.kaggle.com/datasets/rmisra/news-headlines-dataset-for-sarcasm-detection
- Self-Annotated Reddit Corpus (SARC) Dataset: https://www.kaggle.com/datasets/danofer/sarcasm?select=train-balanced-sarcasm.csv

# Data preprocessing
1. Data Cleaning & Normalization
  - Convert text to lowercase → Ensures consistency in tokenization
  - Expand contractions for better tokenization (eg. convert "can't" to "cannot")
  - Remove URLs, special characters, and emojis
  - Remove HTML tags
  - Remove extra whitespaces and line breaks
  - Expand slang expressions (eg. "lol" to "laughing out loud")
2. Tokenization & Handling Word Variants
3. Handling Out-of-Vocabulary (OOV) Words (for LSTM only)
4. Sequence Formatting for Models
5. Saving Preprocessed Data for Reusability

# Models used:
We use contextual word embeddings, as many studies have shown that they significantly outperform static embeddings in sarcasm detection tasks.
- LSTM/BiLSTM
- BERT
- RoBERTa

We will compare the performances of the above models and make interpretations on the reasons for the differences based on the nature of each model.

# Browser Extension for Practical Use
In progress.
