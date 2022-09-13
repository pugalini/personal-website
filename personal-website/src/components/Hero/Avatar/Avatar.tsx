import clsx from 'clsx'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-slate-500')}>
      <span>Avatar</span>
    </div>
  )
}

export default Avatar
