"use client";

import { remoteConfig } from "@/firebase/firebaseConfig";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { useState, useEffect } from "react";

export default function RemoteConfigDemo() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const activated = await fetchAndActivate(remoteConfig);
        console.log("Remote config activated:", activated);

        const value = getValue(remoteConfig, "show_banner").asBoolean();
        console.log("show_banner value:", value);

        setShowBanner(value);
      } catch (err) {
        console.error("Remote Config error:", err);
      }
    };

    run();
  }, []);

  if (!showBanner) return null;

  return (
   <div className="bg-green-600 text-white p-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2">
  <span className="text-lg font-semibold">
    🏡 Special Offer!
  </span>
  <span>
    Zero brokerage on selected properties — Limited time only!
  </span>
  <a
    href="/explore"
    className="bg-white text-green-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-100 transition"
  >
    View Properties
  </a>
</div>

  );
}
