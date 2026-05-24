// src/data/forum/myReplies.js

// Static demo data for "My Replies" page.
// Later this will come from the backend using the logged-in user id.

export const MY_REPLIES = [
  {
    id: 1,

    // Thread context
    threadId: 101,
    threadSlug: "after-class-10-science-or-commerce",
    threadTitle: "After Class 10, should I choose Science or Commerce?",
    threadCategoryLabel: "After Class 10 • Career Choice",
    threadHasCounselorReply: true,
    threadTotalReplies: 8,

    // Who asked the original question
    questionAuthorName: "Riya",
    questionAuthorType: "student", // "student" | "parent" | "counselor"
    questionRelativeTime: "3 days ago",

    // Your reply
    replyId: "ans-101-1", // optional: can map to an answer/reply in ANSWERS_BY_SLUG
    replyContent:
      "If you enjoy Mathematics and Science and are open to preparing for exams like JEE/NEET later, Science keeps more pathways open. If you’re more interested in business, accounts and entrepreneurship, Commerce is a strong option. You should also look at your Class 10 marks and how much you actually enjoy the subjects, not only what others are choosing.",
    replyRelativeTime: "2 days ago",
    replyUpvotes: 4,
    replyIsReported: false,
    replyIsDeleted: false,

    // Flags for filters
    isOnMyQuestion: false, // this reply is on someone else’s question
    isMarkedHelpful: true, // user’s reply marked as helpful by others
  },

  {
    id: 2,
    threadId: 102,
    threadSlug: "diploma-vs-iti-after-class-10",
    threadTitle: "After Class 10, is Diploma better than ITI?",
    threadCategoryLabel: "After Class 10 • Vocational & Diploma",
    threadHasCounselorReply: false,
    threadTotalReplies: 5,

    questionAuthorName: "Amit",
    questionAuthorType: "parent",
    questionRelativeTime: "1 week ago",

    replyId: "ans-102-3",
    replyContent:
      "Diploma is usually 3 years and is treated closer to Class 12 plus a technical stream, so it can give you direct entry into 2nd year of B.Tech in many cases. ITI is shorter (1–2 years) and very skill-focused. If your child wants to work quickly in a specific trade, ITI is great. If they want long-term growth and further study options, Diploma is usually better.",
    replyRelativeTime: "5 days ago",
    replyUpvotes: 7,
    replyIsReported: false,
    replyIsDeleted: false,

    isOnMyQuestion: false,
    isMarkedHelpful: true,
  },

  {
    id: 3,
    threadId: 103,
    threadSlug: "how-to-prepare-for-neet-from-class-11",
    threadTitle: "How should I start preparing for NEET from Class 11?",
    threadCategoryLabel: "Entrance Exams • NEET",
    threadHasCounselorReply: true,
    threadTotalReplies: 12,

    questionAuthorName: "You", // you asked this question
    questionAuthorType: "student",
    questionRelativeTime: "10 days ago",

    replyId: "ans-103-4",
    replyContent:
      "Focus on building strong NCERT fundamentals in Physics, Chemistry and Biology first. Don’t rush to too many coaching modules in the beginning. Make a simple weekly plan: 2–3 hours NEET prep on school days and more on weekends. Start giving topic-wise tests early so that you get used to MCQ patterns and negative marking.",
    replyRelativeTime: "1 week ago",
    replyUpvotes: 2,
    replyIsReported: false,
    replyIsDeleted: false,

    isOnMyQuestion: true, // this reply is on your own question
    isMarkedHelpful: false,
  },

  {
    id: 4,
    threadId: 104,
    threadSlug: "ba-vs-bsc-which-is-better",
    threadTitle: "Is B.A. worse than B.Sc. in terms of career?",
    threadCategoryLabel: "After Class 12 • Undergraduate Courses",
    threadHasCounselorReply: false,
    threadTotalReplies: 3,

    questionAuthorName: "Sana",
    questionAuthorType: "student",
    questionRelativeTime: "4 days ago",

    replyId: "ans-104-2",
    replyContent:
      "B.A. is not worse than B.Sc. — they are different. B.Sc. is more suitable if you want to stay in pure sciences, research, or some technical roles. B.A. can be very powerful for careers in civil services, media, law, social sector, management, etc. What matters is: do you choose the right combination of subjects and build skills + internships during your degree.",
    replyRelativeTime: "3 days ago",
    replyUpvotes: 0,
    replyIsReported: false,
    replyIsDeleted: false,

    isOnMyQuestion: false,
    isMarkedHelpful: false,
  },

  {
    id: 5,
    threadId: 105,
    threadSlug: "scholarships-for-minority-students-after-12",
    threadTitle: "What scholarships are available for minority students after Class 12?",
    threadCategoryLabel: "Scholarships • After Class 12",
    threadHasCounselorReply: true,
    threadTotalReplies: 9,

    questionAuthorName: "Imran",
    questionAuthorType: "student",
    questionRelativeTime: "2 weeks ago",

    replyId: "ans-105-5",
    replyContent:
      "You should check schemes like Post-Matric Scholarship, Merit-cum-Means, and state-level minority scholarships. Also look at specific scholarships offered by private foundations for engineering, medical, and professional courses. Make a simple list of deadlines month-wise so you don’t miss forms. Our Scholarships section on this portal also has filters for ‘minority’ and ‘after Class 12’.",
    replyRelativeTime: "6 days ago",
    replyUpvotes: 5,
    replyIsReported: false,
    replyIsDeleted: false,

    isOnMyQuestion: false,
    isMarkedHelpful: true,
  },
];
