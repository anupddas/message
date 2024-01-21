// Potential text box for inputing target text
const text =
  "100 reasons I Love You <3 ...  You always make me smile, even on the gloomiest days. Your kindness is as boundless as the ocean. The way you listen to me makes me feel truly heard. Your laughter is infectious and brightens up any room. The warmth of your hugs feels like a cozy blanket on a chilly day. Your support is a pillar that holds me up in times of need. I appreciate the little things you do, like making me a cup of tea without asking. Your patience knows no bounds, especially when I'm being difficult. The twinkle in your eyes when you talk about something you love is captivating. Your generosity knows no limits, and you always give with an open heart. You make me believe in the beauty of love with your genuine affection. I love the way you make decisions with careful consideration. Your humility is a rare and admirable quality. The way you make me feel important is beyond words. You bring out the best in me and inspire me to be a better person. The sound of your voice is like a soothing melody that lingers in my mind. Your creativity knows no bounds, and it's a constant source of inspiration. You have an uncanny ability to find joy in the simplest of things. The comfort of your presence is like a reassuring embrace. Your resilience in the face of challenges is awe-inspiring. I cherish the memories we've created together, each one a precious gem. Your integrity is unwavering, and it's a quality I deeply respect. You make me feel cherished and valued every single day. The way you express your emotions is genuine and heartwarming. Your sense of humor never fails to bring laughter into my life. I love how you make me feel completely at ease in your company. Your thoughtfulness in remembering the little details makes me feel seen. The passion you bring to everything you do is contagious. I am grateful for the shared dreams and aspirations we build together. Your willingness to try new things adds excitement to our journey. The way you handle tough situations with grace is commendable. Your dedication to personal growth is inspiring and encourages me to evolve. I love the way your presence lights up a room, making it feel warmer. You are my confidant, and I appreciate the trust we share. Your unwavering loyalty is a source of strength in our relationship. The feeling of safety and security you provide is priceless. Your thoughtfulness in anticipating my needs speaks volumes. You bring a sense of calm to chaotic moments with your poise. Your optimism is like a beacon of hope in challenging times. I admire the way you handle success with humility and grace. Your adventurous spirit adds a thrill to the ordinary moments. The way you make me feel cherished is irreplaceable. I am grateful for the shared laughter that fills our days. Your commitment to our relationship is evident in every action. You make me believe in the beauty of love with your genuine affection. Your honesty is refreshing, creating a foundation of trust between us. I love the way you embrace both my strengths and weaknesses. Your encouragement empowers me to pursue my dreams fearlessly. The way you make compromises without hesitation is truly selfless. Your loyalty and dedication make you a true and reliable partner. Your ability to find joy in the mundane moments is infectious. The way you make ordinary days extraordinary is a testament to your creativity. I love how you celebrate my victories as if they were your own. Your thoughtfulness in leaving sweet surprises never fails to make my day. Your resilience in the face of adversity is a source of inspiration. The quirky little habits you have make you uniquely endearing. Your willingness to forgive and forget is a quality I deeply admire. The support you provide in my endeavors is a driving force behind my success. I cherish the way you make me feel like the most important person in the world. Your ability to find solutions in challenging situations is remarkable. The way you make our home a haven of love and warmth is unparalleled. Your unwavering belief in me gives me the confidence to conquer any obstacle. I love the way you make time stand still when we're lost in conversation. Your commitment to personal growth reflects a dedication to our shared future. The sincerity in your apologies speaks volumes about your character. Your humility in acknowledging your mistakes sets a gracious example. The way you prioritize our relationship amidst life's demands is heartening. I am grateful for the stability and steadiness you bring to my life. Your selflessness in putting others first is a virtue I deeply respect. Your ability to find beauty in imperfections makes you a true romantic. The way you make compromises without losing yourself is admirable. Your contagious enthusiasm for life adds a spark to our shared experiences. I love the way you make even mundane tasks enjoyable with your company. Your adaptability in navigating life's twists and turns is impressive. Your commitment to open communication fosters a deeper connection between us. The tenderness in your touch is a language that speaks straight to my heart. Your ability to find common ground in disagreements is a skill I cherish. I appreciate the way you make decisions with our mutual interests at heart. Your unwavering commitment to our shared dreams is both comforting and inspiring. The way you embrace change with a positive outlook is truly commendable. Your sense of humor has the power to turn any frown upside down. I love how you make me feel cherished even in the midst of life's chaos. Your generosity extends not just to me but to everyone around you. Your genuine curiosity about the world adds depth to our conversations. The way you handle challenges with a cool head is a source of reassurance. Your ability to find joy in simple pleasures is a reminder of life's beauty. I love the way you make decisions with a blend of logic and intuition. Your honesty, even when it's difficult, strengthens the foundation of trust. Your ability to make compromises without sacrificing your values is commendable. The shared dreams and goals we build together create a future worth looking forward to. I love the way you express affection, making every gesture feel meaningful. Your commitment to our relationship is evident in the consistency of your actions. The way you make me feel valued and respected is a treasure beyond measure. Your sense of responsibility in taking care of our shared space is appreciated. I cherish the way you make me feel secure and loved, no matter the circumstances. Your dedication to continuous learning and growth is an inspiration. I love the way you make even the most ordinary moments special. Your ability to find common ground in disagreements is a skill I deeply value. Your unwavering support. I Love You becasuse You deserve to be loved and I deserve You";

// Converting the paragraph into an array - string is bad for manipulating
const paragraph = text.split("");

// Initiating how many letters are there
let i = 0;
// var clickSound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18660_1464810669.mp3");

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];
    // $(".textCont").text() = $(".textCont").text() + arr[i];
    // clickSound.play();
    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

// setInterval(function(){(dashOut(paragraph))}, 500);

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
