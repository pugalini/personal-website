import clsx from 'clsx'

export interface Props {
  className?: string
}

const Typed = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-orange-300')}>
      <span>Typed</span>
    </div>
  )
}

export default Typed
