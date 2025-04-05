import { NumberCounter } from '@kp-react-lib/kp-react-common';

export function DetailsComponentCounter(){
  return (
    <div className='h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-900 text-3xl md:text-4xl lg:text-5xl mb-6 font-bold'>
      <NumberCounter from={1} to={100} duration={3}/>+
    </div>
  )
}

export default DetailsComponentCounter
