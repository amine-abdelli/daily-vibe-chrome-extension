const MoodEnum = {
  VERY_BAD: "veryBad",
  BAD: "bad",
  NEUTRAL: "neutral",
  GOOD: "good",
  VERY_GOOD: "veryGood"
}

// First section
const greetTitle = [
  "Hi :username!",
  "Welcome Back, :username!",
  "Hello, :username!",
  "Hey there, :username!",
  "Good Day, :username!",
  ":username, What's Up?",
  "Cheerful to see you, :username!",
  "Welcome to You, :username!",
  "Ready for a new start?",
  "Good to Have You Back, :username!",
  "Rise and Shine, :username!",
  "Glad You're Here, :username!",
  "How's It Going, :username?",
  "A Pleasure to See You, :username!",
  "Let's Make Today Great!",
  "Hope You're Well, :username!",
  "Good to See You, :username!",
  "Greetings, :username! How are you?",
  "How's Life Treating You?",
  "Hey :username, What's New?",
  "Hi :username, How's Everything?",
  "Another Day, Another Smile, :username!",
  ":username, Let's Check-In!",
]
const greetText = [
  "How are you today?",
  "How are you feeling this fine day?",
  "What's on your mind right now?",
  "Are you having a good day so far?",
  "Anything exciting happening today?",
  "How's your mood at this moment?",
  "What's making you smile today?",
  "Feeling good today?",
  "How's the energy today, high or low?",
  "What's one good thing about today?",
  "Ready to share your vibe today?",
  "What's been the best part of your day?",
  "Feeling up, down, or somewhere in between?",
  "What are you looking forward to today?",
  "How can we make today great?",
  "Any big plans for today?",
  "What's your main goal for today?",
  "Feeling relaxed or energized?",
  "How's the spirit today?",
  "What's the weather like in your world?",
  "Ready to tackle today's challenges?",
  "What's been a highlight this week?",
  "Feeling productive or in need of a break?",
  "How are you, really?",
  "What's one word to describe your day so far?",
  "Got any fun activities lined up today?",
  "What's something you're grateful for today?",
  "Feeling hopeful about anything in particular?",
  "How can today be a good day for you?",
  "What's a recent win you've had?",
  "Feeling the Monday vibes or weekend relaxation?",
]
// Second section
const moodTitle = [
  "What's your mood today?",
  "Capture Your Mood",
  "Reflect Your Day in Emoji",
  "Set Today's Tone",
  "Express Yourself",
  "Mood of the Day",
  "Your Day in an Emoji",
  "Today's Emotion Palette",
  "Emoji Your Mood",
  "Daily Mood Check-In",
  "How's Your Heart Today?",
  "Mood Tracker Time",
  "Select Today's Mood",
  "Feeling Emoji-nal?",
  "Convey Your Day",
  "What's Your Mood Theme?",
  "Emoji Mood Board",
  "Share Your Emotional Weather",
  "Mood Swing Selection",
  "Pick Today's Vibe",
  "Choose Your Mood Emoji",
  "Emotional Snapshot",
  "Today's Mood Indicator",
  "Emoji Reflection",
  "Select Your Sentiment",
  "Choose the Mood of the Moment",
  "Mood Ring via Emoji",
  "Current Mood?",
  "How's Today Faring?",
  "What's the Mood Today?",
]
const moodText = [
  "Pick the emoji that best describes your mood today",
  "Pick the emoji that best represents your mood.",
  "Which emoji matches your vibe today?",
  "Select the face that feels like yours today.",
  "Choose an emoji that mirrors your mood.",
  "What's your emotional flavor today?",
  "Which emoji aligns with your energy right now?",
  "What's your mood on the emoji scale?",
  "Find your mood in emoji form.",
  "Pick your current state of mind.",
  "What emoji embodies your day?",
  "Choose your now in emojis.",
  "Reflect your inner feelings with an emoji.",
  "Which emoji speaks to your soul today?",
  "Show us your mood in one click.",
  "How does your current mood look in emoji?",
  "Click the emoji that you vibe with.",
  "Match your mood to an emoji.",
  "Feeling happy, sad, or somewhere in the middle?",
  "What's the emoji for your day?",
  "Select the emoji that's got your mood.",
  "Capture your current feels with an emoji.",
  "Which emoji resonates with you today?",
  "Tap the emoji that fits your state of mind.",
  "Choose an emoji to express today's feels.",
  "Identify your mood with an emoji.",
  "Which emoji reflects your today's mood?",
  "Tell us about your day in emojis.",
  "Find the emoji that matches your mood.",
  "Express today's vibe with the right emoji.",
  "Pick an emoji that tells your mood story.",
]
// Third section
const moodInputTitle = [
  "Tell me about it",
  "Describe Your Mood",
  "Mood in Words",
  "Today's Mood Story",
  "Sum Up Your Mood",
  "Mood in a Sentence",
  "Caption Your Mood",
  "Your Day in a Line",
  "Brief Mood Overview",
  "Mood Synopsis",
  "A Line About Today",
  "Your Emotional Summary",
  "Mood Memo",
  "How's Today?",
  "In a Nutshell",
  "Today's Sentiment",
  "Mood in a Snapshot",
  "State Your Mood",
  "Today's Emotional Climate",
  "Summarize Your Current Feeling",
  "One-Liner Mood",
  "Concise Mood Check",
  "Short Mood Descriptor",
  "Express Today's Mood",
  "Single Sentence Emotion",
  "Mood Statement",
  "Capture Today's Essence",
  "Mood in Brief",
  "Spill Your Mood",
  "Mood Highlights",
  "Today's Feeling in a Phrase"
]

