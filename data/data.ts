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
];
