// types/property.ts

// Property can be either for sale or rent
export type PropertyStatus = "sale" | "rent";

// Main property data structure
export interface PropertyData {
  id: number;
  title: string;        // e.g. "3 BHK Apartment"
  location: string;     // City, State
  price: string;        // ₹2.5 Cr, ₹50,000 / month
  status: PropertyStatus;
  imageUrl: string;
  description: string;
}
