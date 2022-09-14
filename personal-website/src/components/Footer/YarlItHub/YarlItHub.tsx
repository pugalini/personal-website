import clsx from 'clsx'
import yarlitHub from '/home/ukistudent/personal-website/src/components/Footer/yarl-it-hub-logo.png'

export interface Props {
  className?: string
}

const YarlItHub = ({ className }: Props) => {
  return (
    <div className={clsx(className,'mx-10','my-8')}>
      <img alt='Yarl It Hub logo' src={yarlitHub} className='h-24'/>
    </div>
  )
}

export default YarlItHub
