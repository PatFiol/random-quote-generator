const localQuotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration. ",
    author: "Thomas Edison",
  },
  {
    text: "You can observe a lot just by watching. ",
    author: "Yogi Berra",
  },
  {
    text: "Difficulties increase the nearer we get to the goal. ",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Fate is in your hands and no one elses. ",
    author: "Byron Pulsifer",
  },
  {
    text: "Nothing happens unless first we dream. ",
    author: "Carl Sandburg",
  },
  {
    text: "Well begun is half done. ",
    author: "Aristotle",
  },
  {
    text: "Life is a learning experience, only if you learn. ",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress. ",
    author: "Margaret Sangster",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it. ",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday. ",
    author: null,
  },
  {
    text: "It's easier to see the mistakes on someone else's paper. ",
    author: null,
  },
  {
    text: "Every man dies. Not every man really lives. ",
    author: null,
  },
  {
    text: "To lead people walk behind them. ",
    author: "Lao Tzu",
  },
  {
    text: "Trouble is only opportunity in work clothes. ",
    author: "Henry J. Kaiser",
  },
  {
    text: "Ideas are the beginning points of all fortunes. ",
    author: "Napoleon Hill",
  },
  {
    text: "Trust yourself. You know more than you think you do. ",
    author: "Benjamin Spock",
  },
  {
    text: "Study the past, if you would divine the future. ",
    author: "Confucius",
  },
  {
    text: "From error to error one discovers the entire truth. ",
    author: "Sigmund Freud",
  },
  {
    text: "Well done is better than well said. ",
    author: "Benjamin Franklin",
  },
  {
    text: "Bite off more than you can chew, then chew it. ",
    author: "Ella Williams",
  },
  {
    text: "Work out your own salvation. Do not depend on others. ",
    author: "Buddha",
  },
  {
    text: "One today is worth two tomorrows. ",
    author: "Benjamin Franklin",
  },
  {
    text: "One fails forward toward success. ",
    author: "Charles Kettering",
  },
  {
    text: "From small beginnings come great things. ",
    author: null,
  },
  {
    text: "Learning is a treasure that will follow its owner everywhere. ",
    author: "Chinese proverb",
  },
  {
    text: "Be as you wish to seem. ",
    author: "Socrates",
  },
  {
    text: "Never mistake activity for achievement. ",
    author: "John Wooden",
  },
  {
    text: "What worries you masters you. ",
    author: "Haddon Robinson",
  },
  {
    text: "One faces the future with one's past. ",
    author: "Pearl Buck",
  },
  {
    text: "Goals are the fuel in the furnace of achievement. ",
    author: "Brian Tracy",
  },
  {
    text: "Who sows virtue reaps honour. ",
    author: "Leonardo da Vinci",
  },
  {
    text: "Talk doesn't cook rice. ",
    author: "Chinese proverb",
  },
  {
    text: "He is able who thinks he is able. ",
    author: "Buddha",
  },
  {
    text: "A goal without a plan is just a wish. ",
    author: "Larry Elder",
  },
  {
    text: "To succeed, we must first believe that we can. ",
    author: "Michael Korda",
  },
  {
    text: "Learn from yesterday, live for today, hope for tomorrow. ",
    author: "Albert Einstein",
  },
  {
    text: "A weed is no more than a flower in disguise. ",
    author: "James Lowell",
  },
  {
    text: "Do, or do not. There is no try. ",
    author: "Yoda",
  },
  {
    text: "All serious daring starts from within. ",
    author: "Harriet Beecher Stowe",
  },
  {
    text: "The best teacher is experience learned from failures. ",
    author: "Byron Pulsifer",
  },
  {
    text: "Think how hard physics would be if particles could think. ",
    author: "Murray Gell-Mann",
  },
  {
    text: "Don't wait. The time will never be just right. ",
    author: "Napoleon Hill",
  },
  {
    text: "Time is the wisest counsellor of all. ",
    author: "Pericles",
  },
  {
    text: "Wisdom begins in wonder. ",
    author: "Socrates",
  },
  {
    text: "Without courage, wisdom bears no fruit. ",
    author: "Baltasar Gracian",
  },
  {
    text: "What you fear is that which requires action to overcome. ",
    author: "Byron Pulsifer",
  },
  {
    text: "When performance exceeds ambition, the overlap is called success. ",
    author: "Cullen Hightower",
  },
  {
    text: "When deeds speak, words are nothing. ",
    author: "African proverb",
  },
  {
    text: "I never think of the future. It comes soon enough. ",
    author: "Albert Einstein",
  },
  {
    text: "Skill to do comes of doing. ",
    author: "Ralph Emerson",
  },
  {
    text: "Wisdom is the supreme part of happiness. ",
    author: "Sophocles",
  },
  {
    text: "I believe that every person is born with talent. ",
    author: "Maya Angelou",
  },
  {
    text: "Important principles may, and must, be inflexible. ",
    author: "Abraham Lincoln",
  },
  {
    text: "The undertaking of a new action brings new strength. ",
    author: "Richard Evans",
  },
  {
    text: "The years teach much which the days never know. ",
    author: "Ralph Emerson",
  },
  {
    text: "All know the way; few actually walk it. ",
    author: "Bodhidharma",
  },
  {
    text: "Great talent finds happiness in execution. ",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Faith in oneself is the best and safest course. ",
    author: "Michelangelo",
  },
  {
    text: "Courage is going from failure to failure without losing enthusiasm. ",
    author: "Winston Churchill",
  },
  {
    text: "The two most powerful warriors are patience and time. ",
    author: "Leo Tolstoy",
  },
  {
    text: "Anticipate the difficult by managing the easy. ",
    author: "Lao Tzu",
  },
  {
    text: "A short saying often contains much wisdom. ",
    author: "Sophocles",
  },
  {
    text: "It takes both sunshine and rain to make a rainbow. ",
    author: null,
  },
  {
    text: "A beautiful thing is never perfect. ",
    author: null,
  },
  {
    text: "Only do what your heart tells you. ",
    author: "Princess Diana",
  },
  {
    text: "Life is movement: we breathe, we eat, we walk, we move! ",
    author: "John Pierrakos",
  },
  {
    text: "No one can make you feel inferior without your consent. ",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Argue for your limitations, and sure enough they are yours. ",
    author: "Richard Bach",
  },
  {
    text: "Luck is what happens when preparation meets opportunity. ",
    author: "Seneca",
  },
  {
    text: "Victory belongs to the most persevering. ",
    author: "Napoleon Bonaparte",
  },
  {
    text: "In order to win, you must expect to win. ",
    author: "Richard Bach",
  },
  {
    text: "A goal is a dream with a deadline. ",
    author: "Napoleon Hill",
  },
  {
    text: "You can do it if you believe you can! ",
    author: "Napoleon Hill",
  },
  {
    text: "Set your goals high, and don't stop till you get there. ",
    author: "Bo Jackson",
  },
  {
    text: "Every new day is another chance to change your life. ",
    author: null,
  },
  {
    text: "Smile, breathe, and go slowly. ",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Nobody will believe in you unless you believe in yourself. ",
    author: "Liberace",
  },
  {
    text: "Do more than dream: work. ",
    author: "William Arthur Ward",
  },
  {
    text: "No man was ever wise by chance. ",
    author: "Seneca",
  },
  {
    text: "Some pursue happiness, others create it. ",
    author: null,
  },
  {
    text: "He that is giddy thinks the world turns round. ",
    author: "William Shakespeare",
  },
  {
    text: "Don't ruin the present with the ruined past. ",
    author: "Ellen Gilchrist",
  },
  {
    text: "Do something wonderful, people may imitate it. ",
    author: "Albert Schweitzer",
  },
  {
    text: "We do what we do because we believe. ",
    author: null,
  },
  {
    text: "Do one thing every day that scares you. ",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you cannot be silent be brilliant and thoughtful. ",
    author: "Byron Pulsifer",
  },
  {
    text: "Who looks outside, dreams; who looks inside, awakes. ",
    author: "Carl Jung",
  },
  {
    text: "What we think, we become. ",
    author: "Buddha",
  },
  {
    text: "The shortest answer is doing. ",
    author: "Lord Herbert",
  },
  {
    text: "All our knowledge has its origins in our perceptions. ",
    author: "Leonardo da Vinci",
  },
  {
    text: "The harder you fall, the higher you bounce. ",
    author: null,
  },
  {
    text: "Trusting our intuition often saves us from disaster. ",
    author: "Anne Wilson Schaef",
  },
  {
    text: "Light tomorrow with today! ",
    author: "Elizabeth Browning",
  },
  {
    text: "Silence is a fence around wisdom. ",
    author: "German proverb",
  },
  {
    text: "Society develops wit, but its contemplation alone forms genius. ",
    author: "Madame de Stael",
  },
  {
    text: "The simplest things are often the truest. ",
    author: "Richard Bach",
  },
  {
    text: "Everyone smiles in the same language. ",
    author: null,
  },
  {
    text: "All great achievements require time. ",
    author: "David Eddings",
  },
  {
    text: "Wisdom is knowing what to do next; Skill is knowing how to do it, and Virtue is doing it. ",
    author: "David Jordan",
  },
  {
    text: "No day in which you learn something is a complete loss. ",
    author: "Maya Angelou",
  },
  {
    text: "Yesterday I dared to struggle. Today I dare to win. ",
    author: "Bernadette Devlin",
  },
  {
    text: "No alibi will save you from accepting the responsibility. ",
    author: "Napoleon Hill",
  },
  {
    text: "If you can dream it, you can do it. ",
    author: "Walt Disney",
  },
  {
    text: "It is better to travel well than to arrive. ",
    author: "Buddha",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage. ",
    author: "Anais Nin",
  },
  {
    text: "You have to believe in yourself. ",
    author: "Sun Tzu",
  },
  {
    text: "Our intention creates our reality. ",
    author: "Wayne Dyer",
  },
  {
    text: "Character develops itself in the stream of life. ",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "From little acorns mighty oaks do grow. ",
    author: "American proverb",
  },
  {
    text: "You can't stop the waves, but you can learn to surf. ",
    author: "Jon Kabat-Zinn",
  },
  {
    text: "Reality does not conform to the ideal, but confirms it. ",
    author: "Gustave Flaubert",
  },
  {
    text: "A really great talent finds its happiness in execution. ",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Reality leaves a lot to the imagination. ",
    author: "John Lennon",
  },
  {
    text: "Growth itself contains the germ of happiness. ",
    author: "Pearl Buck",
  },
  {
    text: "You can do what's reasonable or you can decide what's possible. ",
    author: null,
  },
];
