import type { NextPageWithLayout } from '@/types';
import type { InferGetStaticPropsType } from 'next';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useWindowSize } from '@/lib/use-window-size';
import { scroller } from 'react-scroll';
import HomeLayout from '@/components/layouts/_home';
// const CartCounterButton = dynamic(
//   () => import('@/components/cart/cart-counter-button'),
//   { ssr: false }
// );
const Compact = dynamic(() => import('@/components/layouts/compact'));

const MAP_LAYOUT_TO_GROUP: Record<string, any> = {
  compact: Compact,
};
const Home: NextPageWithLayout = ({ variables, layout }: any) => {
  const { query } = useRouter();
  const { width } = useWindowSize();

  const Component = MAP_LAYOUT_TO_GROUP[layout];
  return (
    <>
      <Component variables={variables} />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};

export default Home;
