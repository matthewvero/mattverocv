import { useEffect, useState } from "react";

export function useClickOutsideListener(fn, ref) {
      useEffect(() => {
            const handleClick = event => {
                  // Check if click event target matches provided ref
                        !ref?.current?.contains( event.target ) &&
                        fn();
            }
            
            // Add peace period to let inital click event pass before
            // adding listener
            window.addEventListener('pointerup', handleClick);
            
            return () => {
                  window.removeEventListener("pointerup", handleClick);
            };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [fn, ref]);
} 

export function usePageChangeListener(history, fn) {
      const [prevRoute, setPrevRoute] = useState()
      useEffect(() => {
            if (prevRoute !== history.location.pathname) {
                  setPrevRoute(history.location.pathname);
                  fn()
            }
      }, [fn, history, prevRoute])
}