/* eslint-disable import/no-extraneous-dependencies */
import {
  FC,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  portalElement?: HTMLElement
}

const portalRoot = document.getElementById('app-portal')!

const Portal: FC<PortalProps> = ({
  children,
  portalElement,
}) => {
  const mainDivRef = useRef(document.createElement('div'))

  const rootElement = useRef(portalElement || portalRoot)

  useEffect(() => {
    const element = rootElement.current,
          mainDiv = mainDivRef.current
    if (element && mainDiv) {
      element.appendChild(mainDiv)
    }
    return () => {
      if (element && mainDiv) {
        element.removeChild(mainDiv)
      }
    }
  }, [])

  return mainDivRef.current ? createPortal(children, mainDivRef.current) : null
}

export default Portal
