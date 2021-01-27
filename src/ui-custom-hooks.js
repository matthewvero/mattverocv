import { useEffect } from "react";

export function useClickOutsideListener(fn, ref) {
      
      useEffect(() => {
            function handleClick(event) {
                  // Check if click event target matches provided ref
                  ref.current &&
                  !ref.current.contains( event.target ) &&
                  fn()
            }

            // Add peace period to let inital click event pass
            setTimeout(() => {
                  window.addEventListener('pointerup', handleClick);
                  
            }, 100);

            return () => {
                  // Unbind the event listener on clean up
                  document.removeEventListener("click", handleClick);
            };
      }, [fn, ref])
} 

export function useClickOutside(callback, visible, ref) {

      useEffect(() => {
            function handleClickOutside(event) {
                  // Close menu when clicked outside
                  visible  &&
                  !ref.current.contains(event.target) &&
                  callback()
            }

            // Bind the event listener
            document.addEventListener("click", handleClickOutside);
            return () => {
                  // Unbind the event listener on clean up
                  document.removeEventListener("click", handleClickOutside);
            };
      }, [callback, ref, visible]);
}