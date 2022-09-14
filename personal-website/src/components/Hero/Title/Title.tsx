import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <h1
      className={clsx(
        className,
        'flex justify-center',
        'font-accent font-bold',
        'text-5xl md:text-6xl lg:text-7xl',
        '-rotate-2 -translate-y-10 md:-translate-y-15 lg:-translate-y-10',
        'drop-shadow-2xl'
      )}
    >
      Pugalini.M
    </h1>
  )
}

export default Title
