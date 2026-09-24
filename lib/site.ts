import {
  Columns2,
  FileText,
  History,
  Image as ImageIcon,
  ListChecks,
  Mic,
  Plug,
  ScanSearch,
  ShoppingBag,
  Video,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "EchoGPT",
  tagline: "One prompt bar for every kind of work.",
  url: "https://echogpt.live",
  appUrl: "https://echogpt.live",
  email: "hello@echogpt.live",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Models", href: "#models" },
  { label: "Preview", href: "#preview" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export type Feature = {
  title: string;
  copy: string;
  icon: LucideIcon;
  pro?: boolean;
  span?: "wide" | "normal";
};

export const FEATURES: Feature[] = [
  {
    title: "Image Studio",
    copy: "Turn a line of text into finished artwork, product shots and thumbnails. Restyle, upscale and remix without leaving the chat.",
    icon: ImageIcon,
    pro: true,
    span: "wide",
  },
  {
    title: "Video Studio",
    copy: "Script, storyboard and render short clips from a prompt. Export ready for the feed.",
    icon: Video,
    pro: true,
    span: "wide",
  },
  {
    title: "Model Compare",
    copy: "Run one prompt through several models side by side and keep the best answer.",
    icon: Columns2,
  },
  {
    title: "Connectors",
    copy: "Link your docs, drives and tools so answers come from your real material.",
    icon: Plug,
  },
  {
    title: "AI Tasks",
    copy: "Hand over a multi-step job and let EchoGPT run it while you work.",
    icon: ListChecks,
  },
  {
    title: "AI Job Analysis",
    copy: "Paste a job post, upload a CV, get the gap list and a tailored application.",
    icon: ScanSearch,
  },
  {
    title: "AI SOP Builder",
    copy: "Describe a process once, get a clean standard operating procedure you can hand over.",
    icon: FileText,
  },
  {
    title: "Store",
    copy: "Ready-made prompts and workflows, one click into your workspace.",
    icon: ShoppingBag,
  },
  {
    title: "History",
    copy: "Every conversation and generation, searchable and re-openable.",
    icon: History,
  },
  {
    title: "Voice in, answer out",
    copy: "Hold the mic, speak, and EchoGPT transcribes and answers.",
    icon: Mic,
  },
];

export type Model = {
  name: string;
  role: string;
  copy: string;
  context: string;
  speed: string;
  best: string;
  tier: "core" | "pro";
};

export const MODELS: Model[] = [
  {
    name: "EchoGPT Core",
    role: "Everyday",
    copy: "Fast, balanced answers for the questions you ask ten times a day.",
    context: "128K",
    speed: "Instant",
    best: "Drafting, summaries, edits",
    tier: "core",
  },
  {
    name: "EchoGPT Reason",
    role: "Deep work",
    copy: "Thinks in steps before it writes. For plans, calculations and hard trade-offs.",
    context: "256K",
    speed: "Measured",
    best: "Strategy, analysis, code",
    tier: "pro",
  },
  {
    name: "EchoGPT Vision",
    role: "Multimodal",
    copy: "Reads screenshots, PDFs, diagrams and photos, then answers about them.",
    context: "200K",
    speed: "Fast",
    best: "Documents, screens, receipts",
    tier: "pro",
  },
  {
    name: "EchoGPT Studio",
    role: "Creative",
    copy: "The image and video engine behind both studios — style-consistent output.",
    context: "64K",
    speed: "Rendered",
    best: "Art, shots, clips",
    tier: "pro",
  },
];

export const MODEL_ROUTER = [
  "Auto routing",
  "Temperature",
  "System presets",
  "Streaming",
  "Token meter",
  "Fallback models",
];

export const WHY = [
  {
    title: "One workspace, not six tabs",
    copy: "Chat, images, video, documents and automation share the same context. You stop re-explaining yourself to a different tool every time.",
  },
  {
    title: "Compare before you commit",
    copy: "The Compare view answers the same question with several models so the output you keep is the one you chose, not the one that finished first.",
  },
  {
    title: "It reaches your material",
    copy: "Connectors pull in the files and tools you already use, so answers cite your reality instead of inventing a plausible one.",
  },
  {
    title: "Built for outcomes, not conversation",
    copy: "AI Tasks, Job Analysis and SOP Builder each end in a deliverable: a run list, a tailored application, a document you can hand to someone.",
  },
  {
    title: "Nothing gets lost",
    copy: "History keeps every prompt, answer and generation searchable, so last month's good idea is one query away.",
  },
];

export type Plan = {
  name: string;
  price: string;
  unit: string;
  blurb: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    unit: "forever",
    blurb: "The full workspace with everyday model access.",
    features: [
      "Chat, History and Store",
      "Model Compare, limited runs",
      "Community prompts",
      "No card needed",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$15",
    unit: "per month",
    blurb: "For the people who live in the prompt bar all day.",
    features: [
      "Everything in Free",
      "Image Studio and Video Studio",
      "Deep reasoning and vision models",
      "Long context and priority speed",
      "Unlimited AI Tasks",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$40",
    unit: "per seat / month",
    blurb: "Shared context, shared SOPs, one bill.",
    features: [
      "Everything in Pro",
      "Shared workspace and SOP library",
      "Role-based access",
      "Central connectors",
      "Priority support",
    ],
    cta: "Talk to us",
  },
];

export const FAQS = [
  {
    q: "What exactly is EchoGPT?",
    a: "It is an AI workspace that opens on a prompt bar. From there you can chat, generate images and video, compare model answers, connect your own files, and run structured tools such as Job Analysis and SOP Builder — all in one place.",
  },
  {
    q: "Do I have to install anything?",
    a: "No. EchoGPT runs in the browser on any modern device. You can install it as an app from your browser so it opens in its own window with its own icon, but there is no download step to get started.",
  },
  {
    q: "Which models can I use?",
    a: "EchoGPT ships its own model lineup and routes each request to the model that suits the job. You can also pick a model by hand, or send one prompt to several and compare the answers side by side.",
  },
  {
    q: "Can it use my own documents and data?",
    a: "Yes — through Connectors. Link the places your material lives and EchoGPT works from those files instead of general knowledge, with the source attached to the answer.",
  },
  {
    q: "What is the difference between Free and Pro?",
    a: "Free gives you the whole workspace with everyday model access. Pro unlocks the creative engines — Image Studio and Video Studio — plus deep reasoning, vision, longer context and unlimited AI Tasks.",
  },
  {
    q: "Is my work private?",
    a: "Your conversations, generations and connected files stay inside your account and are not shared with other users. Teams get role-based access on top of that. If you need specific terms for your organisation, ask us and we will confirm them in writing.",
  },
];

export const MARQUEE = [
  "New Chat",
  "Image Studio",
  "Video Studio",
  "Compare",
  "Connectors",
  "History",
  "Store",
  "AI Tasks",
  "AI Job Analysis",
  "AI SOP Builder",
];
