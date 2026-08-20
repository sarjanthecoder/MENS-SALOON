import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    let mouseX = 0, mouseY = 0
    let outlineX = 0, outlineY = 0
    let raf

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.12
      outlineY += (mouseY - outlineY) * 0.12
      outline.style.left = `${outlineX}px`
      outline.style.top = `${outlineY}px`
      raf = requestAnimationFrame(animateOutline)
    }

    const onEnter = () => { dot.classList.add('hovered'); outline.classList.add('hovered') }
    const onLeave = () => { dot.classList.remove('hovered'); outline.classList.remove('hovered') }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    raf = requestAnimationFrame(animateOutline)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-outline" ref={outlineRef} aria-hidden="true" />
    </>
  )
}
