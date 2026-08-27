import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-12">
      <div className='flex items-center gap-4 '>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h2>
        <div className="h-[1px] flex-1 bg-zinc-100 dark:bg-zinc-800/50" />
      </div>
      {description && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-8">{description}</p>
      )}

    </div>
  );
}
