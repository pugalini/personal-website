import clsx from 'clsx'

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <div className={clsx(className,'bg-pink-600','mx-11','my-8')}>
      <span>SocialMedia</span>
    </div>
  )
}

export default SocialMedia
