'use client';

import { Check, Copy } from 'lucide-react'; // optional icons, OR remove
import { useState } from 'react';

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
			className="ml-2 p-1 rounded bg-white/5 hover:bg-white/10 transition"
		>
			{copied ? (
				<Check className="w-4 h-4 text-theme-green" />
			) : (
				<Copy className="w-4 h-4 text-theme-blue" />
			)}
		</button>
	);
}
