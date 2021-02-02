import React, { useState } from 'react'
import { ButtonContainer } from './button.styles'

const Button = ({fn, children, style}) => {
      const [active, setActive] = useState(false);
      const handleClick = () => {
            setActive(false);
            fn&&
            fn()
      }
      const handleMouseOver = () => {
            
      }
      return (
            <ButtonContainer style={style} onPointerDown={() => setActive(true)} onPointerUp={handleClick} active={active} onMouseEnter={handleMouseOver}>
                  {children}
            </ButtonContainer>
      )
}

export default Button
