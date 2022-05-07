import type { FC, ReactNode } from 'react';

export interface SectionInlineProps {
  label: ReactNode;
  showArrow: boolean;
  onClick: () => void;
}

export interface SectionInlineGroupProps {}

declare const SectionInline: FC<Partial<SectionInlineProps>>;

declare const SectionInlineGroup: FC<Partial<SectionInlineGroupProps>>;
