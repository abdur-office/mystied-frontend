"use client";

import { Check, Copy } from "lucide-react"; // optional icons, OR remove
import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 rounded bg-white/5 p-1 transition hover:bg-white/10"
    >
      {copied ? (
        <Check className="text-theme-green h-4 w-4" />
      ) : (
        <Copy className="text-theme-sky h-4 w-4" />
      )}
    </button>
  );
}
