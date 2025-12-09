import type { Metadata } from 'next';
import PageClient from './page-client';

export const metadata: Metadata = {
	title: 'Typography',
	description:
		'Explore various typography styles and guidelines for consistent text presentation',
};

const Page = () => {
	return <PageClient />;
};

export default Page;
