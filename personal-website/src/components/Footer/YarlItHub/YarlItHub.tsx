import clsx from 'clsx'

export interface Props {
  className?: string
}

const YarlItHub = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-pink-300','mx-10','my-8')}>
      <span>YarlItHub</span>
    </div>
  )
}

export default YarlItHub
