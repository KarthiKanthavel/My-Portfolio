export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;     // demo site
  repoUrl?: string;     // github
  UIDemoUrl?: string; // optional internal route
  images: string[];     // /public/projects/*.png
  status?: "Live" | "Local" | "Private" | "In Progress";
};

export const projects: Project[] = [
  {
    id: "engine",
    title: "RankIQ",
    tagline: "A Query-Based PageRank Search Engine",
    description:
      "Created a web crawler using Python to index a network of over 1,000 pages. Embedded search query functionality by calculating the cosine similarity between the queries and pre-computed values.",
    stack: ["HTML/CSS", "Python", "JSON"],
    highlights: [
     
    ],
    repoUrl: "https://YOUR-CLIENT-SITE.com",
    images: ["./images/engine-1.png"],
    status: "Local",
  },
  {
    id: "kidsloveinvesting",
    title: "KidsLoveInvesting",
    tagline: "Full-stack financial education platform (Preparing For Deployment)",
    description:
      "A full-stack web app designed to teach financial kids literacy through structured content and a clean dashboard experience. Built with a strong backend foundation and a simple, friendly UI.",
    stack: ["Django", "PostgreSQL", "HTML/CSS", "JS"],
    highlights: [
      
    ],
    liveUrl: "https://kidsloveinvesting.ca/",
    images: ["./images/kli-1.png", "./images/kli-2.png", "./images/kli-3.png"],
    status: "Live",
  },
  {
    id: "taxmate",
    title: "TaxMate",
    tagline: "CSV tax organizer + analyzer for a clothing business",
    description:
      "A web-based tool that converts raw bank CSV exports into structured, readable tax data. Helps streamline early-stage bookkeeping by categorizing transactions and surfacing clean summaries.",
    stack: ["Django", "PostgreSQL", "HTML/CSS", "JS"],
    highlights: [
    
    ],
    repoUrl: "https://github.com/KarthiKanthavel/taxmate",
    UIDemoUrl: "https://github.com/YOURNAME/taxmate",
    images: ["./images/taxmate-1.png", "./images/taxmate-2.png" , "./images/taxmate-3.png"],
    status: "Local",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    tagline: "Premium UI + motion-focused design",
    description:
      "My personal portfolio is designed to feel dynamic and expressive. Smooth motion, interactive cards, and subtle lighting brings my projects to life.",
    stack: ["React", "Vite", "TypeScript", "JS"],
    highlights: [
      
    ],
    liveUrl: "https://YOURNAME.github.io/portfolio-website",
    repoUrl: "https://github.com/KarthiKanthavel/My-Portfolio",
    images: ["./images/portfolio-1.png"],
    status: "Live",
  },
];
