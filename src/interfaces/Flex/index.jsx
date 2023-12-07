import classNames from 'classnames'

export default function Flex({ justify, align, children, className }) {
  const classes = classNames(
    'flex',
    justify && `justify-${justify}`,
    align && `items-${align}`,
    className && className,
  )
  return <div className={classes}>{children}</div>
}
