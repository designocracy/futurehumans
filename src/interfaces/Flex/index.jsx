import classNames from 'classnames'

export default function Flex({ justify, align, children, className, inline }) {
  const classes = classNames(
    inline ? 'inline-flex' : 'flex',
    justify && `justify-${justify}`,
    align && `items-${align}`,
    className && className,
  )
  return <div className={classes}>{children}</div>
}
