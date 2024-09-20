import { CSSProperties, PropsWithChildren } from 'react';
import '../sass/components/_card.scss';

type CardProps = PropsWithChildren<{
  number: number;
  name: string;
}>;

export default function Card({ number, name, children }: CardProps) {
  return (
    <div
      style={{ '--card-index': number } as CSSProperties}
      className={`card-${name}`}
    >
      {children}
    </div>
  );
}
