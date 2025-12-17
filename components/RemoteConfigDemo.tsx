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
    <div className="bg-green-600 text-white p-4 text-center">
      🎉 Remote Config Banner
    </div>
  );
}
