'use client'
import "./globals.css";
import { useState } from "react";
import Urltab from "./url_tab";
import Imgtab from "./img_tab";

export default function Home() {
  const [showUrl, setShowUrl] = useState(true);

  return (
    <div className="bg-cream w-4/5 flex flex-col justify-center items-center">
      <div>
        <button 
          className={`text-white rounded-t-4xl border-x-4 border-t-4 px-20 py-3 mx-5 
            ${showUrl ? "bg-custom-brown border-custom-brown" : "bg-light-orange border-dark-orange"}`}
          onClick={() => setShowUrl(true)}
        >
        url
        </button>
        <button 
          className={`text-white rounded-t-4xl border-x-4 border-t-4 px-8 py-3 mx-5
            ${!showUrl ? "bg-custom-brown border-custom-brown" : "bg-light-orange border-dark-orange"}`}
          onClick={() => setShowUrl(false)}
        >
          drag & drop
        </button>
      </div>

      {showUrl ? <Urltab /> : <Imgtab />}
    </div>
  );
}
