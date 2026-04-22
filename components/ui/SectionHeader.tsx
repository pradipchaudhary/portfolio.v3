import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{title}</h2>
      <div className="h-[1px] flex-1 bg-zinc-100 dark:bg-zinc-800/50" />
    </div>
  );
};
