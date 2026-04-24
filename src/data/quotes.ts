export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
}

export const CATEGORIES = [
  { id: 'exam_focus', title: 'Exam & Study Focus', icon: 'Book' },
  { id: 'morning_mastery', title: 'Morning Mastery', icon: 'Sun' },
  { id: 'deep_work', title: 'Deep Work & Flow', icon: 'Zap' },
  { id: 'discipline', title: 'Grit & Discipline', icon: 'Flame' },
  { id: 'money_habits', title: 'Financial Intelligence', icon: 'Briefcase' },
  { id: 'mental_toughness', title: 'Mental Toughness', icon: 'Shield' },
  { id: 'time_management', title: 'Time Management', icon: 'Clock' },
  { id: 'handling_failure', title: 'Learning from Failure', icon: 'RefreshCw' },
  { id: 'goal_setting', title: 'Goal Setting', icon: 'Target' },
  { id: 'consistency', title: 'Consistency', icon: 'Repeat' },
  { id: 'self_respect', title: 'Self-Respect', icon: 'User' },
  { id: 'digital_detox', title: 'Digital Detox', icon: 'Smartphone' },
  { id: 'career_growth', title: 'Career Clarity', icon: 'TrendingUp' },
  { id: 'emotional_intel', title: 'Emotional IQ', icon: 'Heart' },
  { id: 'creativity', title: 'Creativity', icon: 'PenTool' },
  { id: 'habit_building', title: 'Habit Building', icon: 'PlusCircle' },
  { id: 'resilience', title: 'Resilience', icon: 'Anchor' },
  { id: 'social_skills', title: 'Networking & People', icon: 'Users' },
  { id: 'stoic_wisdom', title: 'Practical Stoicism', icon: 'Mountain' },
  { id: 'health_energy', title: 'Energy & Health', icon: 'Activity' },
  { id: 'mindset', title: 'Growth Mindset', icon: 'Brain' },
  { id: 'life_balance', title: 'Balance & Joy', icon: 'Leaf' },
  { id: 'leadership', title: 'Leadership & Impact', icon: 'Users' },
  { id: 'conflict', title: 'Conflict Resolution', icon: 'MessageSquare' },
  { id: 'speaking', title: 'Public Speaking', icon: 'Mic' },
  { id: 'coding', title: 'Coding & Logic', icon: 'Code' },
  { id: 'writing', title: 'Writing & Journaling', icon: 'Edit3' },
  { id: 'art', title: 'Artistic Expression', icon: 'Palette' },
  { id: 'nature', title: 'Sustainability', icon: 'Globe' },
  { id: 'self_discovery', title: 'Self-Discovery', icon: 'Search' },
  { id: 'procrastination', title: 'Beating Procrastination', icon: 'Timer' },
  { id: 'relationships', title: 'Healthy Relationships', icon: 'Smile' },
  { id: 'critical_thinking', title: 'Critical Thinking', icon: 'Cpu' },
  { id: 'practical', title: 'Life Skills', icon: 'Wrench' },
  { id: 'eating', title: 'Mindful Eating', icon: 'Coffee' },
  { id: 'fitness', title: 'Physical Strength', icon: 'Dumbbell' },
  { id: 'sleep', title: 'Rest & Recovery', icon: 'Bed' },
  { id: 'risk', title: 'Taking Risks', icon: 'Compass' },
  { id: 'patience', title: 'Patience & Timing', icon: 'Hourglass' },
  { id: 'service', title: 'Legacy & Service', icon: 'Gift' },
];

