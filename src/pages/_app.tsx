import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';
import '@/styles/main.css';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '@/types';
import QueryProvider from '@/framework/client/query-provider';
import { CartProvider } from '@/store/quick-cart/cart.context';
import { getDirection } from '@/lib/constants';

const ToastContainer = dynamic(
  () => import('react-toastify').then((module) => module.ToastContainer),
  { ssr: false }
);

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: {
    //@ts-ignore
    session,
    ...pageProps
  },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const { locale } = useRouter();
  const dir = getDirection(locale);

  return (
    <>
      <div dir={dir}>
        {/* <SessionProvider session={session}> */}
          {/* <QueryProvider pageProps={pageProps}> */}
              {/* <CartProvider> */}
                <>
                  {getLayout(<Component {...pageProps} />) }
                  <ToastContainer autoClose={2000} theme="colored" />
                </>
              {/* </CartProvider> */}
          {/* </QueryProvider> */}
        {/* </SessionProvider> */}
      </div>
    </>
  );
}

export default appWithTranslation(CustomApp);
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
