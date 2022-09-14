import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title'
import Subtitle from './Subtitle'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className,'flex justify-center')}>
 <span > <Avatar/>
 <Title/>
 <Subtitle/></span>
    </div>
  )
}

export default Hero
