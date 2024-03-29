import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
// import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
// import { authorizationAtom } from '@/store/authorization-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { useMemo } from 'react';
// import GroupsDropdownMenu from './menu/groups-menu';
// import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
// import LanguageSwitcher from '@/components/ui/language-switcher';

// const Search = dynamic(() => import('@/components/ui/search/search'));
// const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
//   ssr: false,
// });

const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout?: string }) => {
  const { t } = useTranslation('common');
  // const { show, hideHeaderSearch } = useHeaderSearch();
  // const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  // const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();
  const isMultilangEnable =
    process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
    !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;

  // useEffect(() => {
  //   if (!isHomePage) {
  //     hideHeaderSearch();
  //   }
  // }, [isHomePage]);
  // const isFlattenHeader = useMemo(
  //   () => !show && isHomePage && layout !== 'modern',
  //   [show, isHomePage, layout]
  // );
  return (
    <header
      className={cn(
        'site-header-with-search  top-0 z-50 h-14 w-full md:h-16 lg:h-22',
        {
          'lg:!h-auto': '',
          fixed: isHomePage,
          sticky: !isHomePage,
        }
      )}
    >
      <div
        className={cn(
          ' flex h-14 w-full transform-gpu items-center justify-between border-b border-border-200 bg-light px-4 py-5 shadow-sm transition-transform duration-300 md:h-16 lg:h-22 lg:px-8',
          {
            'lg:absolute lg:border-0 lg:bg-transparent lg:shadow-none':
              '',
          }
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          <Logo
            className={`${ 'ltr:ml-0 rtl:mr-0'}`}
          />


          <div className="hidden ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto xl:block">
            {/* <GroupsDropdownMenu /> */}
          </div>
        </div>
        
        <ul className="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
          <StaticMenu />
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 shrink-0 items-center justify-center rounded border border-transparent bg-accent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-accent-hover focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
            >
              Seller
            </a>
            <li><JoinButton /></li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
