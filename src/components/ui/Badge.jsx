import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-blue-50 text-[#1A3B6B] border border-blue-200',
    accent: 'bg-amber-50 text-[#E2A03F] border border-amber-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    neutral: 'bg-gray-100 text-gray-700 border border-gray-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
