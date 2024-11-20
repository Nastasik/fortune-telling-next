import { FortuneCards } from '@pages/FortuneCards';
import { OtherCards } from '@pages/OtherCards';
import { RelationshipsCards } from '@pages/RelationshipsCards/ui/RelationshipsCards';
import { Suspense } from 'react';

const CARDS_LIST = {
    1: RelationshipsCards,
    2: FortuneCards,
    3: OtherCards
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug as string;
  const Component = slug ? CARDS_LIST[slug] : null
  return <Suspense><Component /></Suspense>
}