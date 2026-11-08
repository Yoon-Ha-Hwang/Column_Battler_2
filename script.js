// This is the game intro displayed to the user
// Use cards to add points that can win columns, which earns score
const description = document.getElementById("description");

const intro = [
    "Let's go over the rules!",
    "Your goal is to try have more score than Intellisense (the bot).",
    "You add points to columns by playing a card into the column. Click on the column's button to place the card there.",
    "Make sure to have balance, though! You <strong>REALLY</strong> don't want to win a battle to lose the war.",
    "Now, lets go over the details.",
    "You and Intellisense have cards ranging from 1 to 10, one each.",
    "You and Intellisense will play one card per turn. You go first; then Intellisense plays her's.",
    "Each column is worth a different amount of score. A drawn column awards score to neither side.",
    "At the end of the game, every column will be assessed. Whoever earned more points in that column wins the score on the column.",
    "Here are some tips so you can beat her:",
    "1. Card-counting might be useful to know which card will Intellisense play last. Then plan your move, taking account of her last card.",
    "2. Giving up a column that is worth less to win a column that is worth more is a genuine strategy.",
    "3. The 1 card might look weak, but it forces a response or lets you claim score effectively.",
    "4. The 10 card can distract because it requires at least two cards to beat.",
    "5. NEVER underestimate Intellisense's erudition, even when you're winning. She's quite smart!",
    "Good luck, you got this!<br><small>(Click \"next\" to close)",
];
