import clsx from 'clsx'
import SocialMedia from './SocialMedia'
import UkiAddress from './UkiAddress'
import UkiLogo from './UkiLogo'
import YarlItHub from './YarlItHub'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={clsx(className,'flex justify-between','flex-wrap ')}>
      <div  className={clsx(className,'flex ',' flex-wrap ')}>
        <YarlItHub/>
        <UkiLogo/>
        <UkiAddress/>
        </div>
        <div className={clsx(className,'flex ')}>
      <SocialMedia/>
      </div>
     
  
    
    </footer>
  )
}

export default Footer
