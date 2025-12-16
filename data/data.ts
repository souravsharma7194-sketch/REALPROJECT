/* 🔹 Property Type Definition */
export type PropertyStatus = "sale" | "rent";

export interface PropertyData {
  id: number;
  title: string;        // e.g. "3 BHK Apartment"
  location: string;
  price: string;        // keeping string (₹2.5 Cr, ₹50,000 / month)
  status: PropertyStatus;
  imageUrl: string;
  description: string;
}

/* 🔹 Properties Data */
export const properties: PropertyData[] = [
  // ------------------ SALE PROPERTIES ------------------
  {
    id: 1,
    title: "3 BHK Apartment",
    location: "Mumbai, Maharashtra",
    price: "₹2.5 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Modern 3 BHK apartment with sea view, located in South Mumbai. Close to schools and malls.",
  },
  {
    id: 2,
    title: "2 BHK Apartment",
    location: "Bengaluru, Karnataka",
    price: "₹1.8 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Elegant 2 BHK in Whitefield, near IT hubs. Spacious living area with modern amenities.",
  },
  {
    id: 3,
    title: "4 BHK Villa",
    location: "Delhi, Delhi",
    price: "₹3.2 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Luxury 4 BHK villa in South Delhi. Private garden, pool, and state-of-the-art interiors.",
  },
  {
    id: 4,
    title: "2 BHK Apartment",
    location: "Pune, Maharashtra",
    price: "₹1.2 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Cozy 2 BHK apartment in Koregaon Park. Near cafes, parks, and tech parks.",
  },
  {
    id: 5,
    title: "3 BHK Apartment",
    location: "Hyderabad, Telangana",
    price: "₹2.0 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/4393916/pexels-photo-4393916.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Modern 3 BHK in Hitech City, close to offices and shopping complexes. Fully furnished.",
  },

  // ------------------ RENTAL PROPERTIES ------------------
  {
    id: 6,
    title: "2 BHK Apartment",
    location: "Mumbai, Maharashtra",
    price: "₹50,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Fully furnished 2 BHK in Bandra, Mumbai. Near metro and local markets.",
  },
  {
    id: 7,
    title: "1 BHK Apartment",
    location: "Bengaluru, Karnataka",
    price: "₹35,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Compact 1 BHK apartment in Whitefield, ideal for IT professionals.",
  },
  {
    id: 8,
    title: "Luxury Villa",
    location: "Goa",
    price: "₹80,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Beachside villa available for rent. Fully furnished with pool and garden.",
  },
  {
    id: 9,
    title: "3 BHK Apartment",
    location: "Noida, Uttar Pradesh",
    price: "₹1.6 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Spacious 3 BHK apartment in Sector 62, Noida. Gated society with clubhouse and parking.",
  },
  {
    id: 10,
    title: "4 BHK Villa",
    location: "Gurugram, Haryana",
    price: "₹4.5 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Premium 4 BHK villa in DLF Phase 1 with private lawn and modern interiors.",
  },
  {
    id: 11,
    title: "2 BHK Apartment",
    location: "Chennai, Tamil Nadu",
    price: "₹95 Lakh",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/4393915/pexels-photo-4393915.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Well-ventilated 2 BHK apartment in OMR, close to IT parks and schools.",
  },
  {
    id: 12,
    title: "Studio Apartment",
    location: "Mumbai, Maharashtra",
    price: "₹1.1 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Compact studio apartment in Andheri West, ideal for working professionals.",
  },
  {
    id: 13,
    title: "3 BHK Villa",
    location: "Jaipur, Rajasthan",
    price: "₹1.9 Cr",
    status: "sale",
    imageUrl:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Independent 3 BHK villa with traditional design and modern amenities.",
  },
  {
    id: 14,
    title: "2 BHK Apartment",
    location: "Kolkata, West Bengal",
    price: "₹40,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Semi-furnished 2 BHK in Salt Lake City, near metro station.",
  },
  {
    id: 15,
    title: "3 BHK Apartment",
    location: "Ahmedabad, Gujarat",
    price: "₹55,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Spacious 3 BHK apartment in SG Highway with 24x7 security.",
  },
  {
    id: 16,
    title: "1 BHK Apartment",
    location: "Pune, Maharashtra",
    price: "₹28,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Affordable 1 BHK apartment in Hinjewadi, close to IT companies.",
  },
  {
    id: 17,
    title: "Luxury Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹1.5 Lakh / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Sea-facing penthouse with terrace and premium furnishings in Worli.",
  },
  {
    id: 18,
    title: "Farmhouse Villa",
    location: "Alibaug, Maharashtra",
    price: "₹90,000 / month",
    status: "rent",
    imageUrl:
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Peaceful farmhouse villa surrounded by greenery, ideal for weekend stays.",
  },





];
