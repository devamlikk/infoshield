const quizQuestions = [
  {
    question: "A news article cites '5 experts agree' but doesn't name them. What is this an example of?",
    options: [
      "Solid evidence-based reporting",
      "Vague authority — a common misinformation tactic",
      "Anonymous sourcing, which is standard journalism practice",
      "Peer-reviewed research methodology"
    ],
    correct: 1,
    explanation: "Unnamed or vague expert citations are a red flag. Credible journalism names its sources so readers can verify their credentials independently."
  },
  {
    question: "A viral post claims a politician 'admitted' something, linking to a 4-year-old article. What should concern you most?",
    options: [
      "The article is from a mainstream outlet so it must be fine",
      "The post uses the word 'admitted' which is loaded language",
      "The date — old stories are frequently reshared out of context to mislead",
      "Politicians always lie so it's probably true anyway"
    ],
    correct: 2,
    explanation: "Recycled old stories are one of the most common misinformation tactics. Always check the date and whether the story is still relevant to current events."
  },
  {
    question: "Which of these headlines is most likely to be misleading?",
    options: [
      "'New study links processed food to higher cancer risk in some populations'",
      "'Scientists say THIS common food is literally killing you'",
      "'Researchers find moderate correlation between diet and health outcomes'",
      "'Health study results vary across different demographic groups'"
    ],
    correct: 1,
    explanation: "Words like 'literally', 'THIS', and absolute claims are hallmarks of sensationalist misinformation. Credible reporting uses measured, specific language."
  },
  {
    question: "You read an article that perfectly confirms your existing political beliefs. What should you do?",
    options: [
      "Share it immediately — it confirms what you already know is true",
      "Be more skeptical than usual — confirmation bias makes us less critical of agreeable content",
      "Trust it more because it aligns with your lived experience",
      "Only share it if your friends agree with you too"
    ],
    correct: 1,
    explanation: "Confirmation bias is one of the primary psychological mechanisms misinformation exploits. Content that feels satisfying to believe deserves extra scrutiny, not less."
  },
  {
    question: "A fact-checking site rates a claim as 'Mostly False'. What does this most likely mean?",
    options: [
      "The entire claim is fabricated",
      "The fact-checker has a political bias against the claim",
      "The claim contains a kernel of truth but is framed in a significantly misleading way",
      "The claim hasn't been fully investigated yet"
    ],
    correct: 2,
    explanation: "Most misinformation isn't completely fabricated — it distorts, exaggerates, or decontextualises real facts. 'Mostly False' typically means the framing is deeply misleading even if some element is accurate."
  },
  {
    question: "Which of the following is the strongest indicator that a website is a reliable news source?",
    options: [
      "It has a professional-looking design and logo",
      "It has a large social media following",
      "It has a transparent editorial policy, named journalists, and correction history",
      "It has been around for more than 10 years"
    ],
    correct: 2,
    explanation: "Transparency is the hallmark of credible journalism — named authors, clear editorial standards, and a willingness to publicly correct errors. Design and age alone mean nothing."
  },
  {
    question: "A photo circulates showing a large protest crowd, claimed to be from yesterday. How would you verify it?",
    options: [
      "Check how many likes and shares it has",
      "Use reverse image search to check if the photo predates the claimed event",
      "See if the people in the crowd look like they're from that country",
      "Check if a celebrity has shared it"
    ],
    correct: 1,
    explanation: "Reverse image search (Google Images or TinEye) can reveal if a photo has been used in older, unrelated contexts — one of the most common misinformation tactics is recycling old images."
  },
  {
    question: "What is a 'filter bubble' and why is it dangerous?",
    options: [
      "A cybersecurity threat that filters malware from your browser",
      "When algorithms show you only content that reinforces your existing views, limiting exposure to opposing perspectives",
      "A feature that blocks misinformation on social media platforms",
      "When you only follow verified accounts on social media"
    ],
    correct: 1,
    explanation: "Filter bubbles created by recommendation algorithms mean you increasingly only see content that confirms your worldview, making you more vulnerable to misinformation within that bubble."
  },
  {
    question: "A friend shares a health remedy claiming doctors 'don't want you to know' about it. This phrase is a sign of what?",
    options: [
      "A legitimate suppressed medical discovery",
      "Conspiracy framing designed to make you distrust expert consensus",
      "Investigative journalism exposing corruption",
      "A peer-reviewed alternative medicine finding"
    ],
    correct: 1,
    explanation: "'They don't want you to know' is a classic conspiracy framing technique that pre-emptively discredits expert rebuttals, making the claim harder to disprove in the reader's mind."
  },
  {
    question: "Which scenario best demonstrates 'malinformation'?",
    options: [
      "A completely fabricated news story about a politician",
      "A satire article mistaken for real news",
      "A real, accurate photo of a politician shared with false context to damage their reputation",
      "An outdated statistic presented as current data"
    ],
    correct: 2,
    explanation: "Malinformation is real information used with malicious intent to cause harm. Unlike misinformation (false) or disinformation (deliberately false), malinformation is factually accurate but weaponised out of context."
  }
];

export default quizQuestions;