const moodInputText = {
  [MoodEnum.VERY_BAD]: [
    "I'm so sorry to hear that :(",
    "It looks like things are pretty tough right now. Let it all out.",
    "You're in a safe space here. Share what's on your mind.",
    "When the day feels heavy, words can lighten the load. Talk to me.",
    "It's okay to not be okay. What's been going on?",
    "Tough days are part of the journey. Want to talk about it?",
    "Let's turn the page on a rough day. What's been difficult?",
    "Sometimes sharing can ease the burden. Feel free to open up.",
    "The clouds are dark today. Care to share your storm?",
    "If your day's been hard, I'm here to listen. What's troubling you?",
    "A burden shared is a burden halved. What's weighing on you?",
    "Dark days just mean you're due for some sunshine. What's happening?",
    "It sounds like it's been a particularly rough day. Do you want to share more?",
    "Every storm passes. But while it's here, I'm listening.",
    "Feeling down? It's brave to admit it. What's been on your mind?",
    "Sometimes it's just about getting through the day. Want to talk about it?",
    "It's okay to feel this way. Want to get it off your chest?",
    "The tough days are a testament to your strength. What's been testing it today?",
    "It's hard when the day doesn't smile back. What went wrong?",
    "Sometimes the world feels heavy. What's weighing on you today?",
    "If the day feels too long, I'm here for a chat. What's been going on?",
    "It seems like a lot's been going on. Let's hear about it, no filters needed.",
    "When you're ready, I'm here to listen to all of it. What's been tough?",
    "Some days are a steep climb. What hills have you been scaling today?",
    "Feeling at the bottom? It's brave to recognize that. What's got you there?",
    "When the shadows grow long, it's time to talk. What's been darkening your day?",
    // -->
    "Sometimes the light seems dim. Want to talk about what's darkening your day?",
    "It's one of those days where comfort feels far. What's weighing on you?",
    "The world can feel heavy. Unload some of that weight here.",
    "It's a stormy day in the heart. Let's hear about the rain.",
    "When the skies are gray, your words here can be your umbrella.",
    "It's okay to feel down. This space is here for you to share.",
    "Some days are a struggle. If you want, tell me what's struggling within you.",
    "It feels like a mountain today. What's been your steep climb?",
    "Life can feel tough. Share your load; let's carry it together.",
    "In the depths, we find strength. What depths are you exploring today?",
  ],
  [MoodEnum.BAD]: [
    "Seems you're having a bad day",
    "Not the best day, huh? I'm here to listen.",
    "Some days are just like that. What's been bringing you down?",
    "We all have off days. What's on your mind?",
    "Life throws curves sometimes. Want to talk about it?",
    "If today's a bit rough, I'm all ears. What's happening?",
    "Seems like it's a challenging day. What's been tough?",
    "Looks like things could be better. Want to share?",
    "I'm here to help you unpack a bad day. What's going on?",
    "Everyone has bad days. Feel free to share yours.",
    "If today's been a struggle, talking about it might help. What's up?",
    "When days aren't quite right, a chat might help. What's up?",
    "It's one of those days, I see. What's made it feel off?",
    "Everyone has those 'meh' days. Care to share yours?",
    "A bit of a struggle today? Let's hear it.",
    "When the sunshine's mixed with a little rain, what does that look like for you?",
    "Not your day? Tell me more, I'm here.",
    "Feeling under the weather emotionally? What's clouding your skies?",
    "Today hit a bit differently? What's going on?",
    "Days can't all be winners, but they're all worth sharing. What's your story?",
    "If the day's been lacking, let's try to fill in the gaps. What happened?",
    "If today was a bit of a bummer, let's talk through it. What's bothering you?",
    "When the day doesn't spark joy, it might help to share. What's been off?",
    "Feeling a bit blue? It happens. Want to talk about it?",
    "If the day left something to be desired, I'm all ears. What wasn't quite right?",
    "It seems like the day could've been better. What didn't quite hit the mark?",
    // ->
    "Days like this can be a bit bumpy. What's tripped you up today?",
    "If the day isn't shining bright, share what's dimming the light.",
    "When the day's tune is off-key, tell me about the notes.",
    "It's not the best day, I gather. What's been missing?",
    "Sometimes, it's just a gray kind of day. What's clouding up your sky?",
    "When the day feels off balance, what's tipping the scales?",
    "It's one of those days, isn't it? Let's talk about what's not right.",
    "When the going gets tough, the tough get going. What's the tough part today?",
    "A little bit down? It's alright to share the low points too.",
    "The day could be better? Let's hear what could improve.",
  ],
  [MoodEnum.NEUTRAL]: [
    "An average day can still be shared. What's been happening?",
    "No strong feelings today? That's okay. Tell me more.",
    "So it's a neutral day. What's been neutral about it?",
    "Middle of the road today? What's keeping you there?",
    "Some days are just plain. Anything you want to talk about?",
    "Not great but not bad, I get it. What's your day been like?",
    "A calm sea today. What's been neither good nor bad?",
    "Neutral days have their own story. What's yours?",
    "So-so days happen. Want to dive into the details?",
    "It's a balanced day, it seems. What's balancing it out?",
    "In the middle today? That's a fine place to be. What's the mood like?",
    "Nothing too high or low? That's an even keel. What's keeping you there?",
    "Sometimes the middle ground is where we rest. What's been happening?",
    "A day without highs or lows is a day to reflect. What are your thoughts?",
    "A neutral day is still your day. Tell me about it.",
    "So today is steady-as-she-goes? What's that feel like?",
    "When the waters are calm, what do you see? Share with me.",
    "Some days are just steady. What's been keeping you centered?",
    "Today is one for the books, even if it's not flashy. What's the story?",
    "When emotions are even, what's going on beneath the surface?",
    "Neutral isn't negative. It's a canvas for tomorrow. What's on your canvas today?",
    "An even-keeled day can be a good change. What's made it balanced?",
    "Feeling neither here nor there? It's a place to start. What's on your mind?",
    "Today's been a baseline day. What's been the norm?",
    "When life's on an even plane, what do you notice around you?",
    // -->
    "No news is good news, but any news is welcome. What's your day like?",
    "It's a flatline kind of day. What's keeping it steady?",
    "It's a neutral zone today. What's keeping the peaks and valleys at bay?",
    "So it's an even-keeled day. Anything interesting in the calm waters?",
    "Balance is the theme today. What's keeping the scales even?",
    "A day of equilibrium, it seems. What's keeping things level?",
    "All's quiet on your front. What's the silence saying?",
    "In the middle of the road, there's much to see. What do you see today?",
    "Today's a gentle hum. What's the tone of your day?",
    "It's a plateau kind of day. What's on the horizon for you?",
  ],
  [MoodEnum.GOOD]: [
    "Feeling positive? Ride that wave and tell me about it.",
    "Good days are worth celebrating. What's been good?",
    "Looks like things are on the upswing. Share the highlights!",
    "A good day can be a great story. What's yours?",
    "When the vibe is just right, what's making it so?",
    "Things looking bright today? Illuminate me!",
    "Got a spring in your step? What's bringing you joy?",
    "On a good streak? Let's hear what's working.",
    "When the day shines, share the light! What's been great?",
    "Good vibes today? Pass them on and tell me more.",
    "Feeling up today? Let's keep that energy going. What's been good?",
    "A good day is a gift. What's been the best part?",
    "Seems like the day's been kind to you. How so?",
    "Today's been on the plus side. What are you happy about?",
    "Good days are gems. What's been shining for you?",
    "Feeling that upward trend? Tell me what's been lifting you up.",
    "Seems like a smile's been on your agenda today. Share the joy!",
    "When the day feels right, it's worth talking about. What went well?",
    "Positive vibes only today? What's sparked them?",
    "If your day's been bright, let's hear what colored it so.",
    "Seems like it's been a good one. What's made you feel positive?",
    "Good days should be celebrated. What's been making you feel good?",
    "You've got that good day glow. What's the cause?",
    "Riding a wave of positivity? Surf's up! Tell me about it.",
    "A good day is like a melody. What's the tune of your day?",
    // -->
    "Today's got a spark. What's igniting the flame?",
    "There's a spring in your step. What's sprouted this joy?",
    "A good day brews good tales. What's your story?",
    "When the day's been kind, let's hear what's been giving.",
    "It's a thumbs-up kind of day. What's got your approval?",
    "Good energy's flowing. Where's it coming from?",
    "There's light in your words. What's been brightening the day?",
    "It's a day with a positive plot twist. What's the twist?",
    "When the mood is up, the spirit soars. What's lifted you today?",
    "Today feels right. What's fitting so well?",

  ],
  [MoodEnum.VERY_GOOD]: [
    "Seems like you're on top of the world! Share the view from up there.",
    "Fantastic days should be shouted from the rooftops. What's making yours great?",
    "When life is great, we all want to hear. What's been amazing?",
    "A day like this comes once in a while. What's making it special?",
    "Incredible days are infectious. Spread the joy – what's happened?",
    "On cloud nine? Tell me what's put you there.",
    "Everything's coming up roses. What's the fragrance of your day?",
    "When the heart is full, words flow. What's filling yours today?",
    "A very good day is a treasure. What's been your golden moment?",
    "Life is shining bright for you today. What's the source of the sparkle?",
    "Wow, what a day you've had! What's made it spectacular?",
    "Seems like you're flying high! What's put wind beneath your wings?",
    "When life is this good, it's contagious. What's been going right?",
    "Today's a winner! What's been the highlight?",
    "Top of the world, huh? What's looking good from up there?",
    "Days don't get much better than this. What's the secret?",
    "You're all smiles! What's been fueling your happiness?",
    "Feeling like a champion today? What's your victory?",
    "When everything clicks, it's magic. What's been magical today?",
    "Today's been a high-five kind of day. Who or what deserves the credit?",
    "On a scale of good to great, you're off the charts! What's been happening?",
    "When the day exceeds expectations, it's worth sharing. Go ahead!",
    "Seems like joy's been your sidekick today. What's the story?",
    "You're in the groove! What's been groovy?",
    "Life's a breeze today, I see. What's been lifting you up?",
    // -->
    "It's a day to remember! What's making it unforgettable?",
    "Seems like you've caught a shooting star. What wishes are coming true?",
    "Life's serving up a treat. What's the flavor of your day?",
    "It's a top-tier kind of day! What's been the highlight?",
    "Joy's in the air! How are you celebrating this feeling?",
    "Today's a standout. What makes it shine so bright?",
    "Everything's clicking into place. What's the picture look like?",
    "You're surfing the high waves! What's the view from the crest?",
    "It's a high-five, fist-bump kind of day. What's the reason for the cheer?",
    "Life's a joyride today. What's the destination?",
  ],
}
const endSectionTitle = [
  "Thanks for sharing!",
  "Today's Reflection",
  "Closing Today's Chapter",
  "End of the Day Thoughts",
  "Wrapping Up",
  "See You Tomorrow",
  "Day's End Farewell",
  "Goodbye for Now",
  "Parting Thoughts",
  "Daily Wrap-Up",
  "Until Next Time",
  "Day in Review",
  "Today's Goodbye",
  "Signing Off",
  "Last Words for Today",
  "Farewell for Today",
  "Look Back at the Day",
  "Today's Closing Note",
  "Reflecting Back",
  "Almost Done",
  "Your Daily Closeout",
  "End of Day Sign-Off",
  "Day's Final Thoughts",
  "Saying Goodnight",
  "Today's Sign-Off",
  "Catch You Later",
  "Good Day's End",
  "The Final Say",
  "Day's Conclusion",
  "Leaving Today Behind",
  "Time to Say Goodbye"
]
const endSectionText = [
  "Keep it groovy, :username. Until next time!",
  "Stay stellar, :username. Catch you on the flip side!",
  "Out of sight, :username! Be awesome till we meet again.",
  "Keep shining, :username. Later, alligator!",
  "Ride the good vibes wave, :username. See ya!",
  "Chill out and cheer on, :username. Goodbye for now!",
  "Stay cool, stay kind, :username. Over and out!",
  "Keep on rockin', :username. Peace out!",
  "Just keep swimming, :username. Wave goodbye!",
  "That's a wrap, :username! Stay snazzy.",
  "Keep the spirit, :username. Adios, amigo!",
  "Catch the dream waves, :username. Goodnight!",
  "Stay gold, :username. Until our paths cross again.",
  "Keep the mood magical, :username. Ta-ta for now!",
  "Roll with the good times, :username. Fare thee well!",
  "Keep the positive energy going, :username. Bye for a bit!",
  "May your playlist be upbeat, :username. Hit pause till tomorrow.",
  "Stay on your sunshine grind, :username. Later skater!",
  "Keep blooming, :username. Sayonara!",
  "Ride the peace train, :username. Till next time!",
  "Keep your story going strong, :username. The end... for now.",
  "Adventure on, :username. Exit stage left!",
  "Keep making waves, :username. Hasta la vista!",
  "Stay epic, :username. Signing off!",
  "Dream big, :username. Outta here!",
  "Keep soaring, :username. Goodbye and good luck!",
  "Live large, :username. Catch you on the rebound!",
  "Keep it funky, :username. Exit, pursued by a bear!",
  "Stay you, stay true, :username. Bowing out!",
  "Rock on, :username. Dropping the mic!"
]

export {
  greetTitle,
  greetText,
  moodTitle,
  moodText,
  moodInputTitle,
  moodInputText,
  endSectionTitle,
  endSectionText,
}