export const QUOTES: Quote[] = [
  // Exam & Study Focus
  { id: 'ef1', text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Sanntanu Halder", category: "exam_focus" },
  { id: 'ef2', text: "Focus entirely on the task at hand. The sun's rays do not burn until brought to a focus.", author: "Alexander Graham Bell", category: "exam_focus" },
  { id: 'ef3', text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "exam_focus" },
  { id: 'ef4', text: "Study while others are sleeping; work while others are loafing.", author: "William Arthur Ward", category: "exam_focus" },
  { id: 'ef5', text: "Don’t study to be an expert, study to be a master.", author: "Sanntanu Halder", category: "exam_focus" },
  { id: 'ef6', text: "Your degree is just a piece of paper, your education is seen in your behavior.", author: "Sanntanu Halder", category: "exam_focus" },
  { id: 'ef7', text: "The expert in anything was once a beginner.", author: "Helen Hayes", category: "exam_focus" },
  { id: 'ef8', text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier", category: "exam_focus" },
  { id: 'ef9', text: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine", category: "exam_focus" },
  { id: 'ef10', text: "Quality is not an act, it is a habit.", author: "Aristotle", category: "exam_focus" },

  // Morning Mastery
  { id: 'mm1', text: "Own the morning, elevate your life.", author: "Robin Sharma", category: "morning_mastery" },
  { id: 'mm2', text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "morning_mastery" },
  { id: 'mm3', text: "Your morning sets the tone for your day. Don't waste it.", author: "Sanntanu Halder", category: "morning_mastery" },
  { id: 'mm4', text: "Lose an hour in the morning, and you will be all day hunting for it.", author: "Richard Whately", category: "morning_mastery" },
  { id: 'mm5', text: "If you want to change the world, start by making your bed.", author: "Admiral Wm. McRaven", category: "morning_mastery" },
  { id: 'mm6', text: "The breeze at dawn has secrets to tell you. Don't go back to sleep.", author: "Rumi", category: "morning_mastery" },
  { id: 'mm7', text: "Morning is an important time of day, because how you spend your morning often tells you what kind of day you are going to have.", author: "Lemony Snicket", category: "morning_mastery" },

  // Grit & Discipline
  { id: 'dis1', text: "Discipline is doing what needs to be done, even if you don't feel like doing it.", author: "Sanntanu Halder", category: "discipline" },
  { id: 'dis2', text: "Motivation gets you going, but discipline keeps you growing.", author: "John C. Maxwell", category: "discipline" },
  { id: 'dis3', text: "Freedom is found through discipline.", author: "Jocko Willink", category: "discipline" },
  { id: 'dis4', text: "The pain of discipline is far less than the pain of regret.", author: "Jim Rohn", category: "discipline" },
  { id: 'dis5', text: "Grit is passion and perseverance for very long-term goals.", author: "Angela Duckworth", category: "discipline" },
  { id: 'dis6', text: "The first and greatest victory is to conquer yourself.", author: "Plato", category: "discipline" },
  { id: 'dis7', text: "Discipline is the soul of an army.", author: "George Washington", category: "discipline" },
  { id: 'dis8', text: "He who cannot obey himself will be commanded.", author: "Friedrich Nietzsche", category: "discipline" },

  // Deep Work & Flow
  { id: 'dw1', text: "Deep work is the superpower of the 21st century.", author: "Cal Newport", category: "deep_work" },
  { id: 'dw2', text: "Focus is the new IQ.", author: "Sanntanu Halder", category: "deep_work" },
  { id: 'dw3', text: "Concentrate all your thoughts upon the work at hand.", author: "Alexander Graham Bell", category: "deep_work" },
  { id: 'dw4', text: "A wealth of information creates a poverty of attention.", author: "Herbert Simon", category: "deep_work" },
  { id: 'dw5', text: "Attention is the most valuable commodity of the information age.", author: "Sanntanu Halder", category: "deep_work" },
  { id: 'dw6', text: "One of the best ways to build a deep work habit is to have a set routine.", author: "Cal Newport", category: "deep_work" },

  // Financial Intelligence
  { id: 'mh1', text: "Do not save what is left after spending, but spend what is left after saving.", author: "Warren Buffett", category: "money_habits" },
  { id: 'mh2', text: "Investment in knowledge pays the best interest.", author: "Benjamin Franklin", category: "money_habits" },
  { id: 'mh3', text: "A budget is telling your money where to go instead of wondering where it went.", author: "Dave Ramsey", category: "money_habits" },
  { id: 'mh4', text: "Money follows passion, not the other way around.", author: "Sanntanu Halder", category: "money_habits" },
  { id: 'mh5', text: "The goal is to be wealthy, not to look wealthy.", author: "Sanntanu Halder", category: "money_habits" },
  { id: 'mh6', text: "Beware of little expenses; a small leak will sink a great ship.", author: "Benjamin Franklin", category: "money_habits" },

  // Mental Toughness
  { id: 'mt1', text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", category: "mental_toughness" },
  { id: 'mt2', text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", category: "mental_toughness" },
  { id: 'mt3', text: "Confidence comes from discipline and training.", author: "Robert Kiyosaki", category: "mental_toughness" },
  { id: 'mt4', text: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", author: "John Milton", category: "mental_toughness" },
  { id: 'mt5', text: "Success is the ability to go from failure to failure without losing your enthusiasm.", author: "Winston Churchill", category: "mental_toughness" },

  // Time Management
  { id: 'tm1', text: "The key is not in spending time, but in investing it.", author: "Stephen Covey", category: "time_management" },
  { id: 'tm2', text: "Until we can manage time, we can manage nothing else.", author: "Peter Drucker", category: "time_management" },
  { id: 'tm3', text: "Time is what we want most, but what we use worst.", author: "William Penn", category: "time_management" },
  { id: 'tm4', text: "The best way to manage your time is to manage your energy.", author: "Sanntanu Halder", category: "time_management" },
  { id: 'tm5', text: "Either you run the day, or the day runs you.", author: "Jim Rohn", category: "time_management" },

  // Learning from Failure
  { id: 'hf1', text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford", category: "handling_failure" },
  { id: 'hf2', text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius", category: "handling_failure" },
  { id: 'hf3', text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "handling_failure" },

  // Consistency
  { id: 'cons1', text: "Consistency is what transforms average into excellence.", author: "Sanntanu Halder", category: "consistency" },
  { id: 'cons2', text: "It's not what we do once in a while that shapes our lives. It's what we do consistently.", author: "Tony Robbins", category: "consistency" },
  { id: 'cons3', text: "Consistency is better than perfection.", author: "Sanntanu Halder", category: "consistency" },

  // Growth Mindset
  { id: 'ms1', text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", category: "mindset" },
  { id: 'ms2', text: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.", author: "Sanntanu Halder", category: "mindset" },
  { id: 'ms3', text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale", category: "mindset" },

  // Healthy Relationships
  { id: 'rel1', text: "Assumptions are the termites of relationships.", author: "Henry Winkler", category: "relationships" },
  { id: 'rel2', text: "To find yourself, think for yourself.", author: "Socrates", category: "relationships" },

  // Coding & Logic
  { id: 'code1', text: "First, solve the problem. Then, write the code.", author: "John Johnson", category: "coding" },
  { id: 'code2', text: "The most damaging phrase in the language is: 'It’s always been done this way.'", author: "Grace Hopper", category: "coding" },
  { id: 'code3', text: "Code never lies, comments sometimes do.", author: "Ron Jeffries", category: "coding" },

  // Artistic Expression
  { id: 'art1', text: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "Pablo Picasso", category: "art" },
  { id: 'art2', text: "Art washes away from the soul the dust of everyday life.", author: "Pablo Picasso", category: "art" },

  // Practical Stoicism
  { id: 'sw1', text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius", category: "stoic_wisdom" },
  { id: 'sw2', text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius", category: "stoic_wisdom" },

  // Legacy & Service
  { id: 'ser1', text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi", category: "service" },
  { id: 'ser2', text: "Service to others is the rent you pay for your room here on earth.", author: "Muhammad Ali", category: "service" },

  // Self-Respect
  { id: 'sr1', text: "Respect yourself and others will respect you.", author: "Confucius", category: "self_respect" },
  { id: 'sr2', text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha", category: "self_respect" },

  // Digital Detox
  { id: 'dd1', text: "Disconnect to reconnect.", author: "Sanntanu Halder", category: "digital_detox" },
  { id: 'dd2', text: "Almost everything will work again if you unplug it for a few minutes, including you.", author: "Anne Lamott", category: "digital_detox" },

  // Emotional IQ
  { id: 'ei1', text: "Whatever is begun in anger, ends in shame.", author: "Benjamin Franklin", category: "emotional_intel" },
  { id: 'ei2', text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Wayne Dyer", category: "emotional_intel" },

  // Creativity
  { id: 'cre1', text: "Creativity is intelligence having fun.", author: "Albert Einstein", category: "creativity" },
  { id: 'cre2', text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou", category: "creativity" },

  // Habit Building
  { id: 'hb1', text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun", category: "habit_building" },
  { id: 'hb2', text: "Successful people are simply those with successful habits.", author: "Brian Tracy", category: "habit_building" },

  // Social Skills
  { id: 'soc1', text: "To be interesting, be interested.", author: "Dale Carnegie", category: "social_skills" },
  { id: 'soc2', text: "The most important thing in communication is hearing what isn't said.", author: "Peter Drucker", category: "social_skills" },

  // Life Balance
  { id: 'lb1', text: "Balance is not something you find, it's something you create.", author: "Jana Kingsford", category: "life_balance" },
  { id: 'lb2', text: "Never get so busy making a living that you forget to make a life.", author: "Dolly Parton", category: "life_balance" },

  // Conflict Resolution
  { id: 'cr1', text: "An eye for an eye will only make the whole world blind.", author: "Mahatma Gandhi", category: "conflict" },
  { id: 'cr2', text: "Whenever you're in conflict with someone, there is one factor that can make the difference between damaging your relationship and deepening it. That factor is attitude.", author: "William James", category: "conflict" },

  // Public Speaking
  { id: 'ps1', text: "All the great speakers were bad speakers at first.", author: "Ralph Waldo Emerson", category: "speaking" },
  { id: 'ps2', text: "Speech is silver, silence is gold.", author: "Proverb", category: "speaking" },

  // Self-Discovery
  { id: 'sd1', text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", category: "self_discovery" },
  { id: 'sd2', text: "Know thyself.", author: "Socrates", category: "self_discovery" },

  // Procrastination
  { id: 'pro1', text: "Procrastination is the thief of time.", author: "Edward Young", category: "procrastination" },
  { id: 'pro2', text: "You may delay, but time will not.", author: "Benjamin Franklin", category: "procrastination" },

  // Critical Thinking
  { id: 'ct1', text: "The mind is not a vessel to be filled, but a fire to be kindled.", author: "Plutarch", category: "critical_thinking" },
  { id: 'ct2', text: "Education is not the learning of facts, but the training of the mind to think.", author: "Albert Einstein", category: "critical_thinking" },

  // Life Skills
  { id: 'ls1', text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King", category: "practical" },
  { id: 'ls2', text: "Adaptability is about the powerful difference between adapting to cope and adapting to win.", author: "Max McKeown", category: "practical" },

  // Mindful Eating
  { id: 'eat1', text: "Let food be thy medicine and medicine be thy food.", author: "Hippocrates", category: "eating" },
  { id: 'eat2', text: "Every time you eat or drink, you are either feeding disease or fighting it.", author: "Heather Morgan", category: "eating" },

  // Rest & Recovery
  { id: 'sl1', text: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.", author: "John Lubbock", category: "sleep" },
  { id: 'sl2', text: "A good laugh and a long sleep are the best cures in the doctor's book.", author: "Irish Proverb", category: "sleep" },

  // Taking Risks
  { id: 'risk1', text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg", category: "risk" },
  { id: 'risk2', text: "You can't cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore", category: "risk" },

  // Patience
  { id: 'pat1', text: "Patience is bitter, but its fruit is sweet.", author: "Jean-Jacques Rousseau", category: "patience" },
  { id: 'pat2', text: "He that can have patience can have what he will.", author: "Benjamin Franklin", category: "patience" },

  // Goal Setting
  { id: 'gs1', text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry", category: "goal_setting" },
  { id: 'gs2', text: "Set your goals high, and don't stop till you get there.", author: "Bo Jackson", category: "goal_setting" },
  { id: 'gs3', text: "The trouble with not having a goal is that you can spend your life running up and down the field and never score.", author: "Bill Copeland", category: "goal_setting" },
  { id: 'gs4', text: "Dreams are goals with deadlines.", author: "Diana Scharf", category: "goal_setting" },

  // Career Growth
  { id: 'cg1', text: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "career_growth" },
  { id: 'cg2', text: "Choose a job you love, and you will never have to work a day in your life.", author: "Confucius", category: "career_growth" },

  // Resilience
  { id: 'res1', text: "The human capacity for burden is like bamboo- far more flexible than you'd ever believe at first glance.", author: "Jodi Picoult", category: "resilience" },
  { id: 'res2', text: "Strength does not come from winning. Your struggles develop your strengths.", author: "Arnold Schwarzenegger", category: "resilience" },

  // More Discipline
  { id: 'dis9', text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn", category: "discipline" },
  { id: 'dis10', text: "Your level of success is determined by your level of discipline and perseverance.", author: "Sanntanu Halder", category: "discipline" },

  // More Mental Toughness
  { id: 'mt6', text: "Do not pray for an easy life, pray for the strength to endure a difficult one.", author: "Bruce Lee", category: "mental_toughness" },
  { id: 'mt7', text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", category: "mental_toughness" },
];



