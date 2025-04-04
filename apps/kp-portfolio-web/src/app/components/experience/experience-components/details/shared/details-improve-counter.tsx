import { NumberCounter } from '@kp-react-lib/kp-react-common';

export function DetailsImproveCounter(){
  return (
    <div className='h-12 w-12 text-green-900 text-6xl mb-6 font-bold'>
      <NumberCounter from={0} to={6} duration={3}/>x
    </div>
  )
}

export default DetailsImproveCounter
