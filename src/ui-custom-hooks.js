import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActivePage, setMainMenuVisible } from './redux'

export function useClickOutsideListener(fn, ref) {
      useEffect(() => {
            const handleClick = (event) => {
                  // Check if click event target matches provided ref
                  !ref?.current?.contains(event.target) && fn()
            }

            // Add peace period to let inital click event pass before
            // adding listener
            window.addEventListener('pointerup', handleClick)

            return () => {
                  window.removeEventListener('pointerup', handleClick)
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [fn, ref])
}

export function usePageChangeListener(history, fn) {
      const [prevRoute, setPrevRoute] = useState();
      useEffect(() => {
            if (prevRoute !== history.location.pathname) {
                  setPrevRoute(history.location.pathname);
                  fn(history.location.pathname, prevRoute);
            }
      }, [fn, history, prevRoute]);
}

export const useDebounce = (func, wait, immediate) => {
      let timeout

      return function executedFunction(...args) {
            if (!timeout && immediate) {
                  func(...args)
            }
            const later = () => {
                  clearTimeout(timeout)
                  timeout = null
                  func(...args)
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
      }
}

export const usePageChanger = () => {
      const dispatch = useDispatch()
      const view = document.querySelector('.App');
      const goToPage = (pathname) => {
            const pagename = pathname.split('/')[1];
            const page = document.getElementById(pagename);
            if (!pagename.length) {
                  view.scrollTo({ top: '0', behavior: 'smooth' });
            } else {
                  view.scrollTo({
                        top: page.offsetTop - 100,
                        behavior: 'smooth',
                  });
            }
            dispatch(setMainMenuVisible(false))
      }

      return [goToPage]
}

export const useVisiblePageObserver = (viewRef, className) => {
      const dispatch = useDispatch()
      const [visiblePages, setVisiblePages] = useState({})
	useEffect(() => {
		const handleVisible = (elements) => {
			const page = elements[0].target
			setVisiblePages(visiblePages => ({...visiblePages, [page.dataset.pageUrl]: true}));
			dispatch(setActivePage(page.dataset.pageUrl))
		}
		const options = {
			root: viewRef.current,
			threshold: 0.6,
			
		} 
		const observer = new IntersectionObserver(handleVisible, options)

		const pages = document.querySelectorAll(className);

		pages.forEach(page => {
			observer.observe(page);
		});
		return () => {
			pages.forEach(page => {
				observer.unobserve(page);
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])
      return visiblePages
}

