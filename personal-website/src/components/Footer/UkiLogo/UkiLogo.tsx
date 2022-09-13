import clsx from 'clsx'

export interface Props {
  className?: string
}

const UkiLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-pink-400','mx-10','my-8')}>
      <span>UkiLogo</span>
    </div>
  )
}

export default UkiLogo
