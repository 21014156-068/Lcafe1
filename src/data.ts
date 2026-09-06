export const BIZ = {
  name: "Luxembourg Cafe",
  tagline: "Breakfast all day in Belgium, Wisconsin",
  category: "Restaurant · Cafe",
  address: "100 Main St, Belgium, WI 53004",
  addressShort: "100 Main St · Belgium, WI",
  plusCode: "F5X8+XC Belgium, Wisconsin",
  phoneDisplay: "(262) 476-5057",
  phoneHref: "tel:+12624765057",
  rating: 4.7,
  reviewCount: 508,
  price: "$10–20 per person",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Luxembourg+Cafe+100+Main+St+Belgium+WI+53004",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Luxembourg+Cafe+Belgium+WI+53004",
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-87.8743%2C43.4942%2C-87.8403%2C43.5142&layer=mapnik&marker=43.5042%2C-87.8573",
};

export const IMAGES = {
  benedict:
    "https://image.qwenlm.ai/generated-images/28ac1f46-efdd-46c1-8c03-48a89fa31729/_result.png",
  pancakes:
    "https://image.qwenlm.ai/generated-images/ccafd5b6-e540-4745-87c2-d378b4e33c68/_result.png",
  fishfry:
    "https://image.qwenlm.ai/generated-images/1914374b-cae8-4d16-8ad0-aa3874cdeb7b/_result.png",
  interior:
    "https://image.qwenlm.ai/generated-images/08c17fbd-612e-414d-a0e6-73ac212c6511/_result.png",
  hashbowl:
    "https://image.qwenlm.ai/generated-images/88395c3e-2255-42ca-890f-4ab84983206b/_result.png",
  coffee:
    "https://image.qwenlm.ai/generated-images/9b2f3237-ed60-4c5c-997a-061e15d18113/_result.png",
};

/** Minutes after midnight. Kitchen rhythm per the listing: opens 6 AM daily,
 *  Friday dinner fish fry, Saturday supper service. Call ahead to confirm. */
export const HOURS: { day: string; open: number; close: number; note?: string }[] = [
  { day: "Sunday", open: 360, close: 840, note: "Sunday brunch rush 8–10 AM" },
  { day: "Monday", open: 360, close: 840 },
  { day: "Tuesday", open: 360, close: 840 },
  { day: "Wednesday", open: 360, close: 840 },
  { day: "Thursday", open: 360, close: 840 },
  { day: "Friday", open: 360, close: 1200, note: "Fish fry from 4 PM" },
  { day: "Saturday", open: 360, close: 1200 },
];

export function fmtTime(min: number): string {
  const h24 = Math.floor(min / 60);
  const m = min % 60;
  const ampm = h24 >= 12 ? "PM" : "AM";
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  return m === 0 ? `${h} ${ampm}` : `${h}:${String(m).padStart(2, "0")} ${ampm}`;
}

export type MenuItem = {
  name: string;
  desc?: string;
  band: "$" | "$$" | "$$$";
  tag?: string;
};

