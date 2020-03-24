import React, {
  FC,
  ReactChild,
} from 'react'
import { SerializedStyles } from '@emotion/core'
import { useTransition } from 'react-spring'
import Portal from 'Components/Portal'
import Backdrop from 'Components/Backdrop'
import Overlay from './Overlay'

interface ModalProps {
  handleCloseModal: () => void
  show: boolean
  contentCSS?: SerializedStyles
  footer?: ReactChild
  footerCSS?: SerializedStyles
  header?: string
}

const Modal: FC<ModalProps> = ({
  handleCloseModal,
  show,
  ...rest
}) => {
  const backdropProps = useTransition(show, null, {
    enter  : { opacity: 1 },
    from   : { opacity: 0 },
    leave  : { opacity: 0 },
  })

  const overlayProps = useTransition(show, null, {
    enter: {
      opacity   : 1,
      transform : 'translateY(0)',
    },
    from: {
      opacity   : 0,
      transform : 'translateY(-10rem)',
    },
    leave: {
      opacity   : 0,
      transform : 'translateY(-10rem)',
    },
  })

  return (
    <Portal>
      {
        backdropProps.map(({
          item,
          key,
          props,
        }) => item && (
          <Backdrop
            key={ key }
            styles={ props }
            onClick={ handleCloseModal }
          />
        ))
      }
      {
        overlayProps.map(({
          item,
          key,
          props,
        }) => item && (
          <Overlay
            key={ key }
            styles={ props }
            { ...rest }
          />
        ))
      }
    </Portal>
  )
}

export default Modal
