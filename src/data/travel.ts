import kashmirImg from "@/assets/tz-kashmir.jpeg";
import keralaImg from "@/assets/tz-kerala.jpeg";
import rajasthanImg from "@/assets/hero-rajasthan.jpg";
import baliImg from "@/assets/tz-bali.jpeg";
import himachalImg from "@/assets/tz-himachal.jpeg";
import manaliImg from "@/assets/tz-manali.jpeg";
import shimlaImg from "@/assets/tz-shimla.jpeg";
import uttarakhandImg from "@/assets/tz-uttarakhand.jpeg";
import sikkimImg from "@/assets/tz-sikkim.jpeg";
import goaImg from "@/assets/tz-goa.jpeg";
import manaliAdventureImg from "@/assets/tz-manali-adventure.jpeg";
import manaliHoneymoonImg from "@/assets/tz-manali-honeymoon.jpeg";
import shimlaKufriImg from "@/assets/tz-shimla-kufri.jpeg";

export const BRAND_NAME = "Tripze Travels";
export const WHATSAPP_NUMBER = "917807804069";
export const PHONE_NUMBER = "+91 6230708257";
export const PHONE_NUMBER_ALT = "+91 7876503725";
export const CONTACT_EMAIL = "tripzetravels@gmail.com";
export const OFFICE_ADDRESS = "Kullu, Himachal Pradesh, India – 175101";

// Designer credit
export const DESIGNER_NAME = "Web Life Studio";
export const DESIGNER_WHATSAPP = "917876814326";
export const DESIGNER_MESSAGE = "Hello, I want a website like this.";
export const buildDesignerLink = () =>
  `https://wa.me/${DESIGNER_WHATSAPP}?text=${encodeURIComponent(DESIGNER_MESSAGE)}`;

export const DEFAULT_ENQUIRY_MESSAGE = "Hello Tripze Travels, I am interested in this package.";

