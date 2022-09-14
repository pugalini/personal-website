import clsx from 'clsx'

export interface Props {
  className?: string
}

const UkiAddress = ({ className }: Props) => {
  return (
    <div className={clsx(className,'mx-10','my-8')}>
     <div>Uki Coding School-Kilinochchi</div>
     <div>423 , Thirunagar Road</div>
     <div>Kilinochchi</div>
     <div>Batch of 2022</div>
    </div>
  )
}

export default UkiAddress
