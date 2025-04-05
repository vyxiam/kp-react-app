import { NumberCounter } from '@kp-react-lib/kp-react-common';

export function DetailsImproveCounter(){
  return (
    <div className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-900 text-3xl md:text-4xl lg:text-5xl mb-6 font-bold'>
      <NumberCounter from={0} to={6} duration={3}/>x
    </div>
  )
}

export default DetailsImproveCounter
