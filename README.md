# Overview
This project is led by the **Kaggle Club at BASIS Independent Silicon Valley**.

- **Researchers**: Nelson Nishio, Jason Nishio, Bill Huang, Eric Niu, Wesley Lazuardi, Kevin Li

- **Project leads**: Nelson Nishio, Jason Nishio, Bill Huang

In this study, we used natural language processing (NLP) and deep learning to detect sarcasm from social media comments and news headlines. We then created a  deployable browser extension to help non-native English speakers better understand the true intentions behind text in online media. We first optimized a model that can perform well on both of our datasets, and then integrate that model to the browser extension. On the extension, we give probabilities of predictions and highlight (using explainable AI) the most important words that impact the model's decision to maintain the trustability of our technology.

Project presented at **BISV Research Conference** on April 26, 2025.

**Slides: https://docs.google.com/presentation/d/1jkBPyzkpyFIFHOsOlde8Mk-PD12_zKXOkjTsjt9Iwro/edit?usp=sharing**

# Datasets:
- News Headlines Dataset: https://www.kaggle.com/datasets/rmisra/news-headlines-dataset-for-sarcasm-detection
- Self-Annotated Reddit Corpus (SARC) Dataset: https://www.kaggle.com/datasets/danofer/sarcasm?select=train-balanced-sarcasm.csv

# Data preprocessing
In this study, we compared the effect on performance using models with contextual embeddings versus static embeddings. Depending on the embedding type, we employed different data cleaning methods, as each method examines words in distinct ways.
### Data Cleaning & Normalization for all models
  - Convert text to lowercase → Ensures consistency in tokenization
  - Expand contractions for better tokenization (eg. convert "can't" to "cannot")
  - Remove URLs, special characters, and emojis
  - Remove HTML tags
  - Remove extra whitespaces and line breaks
  - Expand slang expressions (eg. "lol" to "laughing out loud")

### LSTM/BiLSTM-specific Preprocessing (non-contextual word embeddings)
  - Lemmatization
  - Removing stop words
  - Handling Out-of-Vocabulary (OOV) Words
  - Convert words to integer sequences using Tokenizers
  - Pad sequences to ensure uniform input length
### BERT/RoBERTa-specific Preprocessing (contextual word embeddings)
  - Subword Tokenization
  - Add special tokens ([CLS] at the beginning, [SEP] at the end).
  - Generate token IDs, attention masks, and segment embeddings using transformers library.

# Models:
We tested various ML Models as well as DL models (neural networks). We also tested handcrafted features with PoS tag encodings, stop word encodings, negation token encodings, and n-gram probability features used by [Thaokar et al.](https://doi.org/10.1007/s42979-023-02506-5) to achieve state-of-the-art accuracy. We then tuned parameters to improve accuracy, and finally export our best model to use on our browser extension.
ML Models: Random Forest, Decision Tree, etc.

We use contextual word embeddings, as many studies have shown that they significantly outperform static embeddings in sarcasm detection tasks.
- LSTM
- BiLSTM
- BERT
- RoBERTa

We compare the performances of the above models and make interpretations on the reasons for the differences based on the nature of each model.

# Final: Browser Extension for Practical Use
The extension contents are in the [Extension](https://github.com/nknishio/Sarcasm-Detection/tree/main/Extension) folder.
The best-performing model was exported as a .pt (Pytorch framework) file, and can be hosted on a local server, which can be accessed by the extension to make a prediction.

## Sample Demo
Input (News Headline)

<img width="322" height="280" alt="unnamed (1)" src="https://github.com/user-attachments/assets/ee460a08-4965-4f2c-8782-e0da2335f183" />

Output

<img width="496" height="208" alt="image" src="https://github.com/user-attachments/assets/fe5c442e-7c91-47f7-ad6d-6cb384a1d389" />

