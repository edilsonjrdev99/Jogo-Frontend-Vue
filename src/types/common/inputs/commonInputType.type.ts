// TYPES
import type { LucideIconName } from '@/types/common/lucideIcons.type';

export interface CommonInputTypeProps {
	/**
	 * Label do input
	 * @var string
	 */
	label: string;

	/**
	 * Placeholder do input
	 * @var string
	 */
	placeholder: string;

	/**
	 * Id do input
	 * @var string
	 */
	id: string;

	/**
	 * Indica se o input é obrigatório ou opcional
	 * @var boolean
	 */
	required?: boolean;

	/**
	 * Tipo do input ('text' | 'password' | 'email' | 'number')
	 * @var CommonInputTypes
	 */
	type?: CommonInputTypes;

	/**
	 * Ícones da lib lucid
	 * @var LucideIconName
	 */
	icon?: LucideIconName;
}

export type CommonInputTypes = 'text' | 'password' | 'email' | 'number';