import clsx from 'clsx'
import ukiLogo from '/home/ukistudent/personal-website/src/components/Footer/uki-logo.png'

export interface Props {
  className?: string
}

const UkiLogo = ({ className }: Props) => {
  return (
    <div className={clsx(className,'mx-10','my-8')}>
      <img alt='Uki logo' src={ukiLogo} className='h-24'/>
    </div>
  )
}

export default UkiLogo
