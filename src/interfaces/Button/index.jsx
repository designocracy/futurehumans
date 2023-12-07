import classNames from 'classnames'
import { Button as Btn } from '@nextui-org/react'

export default function Button({
  children,
  className,
  variant,
  size = 'py-[30px] px-[50px]',
  ...rest
}) {
  const classes = classNames(
    'leading-[90%] text-[17px]',
    variant && `bg-${variant}`,
    variant === 'secondary'
      ? 'data-[hover=true]:bg-primary text-white'
      : variant === 'primary'
        ? 'data-[hover=true]:bg-secondary text-white'
        : variant === 'transparent'
          ? 'text-dark border-2 border-dark data-[hover=true]:bg-primary data-[hover=true]:text-white data-[hover=true]:border-transparent'
          : '',
    size,
    className && className,
  )
  return (
    <Btn {...rest} className={classes}>
      {children}
    </Btn>
  )
}
