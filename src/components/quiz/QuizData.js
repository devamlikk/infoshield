const quizQuestions = [
  {
    question: "A news article cites 'several experts agree' but doesn't name any of them. What is this?",
    options: [
      "Standard anonymous sourcing used in legitimate journalism",
      "A vague authority claim, a common misinformation tactic",
      "Solid evidence that the claim has been peer reviewed",
      "Normal practice when experts request confidentiality"
    ],
    correct: 1,
    explanation: "Unnamed expert citations are a red flag. Credible journalism names its sources so readers can verify their credentials independently."
  },
  {
    question: "A viral post links to a 4-year-old article claiming a politician 'admitted' something. What is the biggest red flag?",
    options: [
      "The word admitted is slightly dramatic language",
      "Mainstream outlets reported it so it is probably fine",
      "The article is old and likely being reshared out of context",
      "Politicians are generally untrustworthy sources anyway"
    ],
    correct: 2,
    explanation: "Recycled old stories are one of the most common misinformation tactics. Always check the date and whether the story is still relevant to current events."
  },
  {
    question: "Which headline is most likely to be misleading?",
    options: [
      "Researchers find moderate links between diet and health outcomes",
      "New study links processed food to higher cancer risk in some groups",
      "Scientists say this common food is literally killing you",
      "Health study results vary across different demographic groups"
    ],
    correct: 2,
    explanation: "Words like literally and absolute claims with no nuance are hallmarks of sensationalist misinformation. Credible reporting uses measured and specific language."
  },
  {
    question: "You read an article that perfectly confirms your existing political beliefs. What is the best response?",
    options: [
      "Trust it more since it matches your lived experience",
      "Share it only if your close friends also agree with it",
      "Be more skeptical since confirmation bias reduces critical thinking",
      "Share it right away since it confirms what you already know"
    ],
    correct: 2,
    explanation: "Confirmation bias is one of the primary psychological mechanisms misinformation exploits. Content that feels satisfying to believe deserves extra scrutiny, not less."
  },
  {
    question: "A fact checking site rates a claim as Mostly False. What does this typically mean?",
    options: [
      "The fact checker has a political bias against the claim",
      "The claim contains truth but is framed in a misleading way",
      "The entire claim was fabricated from scratch",
      "The claim has not been fully investigated yet"
    ],
    correct: 1,
    explanation: "Most misinformation distorts or exaggerates real facts rather than fabricating them entirely. Mostly False typically means the framing is deeply misleading even if some element is accurate."
  },
  {
    question: "Which is the strongest indicator that a news website is reliable?",
    options: [
      "It has a large and active social media following",
      "It has a professional looking design and recognisable logo",
      "It has named journalists, editorial policies, and a corrections history",
      "It has been publishing content for more than ten years"
    ],
    correct: 2,
    explanation: "Transparency is the hallmark of credible journalism. Named authors, clear editorial standards, and public corrections matter far more than design or age."
  },
  {
    question: "A photo circulates showing a large protest claimed to be from yesterday. How do you verify it?",
    options: [
      "Check whether a well known celebrity has shared the photo",
      "Use reverse image search to check if the photo is actually older",
      "Count the likes and shares to gauge whether it seems credible",
      "See if the crowd looks like it could be from that country"
    ],
    correct: 1,
    explanation: "Reverse image search using Google Images or TinEye can reveal if a photo has been used in older unrelated contexts, one of the most common misinformation tactics."
  },
  {
    question: "What is a filter bubble and why does it matter?",
    options: [
      "A cybersecurity tool that filters malware from your browser",
      "A platform feature that automatically blocks misinformation",
      "When algorithms only show content that reinforces your existing views",
      "When you choose to only follow verified accounts online"
    ],
    correct: 2,
    explanation: "Filter bubbles created by recommendation algorithms mean you increasingly only see content confirming your worldview, making you more vulnerable to misinformation within that bubble."
  },
  {
    question: "A friend shares a health remedy saying doctors do not want you to know about it. This phrase is designed to do what?",
    options: [
      "Signal that the remedy has been through independent testing",
      "Indicate the claim comes from investigative journalism",
      "Pre-emptively discredit expert rebuttals before you hear them",
      "Suggest the information comes from a suppressed government study"
    ],
    correct: 2,
    explanation: "They do not want you to know is a conspiracy framing technique that makes the claim harder to disprove by pre-emptively casting doubt on any expert who might refute it."
  },
  {
    question: "Which scenario best describes malinformation?",
    options: [
      "A satire article that gets mistaken for a real news story",
      "A completely fabricated story about a public figure",
      "A real accurate photo shared with false context to cause harm",
      "An outdated statistic presented as if it were current data"
    ],
    correct: 2,
    explanation: "Malinformation is factually accurate information used with malicious intent. Unlike misinformation which is false, malinformation weaponises real facts by stripping them of context."
  }
];

export default quizQuestions;