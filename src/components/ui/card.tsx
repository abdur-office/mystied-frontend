import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva('flex flex-col w-full  text-white transition-all', {
	variants: {
		padding: {
			none: 'p-0',
			default: 'p-4',
			sm: 'p-2',
			md: 'p-4',
			lg: 'p-6',
			xl: 'p-8',
		},
		rounded: {
			none: 'rounded-none',
			default: 'rounded-[6px]',
			sm: 'rounded-[4px]',
			md: 'rounded-[6px]',
			lg: 'rounded-[8px]',
			'22': 'rounded-[22px]',
			xl: 'rounded-[24px]',
			'3xl': 'rounded-3xl',
			full: 'rounded-full',
		},
		border: {
			none: 'border-none',
			default: 'border border-[#2A2A2D]',
			dark: 'border border-black/10',
		},
		bg: {
			default: 'bg-[#1C1C1E]',
			none: 'bg-none',
			transparent: 'bg-transparent',
			light: 'bg-white/10',
			dark: 'bg-black/10',
			primary: 'rgba(26, 28, 30, 1)',
		},
		shadow: {
			none: 'shadow-none',
			inset: 'shadow-[inset_0px_0px_14px_0px_rgba(54,50,72,0.4)]',
		},
	},
	defaultVariants: {
		padding: 'default',
		rounded: 'default',
		border: 'none',
		bg: 'default',
		shadow: 'inset',
	},
});

export interface CardProps
	extends React.ComponentProps<'div'>,
		VariantProps<typeof cardVariants> {}

function Card({
	className,
	padding,
	rounded,
	border,
	bg,
	shadow,
	...props
}: CardProps) {
	return (
		<div
			data-slot="card"
			className={cn(
				cardVariants({ padding, rounded, border, bg, shadow }),
				className
			)}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
				className
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-title"
			className={cn('leading-none font-semibold', className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-description"
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="card-content" className={cn(className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="card-footer"
			className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	cardVariants,
};
