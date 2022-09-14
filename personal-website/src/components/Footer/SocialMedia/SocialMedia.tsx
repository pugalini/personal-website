import clsx from 'clsx'
import { ReactComponent as FacebookLogo } from './facebook-logo.svg'
import { ReactComponent as GithubLogo } from './github-logo.svg'

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <div className='mx-11 my-8'>
    <ul className={clsx(className, 'flex gap-2')}>
      <li className="w-8">
        <a href="https://www.facebook.com/nitharsan" >
          <FacebookLogo className='fill-current' />
        </a>
      </li>
      <li className="w-8 ">
        <a href="https://www.github.com/pugalini" >
          <GithubLogo className='fill-current'/>
        </a>
      </li>
    
    </ul>
    </div>
  )
}

export default SocialMedia
