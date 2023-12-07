import classNames from 'classnames'

export default function Container({ children, className, containerMaxWidth = '1600px' }) {
  const containerClasses = classNames(
    'w-[100%] px-6 mx-auto',
    containerMaxWidth && `max-w-[${containerMaxWidth}]`,
    className && className,
  )
  return <div className={containerClasses}>{children}</div>
}
