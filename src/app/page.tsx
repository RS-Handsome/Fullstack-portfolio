'use client'; // This directive allows you to use client-side features

import { useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Check if the Telegram object is available
    if (typeof window.Telegram !== 'undefined') {
        console.log('Telegram Web App is ready');
        console.log('Telegram Object:', window.Telegram);
        console.log('WebApp Object:', window.Telegram.WebApp);
    } else {
        console.error('Telegram Web App script not loaded');
    }
}, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-2xl">Hello World</h1>
      <Link href={"/test"}>Redirect to TestPage</Link>
    </div>
  );
}
