// Project data with full details for individual project pages
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  video?: string;
  fullDescription?: string;
  highlight?: string;
  features?: string[];
  techDetails?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AV Sync Detection",
    description: "Deep learning system for detecting audio-visual synchronization issues using SyncNet architecture. Analyzes lip movements and speech patterns to identify dubbing mismatches.",
    image: "/projects/av-sync-detection.png",
    tags: ["Python", "Deep Learning", "SyncNet", "Computer Vision"],
    github: "https://github.com/R-V-Abhishek/Syncnet_FCN.git",
    video: "/projects/videos/av-sync-detection.mp4",
    highlight: "This project was developed as a solution to a problem statement given by AMAGI, a leading media technology company.",
    fullDescription: "It implements a deep learning-based audio-visual synchronization detection system using the SyncNet architecture. The system analyzes video content to detect lip-sync errors and dubbing mismatches by comparing audio signals with visual lip movements. It uses a Fully Convolutional Network (FCN) approach to process video frames and audio spectrograms, generating synchronization confidence scores that indicate whether the audio and video are properly aligned.",
    features: [
      "Detects lip-sync errors in video content with high accuracy",
      "Uses SyncNet FCN architecture for temporal alignment analysis",
      "Processes both audio waveforms and video frames simultaneously",
      "Generates frame-by-frame synchronization confidence scores",
      "Identifies dubbing mismatches in movies and TV shows",
      "Supports batch processing of multiple video files"
    ],
    techDetails: [
      "Python for core development",
      "PyTorch/TensorFlow for deep learning implementation",
      "SyncNet architecture with FCN modifications",
      "OpenCV for video frame extraction",
      "Librosa for audio processing and spectrogram generation",
      "NumPy for numerical computations"
    ]
  },
  {
    id: 2,
    title: "YouTube Data Analytics",
    description: "Big Data analytics dashboard analyzing YouTube trending patterns across 113 countries using Apache Spark for processing 5.5GB+ dataset with 10M+ records.",
    image: "/projects/youtube-analytics.png",
    tags: ["Python", "PySpark", "Streamlit", "Big Data", "Plotly"],
    github: "https://github.com/Hemanthraj09/Youtube-data-Analytics.git",
    live: "https://hemanthraj09-youtube-data-analytics-app-qehdde.streamlit.app/",
    video: "/projects/videos/youtube-analytics.mp4",
    fullDescription: "A comprehensive Big Data Analytics dashboard built with Streamlit that analyzes YouTube trending video patterns across 113 countries. Due to the massive dataset size (5.5GB+, 10M+ records), Apache Spark (PySpark) was used for distributed data processing, efficient sampling, and large-scale aggregations. The application visualizes key insights about video performance, engagement metrics, and regional trending patterns through interactive charts and graphs.",
    features: [
      "Interactive filtering by country and language",
      "Real-time data visualization with interactive charts",
      "Analysis of video engagement metrics (views, likes, comments, engagement rate)",
      "Geographic distribution analysis across 113 countries",
      "Language-wise content pattern identification",
      "Top performing channels analysis",
      "Auto-generated key insights (top region, dominant language, highest engagement)",
      "Trending activity over time visualization",
      "Noise reduction with minimum threshold filtering"
    ],
    techDetails: [
      "Apache Spark (PySpark) for distributed Big Data processing",
      "Streamlit for web application framework",
      "Pandas & NumPy for data manipulation and analysis",
      "Plotly for interactive visualizations",
      "Python for backend processing",
      "Deployed on Streamlit Cloud"
    ]
  },
  {
    id: 3,
    title: "Document Q&A",
    description: "RAG-powered document Q&A system using LangFlow for PDF processing. Upload documents or paste text to ask natural language questions with context-aware responses.",
    image: "/projects/document-qa.png",
    tags: ["Python", "FastAPI", "LangFlow", "RAG", "Gemini"],
    github: "https://github.com/Hemanthraj09/Document-Q-A.git",
    video: "/projects/videos/document-qa.mp4",
    fullDescription: "A document question-answering system that leverages Retrieval-Augmented Generation (RAG) via LangFlow for processing PDF documents. Users can upload documents or paste text and ask natural language questions, receiving context-aware responses extracted from the document content.\n\nNote: This project is not hosted publicly as it uses an official API key. Hosting it could lead to unauthorized usage and API quota exhaustion.",
    features: [
      "PDF document upload and text extraction",
      "Direct text input support",
      "Natural language question answering with RAG",
      "Context-aware response generation",
      "Session-based conversation memory",
      "Modern, responsive chat interface"
    ],
    techDetails: [
      "FastAPI for REST API backend",
      "LangFlow for RAG pipeline orchestration",
      "Google Gemini for LLM capabilities (via LangFlow)",
      "PyMuPDF for PDF parsing",
      "HTML/CSS/JavaScript for frontend UI"
    ]
  },
  {
    id: 4,
    title: "Twitter Sentiment Analysis",
    description: "End-to-end ML pipeline for sentiment analysis trained on 1.6M tweets. Features Logistic Regression with TF-IDF vectorization for real-time positive/negative classification.",
    image: "/projects/twitter-sentiment.png",
    tags: ["Python", "Scikit-learn", "NLTK", "Streamlit", "ML"],
    github: "https://github.com/Hemanthraj09/Twitter-Sentiment-analysis.git",
    live: "https://twitter-sentiment-analysis-p3ycuj5h9prjaqbtysahpa.streamlit.app/",
    video: "/projects/videos/twitter-sentiment.mp4",
    fullDescription: "An end-to-end machine learning pipeline for Twitter sentiment analysis. The project began with exploratory data analysis on the Sentiment140 dataset (1.6 million tweets) in a Jupyter notebook, where data patterns, text characteristics, and preprocessing techniques were analyzed. Following this analysis, a production-ready sentiment analyzer was built that classifies text into positive or negative sentiments using a Logistic Regression model with TF-IDF vectorization.",
    features: [
      "End-to-end ML pipeline: From raw tweet data exploration to trained model deployment",
      "Real-time sentiment prediction: Interactive web interface for instant text classification",
      "Binary sentiment classification: Positive/Negative detection with confidence scores",
      "Comprehensive text preprocessing: @mention removal, URL cleaning, stopword filtering, and Porter stemming",
      "Model transparency: See how text is processed before prediction",
      "Sample text testing: Pre-loaded examples for quick demonstrations"
    ],
    techDetails: [
      "ML/Data: Pandas, NumPy, Scikit-learn",
      "NLP: NLTK (Tokenization, Stemming, Stopwords)",
      "Vectorization: TF-IDF (5,000 features, unigrams + bigrams)",
      "Model: Logistic Regression with L2 regularization",
      "Web App: Streamlit",
      "Visualization: Matplotlib, Seaborn"
    ]
  },
];
