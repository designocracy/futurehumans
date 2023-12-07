import classNames from 'classnames'

export default function Container({ children, className }) {
  const containerClasses = classNames(
    'w-[100%] max-w-[1550px]  px-6 mx-auto',
    className && className,
  )
  return <div className={containerClasses}>{children}</div>
}
