import { MenuItem, Review, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: "Chaska Restaurant",
  tagline: "Where Every Bite Creates Memories",
  rating: 4.4,
  reviewCount: 148,
  priceRange: "₹200 – ₹1000",
  cuisines: ["North Indian", "Chinese", "Tandoor", "Mughlai", "Sea Food", "Veg", "Non Veg"],
  address: "Shop No.3, Amsterdam Street, World Street by Omaxe, Sector 79, Faridabad, Haryana 121101",
  phone: "+91 98996 93495",
  rawPhone: "919899693495",
  hours: "11:00 AM – 11:00 PM (Daily)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.4587391823907!2d77.34887!3d28.37512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd9963e6601b3%3A0xb214a1db57659cb4!2sWorld%20Street%20by%20Omaxe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  facilities: [
    "Outdoor Seating",
    "Family Dining",
    "Takeaway & Delivery",
    "Table Reservations",
    "Ample Parking Available",
    "Dogs Allowed Outside"
  ]
};

// Curated high quality food images for realistic display
export const MENU_ITEMS: MenuItem[] = [
  // PLATTERS
  {
    id: "plat-1",
    name: "Veg Platter",
    price: 830,
    category: "Platters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Assorted vegetarian tandoori starters including Paneer Tikka, Mushroom Tikka, Soya Chaap & Veg Kebabs served with mint chutney.",
    isPopular: true,
    rating: 4.8
  },
  {
    id: "plat-2",
    name: "Chaska Special Non Veg Grilled Platter",
    price: 940,
    category: "Platters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Chef's grand assortment of Tandoori Chicken, Chicken Malai Tikka, Fish Tikka & Mutton Seekh Kebabs.",
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9
  },

  // SOUPS
  {
    id: "soup-1",
    name: "Veg Sweet Corn Soup",
    price: 199,
    category: "Soups",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    description: "Creamy corn broth enriched with chopped garden vegetables and delicate herbs."
  },
  {
    id: "soup-2",
    name: "Veg Manchow Soup",
    price: 199,
    category: "Soups",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&q=80&w=800",
    description: "Indo-Chinese spicy garlic soup topped with crispy fried noodles.",
    isSpicy: true
  },
  {
    id: "soup-3",
    name: "Tomato Soup",
    price: 199,
    category: "Soups",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800",
    description: "Classic rich ripe tomato soup served with crunchy buttered croutons."
  },
  {
    id: "soup-4",
    name: "Veg Hot N Sour Soup",
    price: 199,
    category: "Soups",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800",
    description: "Zesty pepper broth packed with mushroom, tofu and finely shredded vegetables.",
    isSpicy: true
  },
  {
    id: "soup-5",
    name: "Chicken Soup",
    price: 190,
    category: "Soups",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    description: "Nourishing clear broth with tender pulled chicken and freshly cracked black pepper."
  },
  {
    id: "soup-6",
    name: "Chicken Sweet Corn Soup",
    price: 190,
    category: "Soups",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
    description: "Smooth sweet corn soup loaded with shredded chicken and egg drop filaments."
  },
  {
    id: "soup-7",
    name: "Chicken Manchow Soup",
    price: 190,
    category: "Soups",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&q=80&w=800",
    description: "Tangy & fiery chicken soup garnished with crispy egg noodles.",
    isSpicy: true
  },
  {
    id: "soup-8",
    name: "Chicken Clear Soup",
    price: 190,
    category: "Soups",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800",
    description: "Light aromatic broth infused with ginger, coriander and chicken."
  },

  // VEG STARTERS
  {
    id: "vstart-1",
    name: "Paneer Tikka",
    price: 450,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800",
    description: "Cottage cheese cubes marinated in yogurt and Indian spices, clay-oven roasted to perfection.",
    isPopular: true,
    rating: 4.7
  },
  {
    id: "vstart-2",
    name: "Fifty Fifty",
    price: 470,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Dual delight featuring half portion Paneer Tikka and half Malai Soya Chaap."
  },
  {
    id: "vstart-3",
    name: "Afghani Soya Chaap",
    price: 399,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Juicy soya chaap marinated in rich cashew cream, cheese and mild green cardamom."
  },
  {
    id: "vstart-4",
    name: "Tandoori Soya Chaap",
    price: 399,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Soya chaap chunks infused with smoked mustard oil and fiery tandoori masala."
  },
  {
    id: "vstart-5",
    name: "Hariyali Soya Chaap",
    price: 399,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Soya chaap coated in fresh mint, spinach and coriander marinade."
  },
  {
    id: "vstart-6",
    name: "Mushroom Tikka",
    price: 450,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Plump button mushrooms stuffed with spiced cottage cheese and tandoor-charred."
  },
  {
    id: "vstart-7",
    name: "Veg Kebab",
    price: 450,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Melt-in-mouth vegetable seekh kebabs spiced with aromatic royal cumin."
  },
  {
    id: "vstart-8",
    name: "Dahi Ki Sholay",
    price: 320,
    category: "Veg Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    description: "Crispy bread rolls stuffed with seasoned hung curd and bell peppers.",
    isPopular: true
  },

  // NON VEG STARTERS
  {
    id: "nvstart-1",
    name: "Tandoori Chicken",
    price: 410,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Whole chicken roasted over red-hot charcoal in traditional yogurt marinade.",
    isPopular: true,
    rating: 4.9
  },
  {
    id: "nvstart-2",
    name: "Afghani Chicken",
    price: 419,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800",
    description: "Creamy, mild chicken roast enriched with malai, melon seeds and white pepper."
  },
  {
    id: "nvstart-3",
    name: "Chicken Tikka",
    price: 560,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Boneless chicken morsels grilled on skewers with red chili and lemon glaze."
  },
  {
    id: "nvstart-4",
    name: "Chicken Malai Tikka",
    price: 579,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=800",
    description: "Silky boneless chicken marinated in cream, cheese and mace spice.",
    isPopular: true
  },
  {
    id: "nvstart-5",
    name: "Chicken Lasooni Tikka",
    price: 579,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Chicken skewers infused with roasted garlic paste and mustard butter."
  },
  {
    id: "nvstart-6",
    name: "Chicken Hariyali Tikka",
    price: 579,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Herbaceous chicken grilled in coriander, mint and green chili paste."
  },
  {
    id: "nvstart-7",
    name: "Chicken Seekh Kabab",
    price: 420,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Minced chicken infused with herbs and charcoal-skewered to juicy perfection."
  },
  {
    id: "nvstart-8",
    name: "Chicken Tangdi",
    price: 480,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Plump drumsticks stuffed with minced meat and slow roasted in tandoor."
  },
  {
    id: "nvstart-9",
    name: "Mutton Seekh Kabab",
    price: 420,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Royal minced lamb kebabs with ginger, garam masala and fresh coriander.",
    isPopular: true
  },
  {
    id: "nvstart-10",
    name: "Chicken Kali Mirch Tikka",
    price: 579,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800",
    description: "Chicken tikka spiced liberally with coarsely pounded black peppercorns."
  },
  {
    id: "nvstart-11",
    name: "Murgh Bhatti Tikka",
    price: 579,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Smoky roadside bhatti style chicken cooked over high heat coals."
  },
  {
    id: "nvstart-12",
    name: "Surmai Fish Tikka",
    price: 690,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    description: "Fresh Surmai kingfish steaks marinated in carom seeds and yellow chili.",
    isChefSpecial: true
  },
  {
    id: "nvstart-13",
    name: "Surmai Fish Fried",
    price: 690,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
    description: "Crispy Amritsari style deep-fried kingfish fillets sprinkled with chaat masala."
  },
  {
    id: "nvstart-14",
    name: "Tawa Fish",
    price: 780,
    category: "Non Veg Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    description: "Pan-seared fish slices tossed with griddle onion-tomato gravy."
  },

  // FRIED STARTERS
  {
    id: "fstart-1",
    name: "Chicken Crispy Fried Lollipop",
    price: 490,
    category: "Fried Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    description: "Deep fried chicken wings shaped into lollipops served with hot garlic dipping sauce."
  },
  {
    id: "fstart-2",
    name: "Chicken Fried",
    price: 420,
    category: "Fried Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800",
    description: "Classic golden fried marinated chicken chunks served with mint chutney."
  },

  // CHINESE STARTERS
  {
    id: "chstart-1",
    name: "Chilli Chicken Boneless",
    price: 550,
    category: "Chinese Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Wok-tossed boneless chicken with bell peppers, onion petals and soy garlic glaze.",
    isPopular: true,
    isSpicy: true
  },
  {
    id: "chstart-2",
    name: "Chilli Chicken With Bone",
    price: 540,
    category: "Chinese Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Bone-in succulent chicken chunks tossed in spicy Indo-Chinese chilli sauce."
  },
  {
    id: "chstart-3",
    name: "Chicken Manchurian",
    price: 550,
    category: "Chinese Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800",
    description: "Crispy chicken dumplings tossed in dark soy coriander reduction."
  },
  {
    id: "chstart-4",
    name: "Chicken Fried Lollipop",
    price: 550,
    category: "Chinese Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    description: "Crispy fried wingettes coated in tangy Schezwan pepper reduction."
  },
  {
    id: "chstart-5",
    name: "Chicken Chinese Lollipop",
    price: 570,
    category: "Chinese Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    description: "Coated in sweet spicy chilli garlic Chinese sauce."
  },
  {
    id: "chstart-6",
    name: "Garlic Chicken",
    price: 550,
    category: "Chinese Starters",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Tender chicken cooked with loads of chopped fried garlic and scallions."
  },
  {
    id: "chstart-7",
    name: "Paneer Chilli Dry",
    price: 470,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800",
    description: "Cottage cheese cubes wok-fried with crisp capsicum, onions and dark soy sauce.",
    isPopular: true
  },
  {
    id: "chstart-8",
    name: "Mushroom Chilli Dry",
    price: 470,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Fresh button mushrooms fried and tossed in spicy green chili garlic sauce."
  },
  {
    id: "chstart-9",
    name: "Veg Manchurian Dry",
    price: 430,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800",
    description: "Minced veggie balls tossed in ginger, garlic, soy and spring onions."
  },
  {
    id: "chstart-10",
    name: "Chaap Chilli",
    price: 399,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Crispy soya chaap strips stir-fried in Indo-Chinese chili paste."
  },
  {
    id: "chstart-11",
    name: "Crispy Honey Potato",
    price: 310,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800",
    description: "Golden potato fingers tossed in honey, chili sauce and toasted sesame seeds.",
    isPopular: true
  },
  {
    id: "chstart-12",
    name: "Crispy Chilli Potato",
    price: 370,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800",
    description: "Ultra-crispy fried potatoes coated with red chili sauce and peppers."
  },
  {
    id: "chstart-13",
    name: "Veg Salt N Pepper",
    price: 449,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    description: "Crispy mixed veggies tossed with cracked pepper, crushed garlic and scallions."
  },
  {
    id: "chstart-14",
    name: "Fried Corn",
    price: 310,
    category: "Chinese Starters",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800",
    description: "Crunchy sweet corn kernels seasoned with lime, garlic and Chinese herbs."
  },

  // VEG MAIN COURSE
  {
    id: "vmain-1",
    name: "Shahi Paneer",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Soft paneer cubes simmered in royal cashew and tomato velvet gravy.",
    isPopular: true,
    rating: 4.8
  },
  {
    id: "vmain-2",
    name: "Paneer Butter Masala",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Classic rich tomato butter gravy infused with kasuri methi and cream.",
    isPopular: true
  },
  {
    id: "vmain-3",
    name: "Paneer Lababdar",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Grated & cubed paneer cooked in onions, tomatoes and exotic spices."
  },
  {
    id: "vmain-4",
    name: "Kadhai Paneer",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Cottage cheese cooked with crushed coriander seeds and roasted bell peppers.",
    isSpicy: true
  },
  {
    id: "vmain-5",
    name: "Paneer Kali Mirch",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Paneer in rich white cashew gravy spiked with crushed black pepper."
  },
  {
    id: "vmain-6",
    name: "Malai Kofta",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    description: "Fried cottage cheese and potato dumplings in smooth sweet creamy gravy."
  },
  {
    id: "vmain-7",
    name: "Mix Veg",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    description: "Seasonal farm vegetables simmered in onion tomato masala."
  },
  {
    id: "vmain-8",
    name: "Dal Makhani",
    price: 419,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800",
    description: "Overnight slow-cooked black lentils enriched with butter, cream and garlic finish.",
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9
  },
  {
    id: "vmain-9",
    name: "Yellow Dal Tadka",
    price: 419,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    description: "Yellow arhar dal tempered with ghee, cumin, garlic and red chilli."
  },
  {
    id: "vmain-10",
    name: "Veg Masala Soya Chaap",
    price: 430,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Soya chaap chunks cooked in spicy thick gravy."
  },
  {
    id: "vmain-11",
    name: "Veg Kali Mirch Soya Chaap",
    price: 430,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Chaap cooked in black pepper infused creamy reduction."
  },
  {
    id: "vmain-12",
    name: "Veg Butter Soya Chaap",
    price: 430,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Soya chaap cooked in classic velvety tomato butter sauce."
  },
  {
    id: "vmain-13",
    name: "Matar Paneer",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Fresh green peas and paneer in spiced North Indian onion gravy."
  },
  {
    id: "vmain-14",
    name: "Matar Mushroom",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Button mushrooms and green peas in spicy semi-dry sauce."
  },
  {
    id: "vmain-15",
    name: "Mushroom Do Pyaza",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Mushrooms cooked with twice the quantity of onions and aromatic spices."
  },
  {
    id: "vmain-16",
    name: "Tawa Paneer",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Griddle-cooked paneer cubes tossed with chopped peppers and thick masala."
  },
  {
    id: "vmain-17",
    name: "Tawa Mushroom",
    price: 470,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Mushrooms sautéed on iron tawa with crushed roasted coriander."
  },
  {
    id: "vmain-18",
    name: "Tawa Chaap",
    price: 430,
    category: "Veg Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Street-style griddle fried soya chaap with spicy gravy."
  },

  // NON VEG MAIN COURSE
  {
    id: "nvmain-1",
    name: "Butter Chicken",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800",
    description: "Our signature tandoori roasted chicken cooked in creamy tomato butter sauce.",
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9
  },
  {
    id: "nvmain-2",
    name: "Boneless Butter Chicken",
    price: 480,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800",
    description: "Tender boneless chicken tikka pieces in signature creamy makhani gravy.",
    isPopular: true
  },
  {
    id: "nvmain-3",
    name: "Chaska Special Murgh Lazzat",
    price: 670,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "House special rich chicken dish cooked with minced chicken gravy and boiled egg garnish.",
    isChefSpecial: true,
    rating: 4.9
  },
  {
    id: "nvmain-4",
    name: "Chaska Special Boneless Murgh Lazzat",
    price: 730,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Boneless version of our famous royal Murgh Lazzat.",
    isChefSpecial: true
  },
  {
    id: "nvmain-5",
    name: "Chicken Rara",
    price: 670,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Chicken chunks cooked alongside spiced minced chicken keyma gravy.",
    isPopular: true
  },
  {
    id: "nvmain-6",
    name: "Chicken Curry",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Homestyle aromatic North Indian style chicken curry."
  },
  {
    id: "nvmain-7",
    name: "Chicken Masala",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Chicken cooked in thick roasted onion and tomato masala."
  },
  {
    id: "nvmain-8",
    name: "Kadhai Chicken",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Cooked with crushed coriander, bell peppers and wok-fried tomatoes.",
    isSpicy: true
  },
  {
    id: "nvmain-9",
    name: "Chicken Do Pyaza",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Chicken cooked with ring onions and whole spiced gravy."
  },
  {
    id: "nvmain-10",
    name: "Chicken Dahi Kali Mirch",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Velvety curd and crushed black pepper infused chicken."
  },
  {
    id: "nvmain-11",
    name: "Boneless Chicken Kali Mirch",
    price: 480,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Boneless chicken morsels in black pepper white cashew gravy."
  },
  {
    id: "nvmain-12",
    name: "Handi Chicken",
    price: 650,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Slow clay pot cooked chicken sealed with dough and aromatic mace."
  },
  {
    id: "nvmain-13",
    name: "Chicken Korma",
    price: 650,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Mughlai style chicken curry in rich fried onion and almond paste."
  },
  {
    id: "nvmain-14",
    name: "Chicken Lababdar",
    price: 440,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Creamy tomato & minced meat gravy with juicy chicken chunks."
  },
  {
    id: "nvmain-15",
    name: "Mutton Rogan Josh",
    price: 470,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Traditional Kashmiri lamb curry cooked with rattan jot, fennel and ginger.",
    isPopular: true,
    rating: 4.8
  },
  {
    id: "nvmain-16",
    name: "Mutton Curry",
    price: 470,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Slow-cooked tender goat meat in spicy onion garlic gravy."
  },
  {
    id: "nvmain-17",
    name: "Mutton Dahi Kali Mirch",
    price: 410,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Yogurt and black pepper gravy with tender mutton pieces."
  },
  {
    id: "nvmain-18",
    name: "Mutton Do Pyaza",
    price: 470,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Mutton cooked with caramelized and crunchy onions."
  },
  {
    id: "nvmain-19",
    name: "Mutton Masala",
    price: 480,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Thick robust roasted gravy mutton dish."
  },
  {
    id: "nvmain-20",
    name: "Mutton Rara",
    price: 470,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Mutton pieces cooked in spicy minced mutton keema gravy."
  },
  {
    id: "nvmain-21",
    name: "Mutton Handi",
    price: 470,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800",
    description: "Clay pot stewed mutton cooked on low flame."
  },
  {
    id: "nvmain-22",
    name: "Fish Curry",
    price: 750,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
    description: "Fresh Surmai fish cooked in mustard & coconut spicy tamarind curry."
  },
  {
    id: "nvmain-23",
    name: "Egg Curry",
    price: 310,
    category: "Non Veg Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800",
    description: "Hard-boiled eggs fried and cooked in spicy onion tomato gravy."
  },

  // CHINESE MAIN COURSE
  {
    id: "chmain-1",
    name: "Paneer Chilli Gravy",
    price: 470,
    category: "Chinese Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800",
    description: "Paneer cubes and bell peppers in glossy Indo-Chinese chili sauce."
  },
  {
    id: "chmain-2",
    name: "Mushroom Chilli Gravy",
    price: 470,
    category: "Chinese Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    description: "Button mushrooms in thick soy chili garlic gravy."
  },
  {
    id: "chmain-3",
    name: "Veg Manchurian Gravy",
    price: 440,
    category: "Chinese Main Course",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800",
    description: "Golden fried veg dumplings in rich dark brown ginger soy gravy."
  },
  {
    id: "chmain-4",
    name: "Chilli Chicken Boneless Gravy",
    price: 670,
    category: "Chinese Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Boneless chicken in rich fiery chili sauce with peppers.",
    isPopular: true
  },
  {
    id: "chmain-5",
    name: "Chilli Chicken With Bone Gravy",
    price: 650,
    category: "Chinese Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Bone-in chicken simmered in wok-tossed chili sauce."
  },
  {
    id: "chmain-6",
    name: "Chicken Manchurian Gravy",
    price: 670,
    category: "Chinese Main Course",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=800",
    description: "Chicken dumplings served in rich garlic scallion reduction."
  },

  // BREADS
  {
    id: "brd-1",
    name: "Tandoori Roti",
    price: 30,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Whole wheat flatbread baked in clay oven."
  },
  {
    id: "brd-2",
    name: "Butter Roti",
    price: 35,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Clay oven roti brushed with amul butter."
  },
  {
    id: "brd-3",
    name: "Missi Roti",
    price: 70,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Gram flour and wheat flatbread spiced with ajwain and herbs."
  },
  {
    id: "brd-4",
    name: "Butter Naan",
    price: 80,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Fluffy leavened bread slathered with pure melted butter.",
    isPopular: true
  },
  {
    id: "brd-5",
    name: "Lachha Parantha",
    price: 80,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Multi-layered crispy whole wheat tandoori paratha."
  },
  {
    id: "brd-6",
    name: "Green Chilli Parantha",
    price: 90,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Layered paratha stuffed with chopped green chillies.",
    isSpicy: true
  },
  {
    id: "brd-7",
    name: "Garlic Naan",
    price: 120,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Naan topped with chopped garlic and fresh cilantro.",
    isPopular: true
  },
  {
    id: "brd-8",
    name: "Paneer Stuffed Naan",
    price: 120,
    category: "Breads",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Soft naan packed with seasoned grated cottage cheese."
  },
  {
    id: "brd-9",
    name: "Keema Naan",
    price: 320,
    category: "Breads",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800",
    description: "Leavened bread stuffed with spicy minced mutton keema served with gravy."
  },

  // RICE & BIRYANI
  {
    id: "biry-1",
    name: "Chicken Masala Biryani",
    price: 380,
    category: "Rice & Biryani",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Long grain Basmati rice dum-cooked with spiced marinated chicken and saffron.",
    isPopular: true,
    rating: 4.8
  },
  {
    id: "biry-2",
    name: "Mutton Biryani",
    price: 380,
    category: "Rice & Biryani",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Fragrant basmati rice cooked with succulent lamb chunks, rose water and fried onions.",
    isPopular: true
  },
  {
    id: "biry-3",
    name: "Veg Biryani",
    price: 310,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Aromatic basmati rice layered with cottage cheese, green peas and whole spices."
  },
  {
    id: "biry-4",
    name: "Egg Biryani",
    price: 330,
    category: "Rice & Biryani",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    description: "Spiced basmati rice layered with golden fried hard boiled eggs."
  },
  {
    id: "rice-1",
    name: "Steamed Rice",
    price: 190,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=800",
    description: "Fluffy steamed long grain Royal Basmati rice."
  },
  {
    id: "rice-2",
    name: "Jeera Rice",
    price: 200,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80&w=800",
    description: "Basmati rice tempered with roasted cumin seeds and desi ghee."
  },

  // FRIED RICE & NOODLES
  {
    id: "frice-1",
    name: "Veg Fried Rice",
    price: 290,
    category: "Fried Rice & Noodles",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
    description: "Wok fried rice tossed with crunchy diced veggies and light soy sauce."
  },
  {
    id: "frice-2",
    name: "Chicken Fried Rice",
    price: 370,
    category: "Fried Rice & Noodles",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
    description: "Basmati rice stir-fried with shredded chicken, eggs and scallions.",
    isPopular: true
  },
  {
    id: "nood-1",
    name: "Veg Chowmein",
    price: 250,
    category: "Fried Rice & Noodles",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
    description: "Street-style stir-fried noodles with julienned cabbage, capsicum and carrots."
  },
  {
    id: "nood-2",
    name: "Hakka Noodles",
    price: 260,
    category: "Fried Rice & Noodles",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
    description: "Classic Chinese wok noodles seasoned with light pepper and sesame oil."
  },
  {
    id: "nood-3",
    name: "Chicken Chowmein",
    price: 350,
    category: "Fried Rice & Noodles",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
    description: "Tender chicken strips and noodles tossed over high flame."
  },
  {
    id: "nood-4",
    name: "Chicken Hakka Noodles",
    price: 350,
    category: "Fried Rice & Noodles",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
    description: "Savory Hakka noodles tossed with sliced chicken and veggies."
  },

  // ROLLS & SNACKS
  {
    id: "roll-1",
    name: "Paneer Tikka Roll",
    price: 240,
    category: "Rolls & Snacks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Grilled paneer tikka wrapped in flaky layered rumali roti with onions and mint sauce."
  },
  {
    id: "roll-2",
    name: "Chicken Tikka Roll",
    price: 280,
    category: "Rolls & Snacks",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Charcoal roasted chicken tikka wrapped in soft roti with tangy chutney."
  },
  {
    id: "roll-3",
    name: "Chicken Malai Tikka Roll",
    price: 290,
    category: "Rolls & Snacks",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800",
    description: "Creamy chicken tikka roll with rich cream spread and ring onions."
  },
  {
    id: "roll-4",
    name: "Mutton Seekh Kebab Roll",
    price: 280,
    category: "Rolls & Snacks",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Juicy mutton seekh kebab wrapped in hot rumali roti."
  },
  {
    id: "snack-1",
    name: "Veg Spring Roll",
    price: 290,
    category: "Rolls & Snacks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    description: "Crispy fried rolls packed with Chinese spiced vegetables served with sweet chili sauce."
  },

  // DESSERTS & DRINKS
  {
    id: "des-1",
    name: "Gulab Jamun with Ice Cream",
    price: 180,
    category: "Desserts & Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
    description: "Warm soft khoya dumplings soaked in cardamom syrup paired with vanilla ice cream.",
    isPopular: true
  },
  {
    id: "des-2",
    name: "Rasmalai (2 Pcs)",
    price: 210,
    category: "Desserts & Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
    description: "Soft chenna discs soaked in saffron chilled rabri topped with pistachios."
  },
  {
    id: "des-3",
    name: "Sizzling Brownie with Ice Cream",
    price: 260,
    category: "Desserts & Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    description: "Hot fudgy chocolate brownie on a sizzling iron skillet topped with vanilla scoop & fudge sauce.",
    isPopular: true
  },
  {
    id: "drk-1",
    name: "Fresh Lime Soda",
    price: 120,
    category: "Desserts & Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    description: "Refreshing sparkling drink served sweet, salted or mixed."
  },
  {
    id: "drk-2",
    name: "Cold Coffee with Ice Cream",
    price: 180,
    category: "Desserts & Drinks",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    description: "Thick creamy blended cold espresso topped with vanilla ice cream and chocolate drizzle."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Rohan Malhotra",
    rating: 5,
    comment: "Atmosphere and service is great and food is absolutely delicious. The Butter Chicken and Garlic Naan combo is out of this world!",
    date: "2 days ago",
    location: "Google Reviewer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-2",
    author: "Priya Sharma",
    rating: 5,
    comment: "Best place in Faridabad for tasty and quality food. World Street Omaxe atmosphere makes sitting outside with family so romantic and pleasant.",
    date: "1 week ago",
    location: "Google Reviewer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-3",
    author: "Amitabh Verma",
    rating: 5,
    comment: "Must try Butter Chicken and Dal Makhani! Soya Chaap and Tandoori chicken are exceptionally soft and juicy. Highly recommended.",
    date: "2 weeks ago",
    location: "Local Guide",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "rev-4",
    author: "Sneha Gupta",
    rating: 4,
    comment: "Excellent hospitality and fast service! The staff is very polite and the outdoor seating at Amsterdam Street is pet friendly.",
    date: "1 month ago",
    location: "Google Reviewer",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxury Dining Interior",
    category: "Interior",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    description: "Warm plush interior seating with designer lighting and rich gold accents."
  },
  {
    id: "gal-2",
    title: "Chaska Special Non Veg Platter",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    description: "Freshly roasted tandoori chicken, kebabs and grilled sea food."
  },
  {
    id: "gal-3",
    title: "Amsterdam Street Outdoor Seating",
    category: "Outdoor",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    description: "European style street dining ambiance at World Street Omaxe Sector 79."
  },
  {
    id: "gal-4",
    title: "Master Chef At Work",
    category: "Chef",
    imageUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200",
    description: "Our veteran North Indian chefs handcrafting authentic gravy masalas."
  },
  {
    id: "gal-5",
    title: "Rich Dal Makhani & Butter Naan",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1200",
    description: "Overnight simmered creamy Dal Makhani served with hot garlic butter naan."
  },
  {
    id: "gal-6",
    title: "Family Dining Area",
    category: "Dining",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200",
    description: "Spacious family booths designed for comfortable gatherings and celebrations."
  }
];

export const CATEGORIES = [
  "All",
  "Platters",
  "Soups",
  "Veg Starters",
  "Non Veg Starters",
  "Fried Starters",
  "Chinese Starters",
  "Veg Main Course",
  "Non Veg Main Course",
  "Chinese Main Course",
  "Breads",
  "Rice & Biryani",
  "Fried Rice & Noodles",
  "Rolls & Snacks",
  "Desserts & Drinks"
];
