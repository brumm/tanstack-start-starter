import { ClassValue, clsx } from 'clsx'
import { twMerge as twMergeOriginal } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMergeOriginal(clsx(...args))
}