export type Destination = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  image: string;
  startingPrice: number;
  bestTime: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    emoji: "❄️",
    tagline: "Paradise on Earth",
    description:
      "Drift on shikaras across mirror-still Dal Lake, ride gondolas above Gulmarg's snow fields and lose yourself in Mughal gardens bursting with tulips.",
    image: kashmirImg,
    startingPrice: 18999,
    bestTime: "Mar – Oct",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Sonmarg Glaciers"],
  },
  {
    slug: "himachal",
    name: "Himachal",
    emoji: "🏔️",
    tagline: "The Land of Snowy Peaks",
    description:
      "From the colonial charm of Shimla to the bohemian streets of Manali and the high-altitude moonscapes of Spiti — Himachal is pure mountain magic.",
    image: himachalImg,
    startingPrice: 14999,
    bestTime: "Apr – Jun, Dec – Feb",
    highlights: ["Solang Valley", "Rohtang Pass", "Mall Road Shimla", "Kasol Riverside"],
  },
  {
    slug: "manali",
    name: "Manali",
    emoji: "🏞️",
    tagline: "Adventure capital of Himachal",
    description:
      "Snow peaks, pine forests, riverside cafes and thrilling days in Solang Valley make Manali perfect for friends, families and honeymooners.",
    image: manaliImg,
    startingPrice: 9999,
    bestTime: "Mar – Jun, Dec – Feb",
    highlights: ["Solang Valley", "Atal Tunnel", "Hadimba Temple", "Old Manali Cafes"],
  },
  {
    slug: "shimla",
    name: "Shimla",
    emoji: "🚂",
    tagline: "Colonial charm in the clouds",
    description:
      "Walk the Ridge, ride the heritage toy train, explore Kufri and unwind among cedar-lined valleys in Himachal's classic hill-station escape.",
    image: shimlaImg,
    startingPrice: 8999,
    bestTime: "Mar – Jun, Dec – Jan",
    highlights: ["Mall Road", "Kufri Snow Point", "Toy Train", "Jakhoo Temple"],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    emoji: "🌲",
    tagline: "Devbhoomi — Land of Gods",
    description:
      "Raft the wild Ganga at Rishikesh, walk the spiritual ghats of Haridwar and trek pristine Himalayan meadows in Auli and Valley of Flowers.",
    image: uttarakhandImg,
    startingPrice: 12999,
    bestTime: "Mar – Jun, Sep – Nov",
    highlights: ["Rishikesh Rafting", "Auli Skiing", "Nainital Lake", "Jim Corbett Safari"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    emoji: "🌿",
    tagline: "God's Own Country",
    description:
      "Cruise emerald backwaters in a private houseboat, sip filter coffee in misty Munnar tea estates, and unwind with authentic Ayurvedic therapies.",
    image: keralaImg,
    startingPrice: 16999,
    bestTime: "Sep – Mar",
    highlights: ["Alleppey Houseboat", "Munnar Tea Hills", "Thekkady Wildlife", "Kovalam Beach"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    emoji: "👑",
    tagline: "Land of Kings",
    description:
      "Wander pink palaces, blue cities and golden dunes. From royal Udaipur to mystical Jaisalmer — every corner is a postcard from India's regal past.",
    image: rajasthanImg,
    startingPrice: 17999,
    bestTime: "Oct – Mar",
    highlights: ["Udaipur Lake Palace", "Jaisalmer Desert Camp", "Amber Fort Jaipur", "Jodhpur Blue City"],
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    emoji: "🌸",
    tagline: "The Hidden Himalayan Jewel",
    description:
      "Wake up to Kanchenjunga views, ride the Nathula Pass road and find peace in Buddhist monasteries draped with prayer flags.",
    image: sikkimImg,
    startingPrice: 15999,
    bestTime: "Mar – May, Oct – Dec",
    highlights: ["Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "Yumthang Valley"],
  },
  {
    slug: "goa",
    name: "Goa",
    emoji: "🏖️",
    tagline: "Sun, Sand & Susegad",
    description:
      "Beach hop from buzzing Baga to the dreamy south coast, party till dawn in Anjuna and feast on fresh seafood with feni in hand.",
    image: goaImg,
    startingPrice: 11999,
    bestTime: "Nov – Feb",
    highlights: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls", "Anjuna Flea Market"],
  },
  {
    slug: "bali",
    name: "Bali",
    emoji: "🌺",
    tagline: "Island of the Gods",
    description:
      "Catch sunrise at Mount Batur, wander Ubud's rice terraces, surf Kuta's waves and find serenity at clifftop temples like Uluwatu.",
    image: baliImg,
    startingPrice: 42999,
    bestTime: "Apr – Oct",
    highlights: ["Ubud Rice Terraces", "Uluwatu Temple", "Nusa Penida", "Seminyak Sunsets"],
  },
];

export type ItineraryDay = { day: string; title: string; description: string };

export type Package = {
  slug: string;
  destinationSlug: string;
  title: string;
  duration: string;
  nights: number;
  days: number;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  summary: string;
  inclusions: string[];
  exclusions: string[];
  hotels: { city: string; name: string; category: string }[];
  itinerary: ItineraryDay[];
};

const k = (n: number, t: string, d: string) => ({ day: `Day ${n}`, title: t, description: d });

export const packages: Package[] = [
  {
    slug: "kashmir-snow-escape",
    destinationSlug: "kashmir",
    title: "Kashmir Snow Escape",
    duration: "5N / 6D",
    nights: 5,
    days: 6,
    price: 21999,
    oldPrice: 27999,
    image: kashmirImg,
    rating: 4.8,
    reviews: 412,
    summary:
      "Srinagar houseboats, Gulmarg snow play, Pahalgam meadows and Sonmarg glaciers — the ultimate Kashmir circuit.",
    inclusions: [
      "5 nights accommodation (3-star / deluxe houseboat)",
      "Daily breakfast and dinner",
      "Airport transfers in private SUV",
      "Shikara ride on Dal Lake",
      "Gulmarg Gondola Phase 1 tickets",
      "All sightseeing as per itinerary",
    ],
    exclusions: ["Flights to/from Srinagar", "Lunches & personal expenses", "Travel insurance", "5% GST"],
    hotels: [
      { city: "Srinagar", name: "Deluxe Houseboat Group", category: "Premium Houseboat" },
      { city: "Gulmarg", name: "Hotel Pine Spring", category: "3-Star" },
      { city: "Pahalgam", name: "Heevan Retreat", category: "4-Star" },
    ],
    itinerary: [
      k(1, "Arrival in Srinagar", "Welcome at the airport, transfer to your deluxe houseboat on Dal Lake. Evening Shikara ride at golden hour. Overnight on the houseboat."),
      k(2, "Srinagar — Gulmarg", "Drive through apple orchards to Gulmarg. Ride the world's second-highest gondola, play in the snow and overnight in a cozy mountain hotel."),
      k(3, "Gulmarg — Pahalgam", "Scenic drive to Pahalgam via Awantipora ruins and saffron fields. Walk along the Lidder river. Overnight in Pahalgam."),
      k(4, "Pahalgam Local", "Optional pony ride to Aru Valley, Betaab Valley and Chandanwari. Free evening for cafe-hopping. Overnight in Pahalgam."),
      k(5, "Pahalgam — Srinagar Gardens", "Return to Srinagar and visit Mughal masterpieces — Nishat, Shalimar and Chashme Shahi. Shop for pashminas and walnut wood."),
      k(6, "Departure", "Breakfast and timely transfer to Srinagar airport with memories that last a lifetime."),
    ],
  },
  {
    slug: "kerala-backwater-bliss",
    destinationSlug: "kerala",
    title: "Kerala Backwater Bliss",
    duration: "6N / 7D",
    nights: 6,
    days: 7,
    price: 24999,
    oldPrice: 31000,
    image: keralaImg,
    rating: 4.9,
    reviews: 578,
    summary: "Cochin heritage, Munnar tea estates, Thekkady wildlife and a private Alleppey houseboat night.",
    inclusions: [
      "6 nights stay in handpicked 4-star resorts",
      "Premium Alleppey houseboat with all meals",
      "Daily breakfast",
      "Munnar plantation visit + Thekkady boat ride",
      "Cochin sightseeing with English-speaking guide",
      "All transfers in private AC sedan",
    ],
    exclusions: ["Flights", "Lunches outside houseboat", "Camera fees at monuments", "GST"],
    hotels: [
      { city: "Cochin", name: "Crowne Plaza", category: "5-Star" },
      { city: "Munnar", name: "Tea Valley Resort", category: "4-Star" },
      { city: "Thekkady", name: "Cardamom County", category: "4-Star" },
      { city: "Alleppey", name: "Premium Houseboat", category: "Deluxe" },
    ],
    itinerary: [
      k(1, "Arrive Cochin", "Pickup, transfer to hotel and evening Kathakali dance performance."),
      k(2, "Cochin — Munnar", "Drive to Munnar via Cheeyappara waterfalls. Sunset at Echo Point."),
      k(3, "Munnar Sightseeing", "Tea museum, Mattupetty dam, Kundala lake and Eravikulam national park."),
      k(4, "Munnar — Thekkady", "Spice plantation tour and Periyar lake boat safari."),
      k(5, "Thekkady — Alleppey", "Board your private houseboat. Cruise the backwaters with chef-prepared Kerala feast."),
      k(6, "Alleppey — Cochin", "Disembark, drive to Cochin and stroll Fort Kochi at sunset."),
      k(7, "Departure", "Free morning, transfer to airport."),
    ],
  },
  {
    slug: "rajasthan-royal-trail",
    destinationSlug: "rajasthan",
    title: "Rajasthan Royal Trail",
    duration: "7N / 8D",
    nights: 7,
    days: 8,
    price: 28999,
    image: rajasthanImg,
    rating: 4.7,
    reviews: 389,
    summary: "Jaipur, Jodhpur, Jaisalmer & Udaipur — heritage palaces, blue alleys and Thar desert under the stars.",
    inclusions: [
      "7 nights in heritage palace hotels",
      "Daily breakfast",
      "Camel safari & Thar desert dinner with folk performance",
      "Lake Pichola boat ride",
      "All transfers in private AC vehicle",
      "Monument tickets",
    ],
    exclusions: ["Flights", "Lunches & dinners (except desert dinner)", "GST", "Personal shopping"],
    hotels: [
      { city: "Jaipur", name: "Samode Haveli", category: "Heritage" },
      { city: "Jodhpur", name: "Ajit Bhawan", category: "Heritage Palace" },
      { city: "Jaisalmer", name: "Suryagarh", category: "5-Star Heritage" },
      { city: "Udaipur", name: "Trident Lake View", category: "5-Star" },
    ],
    itinerary: [
      k(1, "Arrive Jaipur", "Transfer and rest. Evening at Chokhi Dhani for Rajasthani thali."),
      k(2, "Jaipur Sightseeing", "Amber Fort, Hawa Mahal, City Palace and Jantar Mantar."),
      k(3, "Jaipur — Jodhpur", "Drive to the Blue City. Sunset from Mehrangarh Fort."),
      k(4, "Jodhpur — Jaisalmer", "Drive to the Golden City. Walk the living fort at twilight."),
      k(5, "Jaisalmer Desert", "Sam dunes camel safari, dinner under the stars with folk music."),
      k(6, "Jaisalmer — Udaipur", "Long scenic drive into the Aravalli hills."),
      k(7, "Udaipur Sightseeing", "City Palace, Jagdish temple and a romantic Lake Pichola sunset cruise."),
      k(8, "Departure", "Transfer to Udaipur airport."),
    ],
  },
  {
    slug: "himachal-mountain-magic",
    destinationSlug: "himachal",
    title: "Himachal Mountain Magic",
    duration: "5N / 6D",
    nights: 5,
    days: 6,
    price: 17999,
    oldPrice: 22000,
    image: himachalImg,
    rating: 4.6,
    reviews: 624,
    summary: "Shimla colonial charm meets Manali adventure — toy train, Solang valley and Rohtang snow.",
    inclusions: [
      "5 nights 3-star / 4-star accommodation",
      "Daily breakfast & dinner",
      "All transfers in private SUV",
      "Solang Valley & Rohtang permits",
      "Toy train Kalka–Shimla (subject to availability)",
    ],
    exclusions: ["Adventure activity charges", "Lunches", "GST", "Personal expenses"],
    hotels: [
      { city: "Shimla", name: "Snow Valley Resorts", category: "4-Star" },
      { city: "Manali", name: "Apple Country Resort", category: "4-Star" },
    ],
    itinerary: [
      k(1, "Arrive Shimla", "Reach Shimla, evening on Mall Road and Ridge."),
      k(2, "Shimla Local", "Kufri, Green Valley, Fagu and Indian Institute of Advanced Study."),
      k(3, "Shimla — Manali", "Long scenic drive via Sutlej and Beas valleys."),
      k(4, "Manali Sightseeing", "Hadimba temple, Vashisht hot springs, Manu temple and Mall Road."),
      k(5, "Solang & Rohtang", "Snow play, paragliding optional, photo stops at Rohtang/Atal tunnel."),
      k(6, "Departure", "Transfer to Bhuntar / Chandigarh airport."),
    ],
  },
  {
    slug: "manali-adventure-escape",
    destinationSlug: "manali",
    title: "Manali Adventure Escape",
    duration: "5N / 6D",
    nights: 5,
    days: 6,
    price: 15499,
    oldPrice: 19999,
    image: manaliAdventureImg,
    rating: 4.8,
    reviews: 486,
    summary: "A thrill-packed Manali trip with Solang Valley, Atal Tunnel, riverside cafes, snow points and easy-paced local sightseeing.",
    inclusions: [
      "5 nights stay in deluxe Manali hotel",
      "Daily breakfast and dinner",
      "Private cab for local sightseeing",
      "Solang Valley and Atal Tunnel excursion",
      "Pickup and drop from Volvo bus stand",
    ],
    exclusions: ["Volvo / flight tickets", "Adventure activities", "Lunches", "GST and personal expenses"],
    hotels: [{ city: "Manali", name: "Apple Country Resort", category: "4-Star" }],
    itinerary: [
      k(1, "Arrival & Check-in", "Arrive in Manali, meet your driver and check into the hotel. Evening free for Mall Road, cafes and riverside walks."),
      k(2, "Manali Local Sightseeing", "Visit Hadimba Devi Temple, Manu Temple, Vashisht hot springs, Club House and Tibetan monastery."),
      k(3, "Solang Valley Adventure", "Spend the day at Solang Valley with optional paragliding, ATV rides, ropeway and snow activities depending on season."),
      k(4, "Atal Tunnel & Snow Point", "Drive towards Atal Tunnel, Sissu and nearby snow points. Enjoy mountain views, waterfalls and photography stops."),
      k(5, "Naggar Castle & Old Manali", "Visit Naggar Castle, art galleries and Jana waterfall before an evening in Old Manali's cafes and boutique lanes."),
      k(6, "Departure", "Breakfast, checkout and transfer to the Volvo stand or airport for onward travel."),
    ],
  },
  {
    slug: "manali-honeymoon-package",
    destinationSlug: "manali",
    title: "Manali Honeymoon Package",
    duration: "4N / 5D",
    nights: 4,
    days: 5,
    price: 18999,
    oldPrice: 23999,
    image: manaliHoneymoonImg,
    rating: 4.9,
    reviews: 352,
    summary: "A romantic Manali getaway with candlelight dinner, flower-bed decoration, Solang snow fun and private sightseeing.",
    inclusions: ["4 nights romantic hotel stay", "Daily breakfast and dinner", "One candlelight dinner", "Flower-bed decoration once", "Private cab sightseeing"],
    exclusions: ["Flights / Volvo tickets", "Room heater charges", "Adventure activities", "GST"],
    hotels: [{ city: "Manali", name: "The Orchard Greens", category: "Premium Deluxe" }],
    itinerary: [
      k(1, "Arrival in Manali", "Warm welcome, hotel check-in and leisure evening with honeymoon room decoration subject to arrival time."),
      k(2, "Romantic Local Tour", "Hadimba Temple, Van Vihar, Vashisht hot springs and relaxed time around Mall Road."),
      k(3, "Solang Valley", "Private excursion to Solang Valley with optional adventure rides and snow photography."),
      k(4, "Kullu & Naggar", "Visit Kullu shawl factories, river rafting point, Naggar Castle and enjoy a candlelight dinner at the hotel."),
      k(5, "Departure", "Breakfast and checkout with private transfer to the Volvo stand / airport."),
    ],
  },
  {
    slug: "shimla-kufri-family-tour",
    destinationSlug: "shimla",
    title: "Shimla Kufri Family Tour",
    duration: "3N / 4D",
    nights: 3,
    days: 4,
    price: 10999,
    oldPrice: 13999,
    image: shimlaKufriImg,
    rating: 4.6,
    reviews: 298,
    summary: "A comfortable family holiday covering Shimla Mall Road, Kufri, Green Valley, Jakhoo Temple and colonial landmarks.",
    inclusions: ["3 nights hotel stay", "Daily breakfast and dinner", "Private cab sightseeing", "Kufri and local Shimla tour", "Driver allowance and parking"],
    exclusions: ["Train / flight tickets", "Entry tickets", "Lunches", "GST"],
    hotels: [{ city: "Shimla", name: "Snow Valley Resorts", category: "4-Star" }],
    itinerary: [
      k(1, "Arrival in Shimla", "Check into your hotel and spend the evening at Mall Road, Ridge and Christ Church."),
      k(2, "Kufri & Green Valley", "Visit Kufri, Green Valley, Himalayan Nature Park and enjoy optional horse riding or snow activities."),
      k(3, "Shimla Heritage Tour", "Explore Jakhoo Temple, Viceregal Lodge, Lakkar Bazaar and colonial viewpoints."),
      k(4, "Departure", "Breakfast, checkout and transfer to railway station / airport / Volvo point."),
    ],
  },
  {
    slug: "goa-beach-getaway",
    destinationSlug: "goa",
    title: "Goa Beach Getaway",
    duration: "3N / 4D",
    nights: 3,
    days: 4,
    price: 13499,
    image: goaImg,
    rating: 4.5,
    reviews: 893,
    summary: "Lazy beaches, North Goa parties, dolphin cruise and a touch of old Portuguese Goa.",
    inclusions: [
      "3 nights in 4-star beach resort",
      "Daily breakfast",
      "Airport transfers",
      "Half-day North Goa & half-day South Goa tour",
      "Sunset dolphin cruise",
    ],
    exclusions: ["Flights", "Water sports", "Lunches & dinners", "GST"],
    hotels: [{ city: "Calangute", name: "Novotel Goa Resort", category: "4-Star" }],
    itinerary: [
      k(1, "Arrive Goa", "Beach resort check-in and sunset at Baga."),
      k(2, "North Goa Tour", "Aguada Fort, Anjuna, Vagator and Chapora."),
      k(3, "South Goa & Cruise", "Old Goa churches, Miramar and a Mandovi sunset cruise."),
      k(4, "Departure", "Free morning, transfer to airport."),
    ],
  },
  {
    slug: "uttarakhand-rishikesh-auli-tour",
    destinationSlug: "uttarakhand",
    title: "Rishikesh, Mussoorie & Auli Escape",
    duration: "5N / 6D",
    nights: 5,
    days: 6,
    price: 16499,
    oldPrice: 20999,
    image: uttarakhandImg,
    rating: 4.7,
    reviews: 276,
    summary: "A scenic Uttarakhand journey with Ganga aarti, Mussoorie viewpoints, Joshimath and cable-car views of Auli.",
    inclusions: ["5 nights hotel stay", "Daily breakfast and dinner", "Private cab transfers", "Rishikesh and Mussoorie sightseeing", "Joshimath and Auli excursion"],
    exclusions: ["Rafting charges", "Ropeway tickets", "Lunches", "GST and personal expenses"],
    hotels: [
      { city: "Rishikesh", name: "Aloha on the Ganges", category: "4-Star" },
      { city: "Mussoorie", name: "Fortune Resort Grace", category: "4-Star" },
      { city: "Joshimath", name: "Cliff Top Club", category: "Premium" },
    ],
    itinerary: [
      k(1, "Arrival in Rishikesh", "Check in near the Ganga and attend evening Ganga aarti at Triveni Ghat."),
      k(2, "Rishikesh Adventure", "Visit Ram Jhula, Laxman Jhula, Beatles Ashram and enjoy optional river rafting."),
      k(3, "Rishikesh to Mussoorie", "Drive to Mussoorie, visit Mall Road and enjoy sunset from Gun Hill."),
      k(4, "Mussoorie Sightseeing", "Explore Kempty Falls, Company Garden, Camel's Back Road and Landour cafes."),
      k(5, "Joshimath & Auli", "Scenic mountain drive to Joshimath with Auli viewpoints and optional ropeway depending on weather."),
      k(6, "Departure", "Breakfast and transfer towards Dehradun / Haridwar for onward travel."),
    ],
  },
  {
    slug: "sikkim-gangtok-pelling-delight",
    destinationSlug: "sikkim",
    title: "Gangtok, Tsomgo & Pelling Delight",
    duration: "5N / 6D",
    nights: 5,
    days: 6,
    price: 21499,
    oldPrice: 26999,
    image: sikkimImg,
    rating: 4.8,
    reviews: 241,
    summary: "Discover Sikkim's monasteries, Tsomgo Lake, Nathula route viewpoints and Kanchenjunga-facing stays in Pelling.",
    inclusions: ["5 nights accommodation", "Daily breakfast", "Private non-AC vehicle", "Gangtok and Pelling sightseeing", "Tsomgo Lake permit assistance"],
    exclusions: ["Flights / train tickets", "Nathula Pass supplement", "Lunch and dinner", "GST"],
    hotels: [
      { city: "Gangtok", name: "Summit Norling Resort", category: "4-Star" },
      { city: "Pelling", name: "The Elgin Mount Pandim", category: "Heritage" },
    ],
    itinerary: [
      k(1, "Arrival in Gangtok", "Pickup from Bagdogra / NJP and transfer to Gangtok. Evening free at MG Marg."),
      k(2, "Tsomgo Lake Excursion", "Drive to Tsomgo Lake and Baba Mandir with optional Nathula Pass visit subject to permits."),
      k(3, "Gangtok Local", "Visit Rumtek Monastery, Banjhakri Falls, Tashi View Point and Directorate of Handicrafts."),
      k(4, "Gangtok to Pelling", "Scenic transfer to Pelling with stops at Ravangla Buddha Park if time permits."),
      k(5, "Pelling Sightseeing", "Cover Pemayangtse Monastery, Rabdentse ruins, Sky Walk and Kanchenjunga waterfalls."),
      k(6, "Departure", "Breakfast and transfer back to Bagdogra / NJP with mountain memories."),
    ],
  },
  {
    slug: "bali-island-romance",
    destinationSlug: "bali",
    title: "Bali Island Romance",
    duration: "6N / 7D",
    nights: 6,
    days: 7,
    price: 54999,
    oldPrice: 69999,
    image: baliImg,
    rating: 4.9,
    reviews: 318,
    summary: "Ubud rice terraces, Nusa Penida cliffs, Uluwatu fire dance and dreamy Seminyak sunsets.",
    inclusions: [
      "6 nights in private-pool villas",
      "Daily breakfast",
      "Airport transfers",
      "Full-day Ubud & Nusa Penida tours",
      "Romantic candlelight dinner on the beach",
    ],
    exclusions: ["International flights", "Visa fees", "Lunches & dinners (except 1)", "Travel insurance"],
    hotels: [
      { city: "Ubud", name: "Komaneka at Bisma", category: "5-Star Villa" },
      { city: "Seminyak", name: "The Kayon Resort", category: "5-Star Villa" },
    ],
    itinerary: [
      k(1, "Arrive Denpasar", "Transfer to Ubud villa, welcome spa session."),
      k(2, "Ubud Tour", "Tegalalang rice terraces, Tirta Empul and Monkey Forest."),
      k(3, "Mt Batur Sunrise", "Pre-dawn trek to catch sunrise above the clouds."),
      k(4, "Transfer to Seminyak", "Beach club afternoon and Seminyak sunset walk."),
      k(5, "Nusa Penida Day Trip", "Kelingking, Angel's Billabong and Broken Beach."),
      k(6, "Uluwatu", "Temple sunset and Kecak fire dance, candlelight dinner on the sand."),
      k(7, "Departure", "Transfer to Denpasar airport."),
    ],
  },
];

export const findPackage = (slug: string) => packages.find((p) => p.slug === slug);
export const findDestination = (slug: string) => destinations.find((d) => d.slug === slug);
export const packagesByDestination = (slug: string) =>
  packages.filter((p) => p.destinationSlug === slug);

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Standard booking policies — applied to all packages unless overridden.
export const DEFAULT_POLICIES = {
  importantNotes: [
    "All sightseeing is subject to weather and local conditions; the operator may reschedule or substitute equivalent experiences.",
    "Standard check-in is 2:00 PM and check-out is 11:00 AM; early check-in / late check-out is on request and subject to availability.",
    "A valid government photo ID (Aadhaar / Passport / Driving License) is mandatory for every traveller at all hotels.",
    "Heater, room service, mini-bar, laundry and other on-property extras are billed directly to your room.",
    "Carry warm clothing, comfortable shoes and personal medication relevant to high-altitude regions.",
  ],
  cancellation: [
    "30+ days before travel: 90% refund of package cost.",
    "15 – 29 days before travel: 50% refund of package cost.",
    "7 – 14 days before travel: 25% refund of package cost.",
    "Less than 7 days or no-show: no refund.",
    "Flight, train and non-refundable hotel components are governed by the supplier's own policies.",
  ],
  payment: [
    "25% advance is required to confirm the booking and block hotels & vehicles.",
    "Balance amount must be paid at least 7 days before the travel start date.",
    "We accept UPI, NEFT/IMPS and major credit/debit cards. A digital invoice is shared on confirmation.",
  ],
};

