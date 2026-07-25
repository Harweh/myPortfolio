/**
 * Joins conditional class names together, skipping falsy values.
 * Usage: cn('px-4', isActive && 'bg-green-500', error ? 'border-red-500' : 'border-white/10')
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(' ');
}