import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const totalExperinceCalculate = (type: 'full' | 'short') => {
  const experiences = [
    { start: new Date('2023-11-01'), end: new Date() },
    { start: new Date('2022-08-01'), end: new Date('2023-05-31') },
    { start: new Date('2021-07-01'), end: new Date('2022-08-15') },
    { start: new Date('2020-04-01'), end: new Date('2021-03-31') }
  ];

  const totalMonths = experiences.reduce((acc, { start, end }) => {
    const months = (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
    return acc + months;
  }, 0);

  if (type === 'full') {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} ${years === 1 ? 'year' : 'years'}${months > 0 ? ` and ${months} ${months === 1 ? 'month' : 'months'}` : ''}`;
  } else {
    return `${(totalMonths / 12).toFixed(1)} years`;
  }
}
