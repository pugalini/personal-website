import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title'
import Typed from './Typed'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className,'flex justify-center','bg-blue-900')}>
 <span > <Avatar/>
 <Title/>
 <Typed/></span>
    </div>
  )
}

export default Hero
