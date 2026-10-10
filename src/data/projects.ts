// Project data with full details for individual project pages
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; // Optional: cards show the title's first letter when missing
  tags: string[];
  github?: string;
  live?: string;
  liveLabel?: string; // Button text for the live link (defaults to "Live Demo")
  video?: string;
  fullDescription?: string;
  highlight?: string;
  features?: string[];
  techDetails?: string[];
}

export const projects: Project[] = [
  {
    id: 6,
    title: "RiskGuard",
    description: "Return-risk decisioning platform for e-commerce. Scores each order's calibrated return probability in real time, explains it with SHAP, and recommends verification at a cost-optimal threshold.",
    tags: ["Python", "FastAPI", "LightGBM", "SHAP", "Next.js", "SQLite"],
    github: "https://github.com/Hemanthraj09/RiskGuard",
    highlight: "Built for the Razorpay AI Buildathon 2026 (Track 02): a working detector, verifier, or responder for one class of loss, judged on honest precision and recall from a held-out test set.",
    fullDescription: "Every returned e-commerce order costs money twice: once in fulfillment and again in reverse logistics. RiskGuard predicts, at the moment an order is placed, a calibrated probability that it will be returned, using the order's category, payment mode, value, delivery tier, and the customer's own purchase history. It then recommends accepting the order normally or flagging it for verification, using a cost-based threshold instead of an arbitrary 0.5 cutoff.\n\nThe data is split chronologically into train, validation, and test sets (65/15/20). The model trains on train, calibration and threshold selection happen on validation, and the threshold is frozen before the test set is ever touched. On the held-out test set the model reaches 0.812 ROC-AUC (95% CI 0.789–0.833) against a Bayes-optimal ceiling of 0.818, capturing about 98% of the achievable signal, and saves ₹43,521 per 1,000 orders compared with flagging nothing.\n\nRiskGuard only recommends. It never blocks, denies, or refunds an order; every decision is made and logged by a human analyst.",
    features: [
      "Real-time scoring of each order's calibrated return probability and risk band",
      "Top-5 SHAP explanations and a rule-based suggested action for every order",
      "Cost-optimal threshold that recomputes live as friction, return, and review costs change",
      "Model Performance page with ROC and PR curves, calibration (Brier/ECE), lift, confusion matrix, segment breakdown, and bootstrap CIs",
      "Simulation Console that streams fresh synthetic orders to the dashboard, with a risk-shift slider",
      "Human-in-the-loop verifier: analysts confirm or flag orders, recorded as an audit trail",
      "Benchmarked against a COD + fashion heuristic (about 17% costlier) and logistic regression"
    ],
    techDetails: [
      "LightGBM (100 trees, depth 3, L1/L2 regularized) with isotonic calibration",
      "SHAP TreeExplainer for per-order explanations",
      "FastAPI backend with server-sent events; /score p95 latency of about 30 ms",
      "SQLite store for order history and analyst decisions",
      "Next.js (App Router), React, and Tailwind CSS dashboard",
      "Shared feature module and a pytest suite guarding train/serve parity"
    ]
  },
  {
    id: 5,
    title: "Tether",
    description: "Social accountability app for friend groups. Log daily work, keep streaks, compete on a live leaderboard, back logs with photo proof, and sync LeetCode solves automatically, all on Android.",
    image: "/projects/tether.png",
    tags: ["Kotlin", "Android", "Firebase", "Firestore", "MVVM", "WorkManager"],
    github: "https://github.com/Hemanthraj09/Tether",
    live: "https://github.com/Hemanthraj09/Tether/releases/latest",
    liveLabel: "Download APK",
    video: "/projects/videos/Tether-demo.mp4",
    fullDescription: "Tether is a social accountability app built for people who work better with a little competition.\n\nCreate a group of up to six friends, pick a goal (study, coding, gym, reading, work, or habits), and show up every day. Log what you did, build your streak, and watch the leaderboard tell the truth about who's actually putting in the work.\n\nBack a log with a photo and let your friends approve it or call it out. Compare what you said you'd do this week with what you actually did. In coding groups, LeetCode solves sync on their own and count toward streaks and rankings.\n\nNudge friends who've gone quiet. Run focused sessions with the built-in timer. Watch your heatmap fill up, one logged day at a time.\n\nNo noise. Just you, your crew, and the grind.",
    features: [
      "Real-time leaderboard (Today / This Week) that resets daily at midnight",
      "Per-group streaks with pace indicators",
      "Stopwatch and Pomodoro focus timer that stays accurate through screen-off, process death, and reboots",
      "Photo proof on logs (optional or required per group), with approve/doubt reactions from friends",
      "LeetCode connected account: verified solves sync automatically, credit streaks, and can rank coding groups",
      "Said vs. Did: weekly targets per focus area compared against hours actually logged",
      "Nudges and a live group activity feed",
      "GitHub-style yearly heatmap, switchable to LeetCode solves",
      "Invite-code based group joining, max 6 members"
    ],
    techDetails: [
      "Kotlin + XML + View Binding, single-Activity with Navigation Component",
      "MVVM with repositories and a pure-Kotlin domain layer; Coroutines, Flow, and StateFlow",
      "Firebase Auth (Email/Password + Google Sign-In) and Firestore with cache-first real-time listeners",
      "Atomic batch writes for logging, enforced by security rules with 97 emulator tests",
      "Foreground service running a timestamp-based timer state machine",
      "WorkManager background sync with LeetCode's GraphQL API, with Remote Config hot-fixes and a kill switch",
      "On-device photo compression, stored in Firestore to stay on Firebase's free plan",
      "87 JVM unit tests and GitHub Actions CI that builds signed release APKs"
    ]
  },
  {
    id: 3,
    title: "Visual Document Q&A",
    description: "RAG-powered document Q&A system with a local LLM and interactive topic graph. Upload PDFs or paste text to ask natural language questions with context-aware streamed responses.",
    image: "/projects/document-qa.png",
    tags: ["Python", "FastAPI", "Ollama", "ChromaDB", "RAG", "D3.js"],
    github: "https://github.com/Hemanthraj09/Document-Q-A.git",
    video: "/projects/videos/document-qa.mp4",
    fullDescription: "A document Q&A system built on a fully local RAG pipeline. PDFs are parsed with PyMuPDF using font-size heading detection, chunked, embedded with all-MiniLM-L6-v2, and stored in ChromaDB. Questions retrieve the top-5 chunks and stream responses from Ollama phi3 via SSE.\n\nA Concept Importance Engine scores each term using TF-IDF frequency, distribution across document sections, heading weight, and PageRank over a co-occurrence graph — driving a D3.js topic graph rendered instantly. A background LLM pass handles entity normalization and deduplication, merging refined concepts into the graph without blocking the user.\n\nRuns fully locally. Not hosted publicly due to hardware requirements (RTX 4050, 6GB VRAM).",
    features: [
      "PDF upload with font-size heading detection (H1/H2/H3)",
      "Streaming RAG chat via SSE with conversation history",
      "Topic-aware retrieval re-ranking",
      "D3.js force-directed topic graph with Core / Supporting / Minor tiers",
      "4-signal composite importance score (TF-IDF, spread, heading, PageRank)",
      "Async LLM entity normalization with fullscreen graph view",
      "On-demand AI document summary"
    ],
    techDetails: [
      "FastAPI + Uvicorn for REST API and SSE streaming",
      "Ollama phi3 — local LLM, ~12 tok/s on RTX 4050 (6GB VRAM)",
      "all-MiniLM-L6-v2 for embeddings, ChromaDB for vector search",
      "scikit-learn TF-IDF + NetworkX PageRank on co-occurrence graph",
      "PyMuPDF for PDF extraction and heading detection",
      "D3.js for force-directed graph and bar chart",
      "Vanilla HTML/CSS/JS frontend"
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
