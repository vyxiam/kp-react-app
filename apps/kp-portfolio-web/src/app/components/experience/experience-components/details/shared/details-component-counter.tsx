import { NumberCounter } from '@kp-react-lib/kp-react-common';

export function DetailsComponentCounter(){
  return (
    <div className='h-12 w-12 text-green-900 text-6xl mb-6 font-bold'>
      <NumberCounter from={1} to={100} duration={3}/>+
    </div>
  )
}

export default DetailsComponentCounter
