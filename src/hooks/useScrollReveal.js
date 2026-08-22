import { useEffect, useRef } from 'react'

export function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('active')
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [options])

  return ref
}
