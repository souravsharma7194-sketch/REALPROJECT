"use client";

import { remoteConfig } from "@/firebase/firebaseConfig";
import { fetchAndActivate, getValue } from "firebase/remote-config";
import { useEffect, useState } from "react";

export default function ChatbotTest() {
  const [enableChatbot, setEnableChatbot] = useState(false);

  useEffect(() => {
    const runner = async () => {
      try {
        const activate = await fetchAndActivate(remoteConfig);
        console.log("activated", activate);

          const value = getValue(remoteConfig, "enableChatbot").asBoolean();
          console.log("enabled chatbot",value)
        setEnableChatbot(true);
      } catch (err) {
        console.log("error found", err);
      }
      }
      runner();

},[]);

    return(
        
           <div className="p-4">
      <h2 className="text-lg font-bold">Chatbot Test</h2>
      <p>
        Chatbot is:{" "}
        <span className={enableChatbot ? "text-green-600" : "text-red-600"}>
          {enableChatbot ? "ENABLED ✅" : "DISABLED ❌"}
        </span>
      </p>
    </div>
        
    )    
}
