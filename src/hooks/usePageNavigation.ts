import { useEffect, useState } from 'react';

type Page = 'home' | 'music' | 'ai' | 'dnd';

export function usePageNavigation() {
  const [activePage, setActivePage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      return (window.history.state?.page as Page) || 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || 'home';
      setActivePage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page) => {
    window.history.pushState({ page }, '', '');
    setActivePage(page);
  };

  const goHome = () => {
    if (window.history.state?.page !== 'home') {
        window.history.back();
    } else {
        window.history.replaceState({ page: 'home' }, '', '/');
        setActivePage('home');
    }
    };


  return { activePage, navigateTo, goHome };
}
