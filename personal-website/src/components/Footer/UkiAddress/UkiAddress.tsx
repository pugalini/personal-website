import clsx from 'clsx'

export interface Props {
  className?: string
}

const UkiAddress = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-pink-500','mx-10','my-8')}>
      <span>UkiAddress</span>
    </div>
  )
}

export default UkiAddress
