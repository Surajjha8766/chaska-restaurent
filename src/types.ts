export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  subCategory?: string;
  isVeg: boolean;
  image: string;
  description: string;
  isSpicy?: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  rating?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Interior' | 'Dining' | 'Food' | 'Chef' | 'Outdoor';
  imageUrl: string;
  description: string;
}

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'Indoor' | 'Outdoor' | 'Family Dining';
  specialRequest: string;
  preOrderItems?: OrderItem[];
}
