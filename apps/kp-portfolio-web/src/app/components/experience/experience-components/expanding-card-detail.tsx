export function ExpandingCardDetail({location, title, period, fullsize}:{location: string, title: string, period: string, fullsize: boolean}){
  return (
    <div className={'absolute bottom-0 right-0 m-28'}>
      <h4 className={'float-right pl-[0.5em] clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{location}</h4>
      <h2 className={'float-right pl-[0.5em] text-4xl clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'} style={{ color: '#f7ca18'}}>{title}</h2>
      <h5 className={'float-right pl-[0.5em] clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{period}</h5>
    </div>
  )
}

export default ExpandingCardDetail;
