import { ReactNode } from 'react';
import '../sass/components/_bento-grid.scss';

export default function BentoGrid({ children }: { children: ReactNode }) {
  return <div className="bento">{children}</div>;
}