export const MENU: { id: string; title: string; blurb: string; items: MenuItem[] }[] = [
  {
    id: "rise",
    title: "Rise & Shine",
    blurb: "Served all day, every day — because 6 AM people shouldn't have all the fun.",
    items: [
      { name: "Biscuits & Gravy", desc: "Flaky biscuits under sausage gravy", band: "$", tag: "Mentioned ×5" },
      { name: "Eggs Any Style", desc: "Two eggs, your way, with home fries & toast", band: "$", tag: "Crowd pick" },
      { name: "Golden Pancakes", desc: "Buttermilk stack, powdered sugar, warm syrup", band: "$", tag: "Mentioned ×14" },
      { name: "Chocolate Chip Pancakes", desc: "For the young and the young at heart", band: "$" },
      { name: "Stuffed French Toast", desc: "Thick-cut, griddled golden, filled & finished", band: "$$" },
      { name: "French Toast Breakfast", desc: "The classic, with eggs and your meat of choice", band: "$$" },
      { name: "Veggie Omelette", desc: "Garden vegetables folded into three eggs", band: "$$" },
      { name: "Gyro Omelette", desc: "Gyro fixings, tzatziki, all folded in", band: "$$" },
      { name: "Avocado Toast", desc: "Smashed avocado on hearty toast", band: "$", tag: "Lighter side" },
      { name: "Bagel & Cream Cheese", desc: "Toasted, with a proper schmear", band: "$" },
    ],
  },
  {
    id: "benedicts",
    title: "Benedicts & Bowls",
    blurb: "The plates people drive in from Chicago for — poached, stacked and smothered.",
    items: [
      { name: "The Bacado Benedict", desc: "Bacon, avocado & poached eggs, hollandaise over everything", band: "$$", tag: "Mentioned ×11" },
      { name: "The LUX Bowl", desc: "Our regulars' favorite — you can't go wrong, they say", band: "$$", tag: "House legend" },
      { name: "Corned Beef Hash Benedict", desc: "Crispy hash, poached eggs, hollandaise", band: "$$", tag: "Mentioned ×3" },
      { name: "Eggs Florentine", desc: "Spinach, poached eggs, hollandaise", band: "$$" },
      { name: "Gyro Bowl", desc: "Seasoned gyro, veggies & tzatziki over the good stuff", band: "$$" },
      { name: "Chicken-Fried Steak & Eggs", desc: "Hand-breaded, smothered in gravy, eggs your way", band: "$$" },
      { name: "Sirloin & Eggs", desc: "Grilled sirloin with two eggs any style", band: "$$$" },
    ],
  },
  {
    id: "supper",
    title: "Noon & Supper",
    blurb: "Sandwiches, skillets and Wisconsin tradition — fish fry Fridays till 8 PM.",
    items: [
      { name: "Friday Cod Fish Fry", desc: "Golden cod, fries, slaw, rye & tartar — it's a Wisconsin thing", band: "$$", tag: "Mentioned ×11" },
      { name: "French Dip & Fries", desc: "Au jus for dunking, fries for the road", band: "$$" },
      { name: "Reuben & Fries", desc: "Corned beef, kraut & Swiss, grilled on rye", band: "$$" },
      { name: "Pastrami on Rye", desc: "Stacked tall, mustard optional but recommended", band: "$$" },
      { name: "House Chili", desc: "Some folks call it the best on this planet", band: "$" },
      { name: "Clam Chowder", desc: "Creamy, loaded, served with crackers", band: "$" },
      { name: "Perch", desc: "When it's fresh — ask what's in today", band: "$$" },
      { name: "Liver & Onions", desc: "Old-school comfort, done right", band: "$$", tag: "Mentioned ×3" },
      { name: "Chicken Wrap", desc: "Grilled chicken, crisp veggies, wrapped tight", band: "$$", tag: "Mentioned ×2" },
    ],
  },
  {
    id: "sides",
    title: "On the Side",
    blurb: "The supporting cast that regularly steals the show.",
    items: [
      { name: "Hash Browns", desc: "Crispy outside, tender middle — the correct way", band: "$", tag: "Mentioned ×12" },
      { name: "Home Fries", desc: "Griddled potatoes that hit the spot", band: "$" },
      { name: "Wisconsin Cheese Curds", desc: "Squeaky, golden, exactly as the law requires", band: "$" },
      { name: "Side of Pancakes", desc: "With fresh strawberry sauce", band: "$" },
      { name: "Gluten-Free Toast", desc: "Because everybody deserves good toast", band: "$", tag: "Mentioned ×3" },
    ],
  },
  {
    id: "coffee",
    title: "The Coffee Pot & Sweets",
    blurb: "Great coffee is a listed highlight here — refills come around whether you ask or not.",
    items: [
      { name: "Bottomless Drip", desc: "Hot, fresh, and topped off all morning", band: "$", tag: "Constant refills" },
      { name: "Espresso", desc: "A proper pull, worth the detour", band: "$" },
      { name: "Hazelnut Latte", desc: "The one people drive up from Chicago for", band: "$" },
      { name: "Nutella Graham Crepe", desc: "Sweet, toasted, gone too fast", band: "$" },
      { name: "Sweet Crepes", desc: "Rolled with fresh strawberry sauce", band: "$" },
    ],
  },
];

export const MENTIONS: { label: string; count: number; note: string }[] = [
  { label: "Pancakes", count: 14, note: "light, fluffy, strawberry sauce" },
  { label: "Hash Browns", count: 12, note: "crispy on the outside" },
  { label: "Fish Fry", count: 11, note: "Friday nights, Wisconsin style" },
  { label: "Eggs Benedict", count: 11, note: "the Bacado especially" },
  { label: "Biscuits & Gravy", count: 5, note: "flaky under the gravy" },
  { label: "Remodeled Interior", count: 4, note: "clean, updated, cute inside" },
  { label: "Corned Beef Hash Bowl", count: 3, note: "a LUX tradition" },
  { label: "Gluten-Free Toast", count: 3, note: "thoughtful option" },
];

