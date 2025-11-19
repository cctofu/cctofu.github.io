export interface Project {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  details: string
  tech: string[]
  impact: string
  image?: string
}

export const projects: Project[] = [
  {
    id: "kaggle-santa-packing",
    title: "Kaggle Competition: Christmas Tree Packing Challenge",
    excerpt: "Creating Optimal Solution for Irregular Shaped Packing Problem",
    date: "Dec 2025 – Jan 2026",
    category: "Kaggle",
    details: "Built a mathematics model that is focused on creating the optimal solution to pack irregular shapes in the form of a Christmas Tree into the tighest square constraint possible. Ranked highest 26th on the leaderboard.",
    tech: ["Python", "Modeling", "Packing Problem", "Machine Learning", "Mathematics", "pandas"],
    impact: "Created optimal solution for finding the model to pack tight irregular shapes within tight constraints",
    image: "/project_img/santa.png"
  },
  {
    id: "kaggle-nfl-big-data-bowl",
    title: "Kaggle Competition: NFL Big Data Bowl",
    excerpt: "Analyzing metrics within the NFL while the ball is in the air.",
    date: "Nov 2025 – Dec 2025",
    category: "Kaggle",
    details: "In this project, I set out to analyze how wide receivers behave while the ball is in the air, a critical but understudied moment in football analytics. Using frame-by-frame tracking data from the NFL Big Data Bowl, I built a new metric called Ball-Tracking Intelligence (BTI) that measures how intelligently and efficiently a WR reacts once the ball is thrown. I engineered five movement-based sub-metrics — alignment, path efficiency, smoothness, early reaction, and late adjustment — and combined them using SHAP-derived weights for interpretability. This allowed me to produce per-play and per-player BTI scores, create leaguewide rankings, adjust for play difficulty, and compare performance across route types. My results show that BTI captures a meaningful, repeatable skill linked to catch success and deep-ball performance, offering valuable insights for scouting, player development, and scheme design. If you want, I can also make a 1-sentence or bullet-point version.",
    tech: ["Python", "Data Analytics", "Seaborn", "pandas", "Causal Inference", "Data Science"],
    impact: "Created a metric BTI: Ball Tracking Intelligence to evaluate Wide Receiver's ability to track the ball while in the air",
    image: "/project_img/big-data-bowl.jpg"
  },
  {
    id: "mirra-amazon-bedrock-hackathon",
    title: "MIRRA - Bedrock-powered RAG system",
    excerpt: "Built a Bedrock-powered RAG system that simulates real consumer behavior for AWS Bedrock x Columbia Engineering Hackathon.",
    date: "Nov 2025",
    category: "Hackathon",
    details: "Co-created MIRRA, an AI-powered consumer-simulation platform designed for pre-market product validation, presented at the AWS x Columbia Engineering Hackathon. Our system replaces slow, costly focus groups by using Amazon Bedrock + RAG to simulate realistic consumer behavior across demographic personas. Designed a full pipeline that ingests product descriptions, normalizes attributes, retrieves relevant persona clusters, and generates tailored synthetic feedback using LLM-PAG reasoning. Built an interactive dashboard that visualizes purchase likelihood, persona distribution, demographic breakdowns, and sentiment insights—transforming weeks-long research cycles into days. Demonstrated business impact through ~60% lower cost, ~80% faster testing cycles, and ROI-positive market testing compared to traditional focus-group workflows.",
    tech: ["AWS Bedrock", "Python", "RAG", "LLM", "Vector Retrieval", "React", "Semantic Matching", "Full-stack Development"],
    impact: "",
    image: "/project_img/mirra.png",
  },
  {
    id: "legal-llm-reasoning-thesis",
    title: "Enhancing Legal Reasoning in Large Language Models",
    excerpt: "Bachelor thesis developing scalable instruction-generation and fine-tuning frameworks to improve legal reasoning capabilities of LLMs.",
    date: "Dec 2024 – July 2025",
    category: "Research",
    details: "Bachelor Thesis at Tsinghua University AI Laboratories (Advisor: Prof. Qingyao Ai). Developed scalable instruction-generation pipelines and fine-tuning frameworks to strengthen legal reasoning in large language models. Designed and executed variance decomposition and convergence experiments to analyze model interpretability, conducting extensive cross-validation and parameter-sensitivity studies to assess stability and robustness. Built interactive dashboards for monitoring training analytics—visualizing learning curves, loss trajectories, and generalization metrics—to support data-driven debugging and iterative performance tuning. Authored comprehensive research documentation covering data-distribution analysis, hyperparameter optimization, and methodological reproducibility, improving clarity, transparency, and readiness for academic publication.",
    tech: ["Python", "LLM", "Instruction Evolution", "Fine-Tuning", "Model Evaluation", "Dataset Generation"],
    impact: "Improved stability, interpretability, and reproducibility of legal-domain LLM training workflows.",
    image: "/project_img/legal.jpg"
  },
  {
    id: "rag-legal-decision-modeling",
    title: "RAG-Enhanced Decision Modeling for Patent Office Actions",
    excerpt: "AI system helping improve patent office action submission and prior-art matching using domain-specific retrieval models.",
    date: "Sept 2023 – Jan 2025",
    category: "Research",
    details: "Mentored by professors at Tsinghua University AI Laboratories. Led a three-member research team to design a retrieval-augmented generation (RAG) based system for automating patent office action drafting and prior-art matching. Collected, standardized, and preprocessed 100,000+ multilingual patent records from USPTO and CNIPA sources, building robust text-cleaning, tokenization, and entity-extraction pipelines to ensure consistency. Developed domain-specific embeddings and semantic similarity models using transformer-based architectures (e.g., BERT, SentenceTransformers) to link patent claims with supporting evidence, improving retrieval precision by 20% over baseline. Designed a multi-stage retrieval–ranking–re-ranking framework that incorporated statistical weighting and cosine similarity thresholds, enhancing both result interpretability and legal transparency for expert review.",
    tech: ["Python", "LLM", "RAG", "BERT", "SentenceTransformers", "Vector Search", "Data Engineering", "Information Retrieval"],
    impact: "Improved retrieval precision by 20% and enhanced interpretability in legal AI workflows",
    image: "/project_img/rag.png"
  },
  {
    id: "automated-root-cause-analysis",
    title: "Automated Root Cause Analysis System for Marketing Metrics",
    excerpt: "End-to-end analytics pipeline identifying performance drivers in large-scale marketing campaigns.",
    date: "Apr 2024 – June 2024",
    category: "Research",
    details: "Developed an end-to-end analytics pipeline integrating Python, SQL, and Tableau to identify key performance drivers across marketing campaigns through statistical testing, variance decomposition, and time-series analysis. Engineered model evaluation and hypothesis-testing modules to quantify causal effects of creative, audience, and timing variables on engagement and conversion outcomes. Automated data extraction, transformation, and cleaning workflows, increasing diagnostic throughput and reducing manual analysis effort by 75%.",
    tech: ["Python", "SQL", "Tableau", "Time-Series Analysis", "Causal Inference"],
    impact: "Reduced manual diagnostic effort by 75% and improved accuracy of campaign performance insights.",
    image: "/project_img/meta.jpg"
  }
]
