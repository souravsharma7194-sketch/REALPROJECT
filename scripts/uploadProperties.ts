
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { properties } from "@/data/data";

export const uploadProperties = async () => {
  console.log("UPLOAD FUNCTION CALLED"); // 👈 HERE

  const ref = collection(db, "properties");

  for (const property of properties) {
    await setDoc(doc(ref, property.id.toString()), property);
  }

  alert("✅ Properties uploaded successfully!");
};
