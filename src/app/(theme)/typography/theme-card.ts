import { cardVariants } from '@/components/ui/card';
import { VariantProps } from 'class-variance-authority';

export type CardPadding = VariantProps<typeof cardVariants>['padding'];
export type CardRounded = VariantProps<typeof cardVariants>['rounded'];
export type CardBorder = VariantProps<typeof cardVariants>['border'];
export type CardBg = VariantProps<typeof cardVariants>['bg'];

export type ThemeCard = {
	name: string;
	padding: CardPadding;
	rounded: CardRounded;
	border: CardBorder;
	bg: CardBg;
	example: string;
	shadow: VariantProps<typeof cardVariants>['shadow'];
};

export const themeCards: ThemeCard[] = [
	{
		name: 'Default Card [shadow inset ; bg-[#1C1C1E]; rounded-[6px] ; p-4 ]',
		padding: 'default',
		rounded: 'default',
		border: 'none',
		bg: 'default',
		shadow: 'inset',
		example: `<Card >Default Card</Card>`,
	},
	{
		name: 'Default Card [shadow inset ; bg-[#1C1C1E]; rounded-[6px] ; p-4 ]',
		padding: 'default',
		rounded: 'default',
		border: 'none',
		bg: 'default',
		shadow: 'inset',
		example: `<Card >Default Card</Card>`,
	},
];
