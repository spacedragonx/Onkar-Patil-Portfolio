export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  technicalApproach: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  visualType: 'plant-disease' | 'deep-spo' | 'expense-flow' | 'archive';
}

export interface ArchiveProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  architectureNote: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const PERSONAL_INFO = {
  name: "Onkar Patil",
  legalName: "Onkar Bajirao Patil",
  role: "Computer Science Student · AI/ML & Backend Engineering",
  headline: "I build software that turns complex problems into useful things.",
  bio: "I'm a Computer Science student exploring machine learning, intelligent systems, and backend engineering. I like understanding how things work, building them from the ground up, and making them useful.",
  metadata: "COMPUTER SCIENCE · SOFTWARE · MACHINE LEARNING",
  email: "onkarpatil729@gmail.com",
  github: "https://github.com/spacedragonx",
  linkedin: "https://www.linkedin.com/in/onkar-patil-6862b22a5/",
  location: "Pune, India",
  status: "Available for internships & software engineering roles",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "plant-disease",
    number: "01 / COMPUTER VISION & ML",
    title: "Plant Disease Detection & Remedy Engine",
    category: "Machine Learning · Computer Vision",
    summary: "A leaf pathology diagnostic pipeline applying transfer learning with ResNet-34 on the PlantVillage dataset to classify crop foliage infections and prescribe targeted remediation steps.",
    technicalApproach: "Engineered robust preprocessing with affine data augmentation (rotations, perspective scaling, color jitter) to counter lighting variations. Fine-tuned early convolutional layers while optimizing the dense classification head using discriminative learning rates and one-cycle scheduling. Integrated inference outputs directly with agricultural treatment protocols.",
    technologies: ["PyTorch", "FastAI", "ResNet-34", "Python", "Computer Vision", "Albumentations"],
    githubUrl: "https://github.com/spacedragonx/PDD",
    featured: true,
    visualType: 'plant-disease',
  },
  {
    id: "deep-spo",
    number: "02 / QUANTITATIVE SYSTEMS",
    title: "DeepSPO: Sequential Portfolio Allocation",
    category: "Applied Machine Learning · Quantitative Systems",
    summary: "An end-to-end deep learning framework utilizing Long Short-Term Memory (LSTM) recurrent networks to map sequential historical market indicators directly into risk-adjusted multi-asset portfolio allocations.",
    technicalApproach: "Trained recurrent architectures on multidimensional time-series returns and rolling volatility features. The loss function directly maximizes the expected Sharpe ratio while applying explicit quadratic transaction-cost penalties to prevent turnover churning and illiquid rebalancing shocks.",
    technologies: ["Python", "PyTorch", "LSTM Networks", "NumPy", "Pandas", "Quantitative Optimization"],
    githubUrl: "https://github.com/spacedragonx/DeepSPO",
    featured: true,
    visualType: 'deep-spo',
  },
  {
    id: "expense-tracker",
    number: "03 / FULL-STACK ENGINEERING",
    title: "Bank Statement Parsing & Financial Ledger",
    category: "Full-Stack Development · Systems Logic",
    summary: "A practical financial engine with automated raw bank statement CSV parsing, multi-pass regex normalization, duplicate transaction flagging, and category cash-flow breakdown.",
    technicalApproach: "Implemented deterministic fingerprint hashing (timestamp + merchant string + normalized amount) to eliminate duplicate statement uploads. Features transactional ACID persistence, zero-dependency client analytics, and instant ledger reconciliations without opaque third-party black boxes.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/spacedragonx/Expense-Tracker",
    featured: true,
    visualType: 'expense-flow',
  }
];

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: "mtfd",
    title: "MTFD — Multithreaded File Downloader",
    category: "Systems & Concurrency",
    description: "High-throughput concurrent file retrieval CLI built in C++17. Splits large HTTP target files into byte-range segments downloaded across thread pools with POSIX synchronization.",
    technologies: ["C++17", "POSIX Threads", "HTTP Range", "Mutex & Semaphores", "CMake"],
    githubUrl: "https://github.com/spacedragonx/File-Downloader",
    architectureNote: "Uses HTTP byte-range headers (`Range: bytes=X-Y`) with thread-safe file seek writes to assemble chunks in place with zero memory overflow.",
  },
  {
    id: "order-book",
    title: "C++ High-Performance Order Book Simulator",
    category: "Low-Latency Systems",
    description: "Financial exchange limit order book implementing price-time priority (FIFO matching) with constant-time level lookups and fast bid/ask order cancellations.",
    technologies: ["C++20", "STL Data Structures", "Matching Engine", "Low-Latency Logic"],
    githubUrl: "https://github.com/spacedragonx/Order-Book-Simulator",
    architectureNote: "Combines std::map for price-level ordering with doubly linked lists for O(1) order insertion, matching, and cancellation.",
  },
  {
    id: "pune-bus",
    title: "Pune Bus Transit Route Traversal",
    category: "Graph Algorithms",
    description: "Public transportation route calculation engine evaluating multi-hop bus journeys across the Pune municipal network using modified Dijkstra and BFS search strategies.",
    technologies: ["C++", "Dijkstra's Algorithm", "Graph Traversal", "Adjacency Lists"],
    githubUrl: "https://github.com/spacedragonx/Pune-Bus-Traversal",
    architectureNote: "Models interchanges as weighted multi-graph vertices, computing shortest-transfer paths and minimizing layover latency.",
  },
  {
    id: "presidio",
    title: "Microsoft Presidio — Open Source Contribution",
    category: "Open Source · Security",
    description: "Resolved false-positive recognizer anomalies in Microsoft's open-source privacy and PII protection engine by tuning URL and domain boundary regex parsers.",
    technologies: ["Python", "Regex", "PII Redaction", "Security Pipelines", "pytest"],
    githubUrl: "https://github.com/microsoft/presidio/pull/1532",
    architectureNote: "PR #1532: Strengthened URL entity validation rules against edge-case punctuation trailing tokens in analytical text pipelines.",
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "C++ (17/20)", "C", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Machine Learning & AI",
    items: ["PyTorch", "FastAI", "TensorFlow", "Scikit-Learn", "Computer Vision (CNNs / ResNet)", "Pandas", "NumPy"]
  },
  {
    category: "Development & Systems",
    items: ["React", "Node.js", "Express", "Starlette / FastAPI", "RESTful APIs", "MongoDB", "MySQL"]
  },
  {
    category: "Tools & Infrastructure",
    items: ["Git & GitHub", "Docker", "Linux / Bash", "Google Cloud Platform", "CMake", "GDB"]
  }
];

export const INTEREST_AREAS = [
  {
    code: "01",
    title: "Machine Learning & Computer Vision",
    note: "Transfer learning architectures, feature map inspection, deep learning for real-world visual diagnostics."
  },
  {
    code: "02",
    title: "Quantitative & Decision Systems",
    note: "Sequential deep modeling (LSTMs, Transformers), utility optimization under transaction friction and risk constraints."
  },
  {
    code: "03",
    title: "Backend Architecture & Concurrency",
    note: "High-throughput systems, multi-threaded pipelines in C++, memory management, and deterministic state handling."
  },
  {
    code: "04",
    title: "Algorithms & Computational Rigor",
    note: "Graph theory, spatial traversals, and algorithmic problem-solving with verified complexity boundaries."
  }
];
