import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-lime-200')}>
      <span>Title</span>
    </div>
  )
}

export default Title