export const REVIEWS: {
  name: string;
  meta: string;
  stars: number;
  text: string;
  rot: string;
}[] = [
  {
    name: "Erica B.",
    meta: "Local Guide · recent visit",
    stars: 5,
    text: "Don't let the humble exterior fool you — this is a genuine small-town hidden gem. Service was fast and friendly, and both the food and the coffee hit the mark. I only wish the outside hinted at how charming it is inside.",
    rot: "-rotate-1",
  },
  {
    name: "Josh G.",
    meta: "Breakfast enthusiast",
    stars: 5,
    text: "As someone who takes breakfast seriously, this ranks among my best-ever stops. The LUX breakfast bowl and pancakes were spot-on, the prices are fair, and our server Brynn was excellent. Already planning the next trip.",
    rot: "rotate-1",
  },
  {
    name: "Susan K.",
    meta: "Local Guide · first-timer",
    stars: 5,
    text: "Cute place, great atmosphere, excellent service. I had the perch and it may be the best I've ever had — and I don't say that lightly. Highly recommend.",
    rot: "rotate-[0.5deg]",
  },
  {
    name: "James R.",
    meta: "Local Guide · recent visit",
    stars: 5,
    text: "The chicken-fried steak breakfast did not disappoint — bigger and cheaper than what I'd get at bigger-name spots elsewhere. Left full and happy.",
    rot: "rotate-1",
  },
  {
    name: "LeeAnn T.",
    meta: "Local Guide · business traveler",
    stars: 5,
    text: "A perfect stop between Green Bay and Milwaukee. The French dip and fries were awesome, and it's exactly the kind of non-chain spot I look for when I travel for work.",
    rot: "-rotate-[0.75deg]",
  },
  {
    name: "Jeremy R.",
    meta: "New local · weekly regular",
    stars: 5,
    text: "Just moved to town — breakfast twice, fish fry once, and I can already tell this is my weekly spot. Generous portions, well-seasoned food, and the owner couldn't have been more welcoming.",
    rot: "rotate-[0.75deg]",
  },
];

export const PULL_QUOTE = {
  text: "Never a bad experience! You can't go wrong with the LUX Bowl, I'm telling ya.",
  source: "— a regular, via the visitor board",
};

export const RATING_BARS = [
  { stars: 5, pct: 79 },
  { stars: 4, pct: 13 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 2 },
];

export const REVIEW_THEMES =
  "Diners rave about the varied menu — breakfast standouts like the Bacado Benedict and the coffee come up again and again, along with fair prices and the clean, updated dining room. Friendly, attentive, quick service rounds out the picture.";

export type Amenity = { icon: string; title: string; text: string };

export const AMENITIES: Amenity[] = [
  { icon: "coffee", title: "Great coffee", text: "A listed highlight — drip refills keep coming" },
  { icon: "sunrise", title: "Breakfast all day", text: "Pancakes at 4 PM? Absolutely." },
  { icon: "leaf", title: "Vegetarian & lighter plates", text: "Veggie omelettes, avocado toast, healthy options" },
  { icon: "kids", title: "Good for kids", text: "Kids' menu and high chairs on hand" },
  { icon: "access", title: "Fully accessible", text: "Entrance, parking, seating & restroom" },
  { icon: "car", title: "Easy parking", text: "Free lot and street parking, usually plenty" },
  { icon: "calendar", title: "Reservations welcome", text: "Planning a group? Book ahead" },
  { icon: "bag", title: "Takeout & delivery", text: "Dine-in, carry-out or sent to your door" },
  { icon: "card", title: "Pay your way", text: "Credit, debit & tap-to-pay mobile" },
];

export const TICKER_ITEMS = [
  "Open 6 AM",
  "Breakfast all day",
  "Friday fish fry till 8 PM",
  "The LUX Bowl",
  "Bottomless drip coffee",
  "Biscuits & gravy",
  "Wisconsin cheese curds",
  "Bacado Benedict",
  "Hazelnut lattes",
  "100 Main St, Belgium WI",
];

export const NAV_LINKS = [
  { href: "#menu", label: "The Board" },
  { href: "#favorites", label: "Most Loved" },
  { href: "#reviews", label: "Word Around Town" },
  { href: "#hours", label: "Hours" },
  { href: "#visit", label: "Find Us" },
];
