import PageTitle from '@/app/components/shared/page-title';
import ElasticCards from '@/app/components/freelance/landing/elastic-cards';
import { FREELANCE_CARDS } from '@/app/components/shared/Constant';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import {
  GlitchTitle,
  KPOutlineButton,
  Reveal,
} from '@kp-react-lib/kp-react-common';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export function Freelance() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <>
      <PageTitle title={'freelance.page.title'}/>
      <div className='hidden md:block'>
        <ElasticCards content={FREELANCE_CARDS}/>
      </div>
      <Reveal className='md:hidden flex flex-col justify-center items-center'>
        <Carousel className="w-full max-w-xs sm:max-w-md h-full sm:max-h-md max-h-xs max-w-xs flex flex-col">
          <CarouselContent>
            {FREELANCE_CARDS.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-0">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center">
                      <img src={item.img} alt={item.title} className={`aspect-square w-full h-full object-cover object-center`}/>
                      <h4 className={'clear-both inline-block relative uppercase overflow-hidden my-[0.5em]'}>{t(item.type)}</h4>
                      <h2 className={'text-blue-200 text-4xl text-center clear-both inline-block relative uppercase overflow-hidden mb-[0.3em]'}>{t(item.title)}</h2>
                      <h5 className={'clear-both inline-block relative overflow-hidden mb-[0.3em]'} dangerouslySetInnerHTML={{__html: t(item.period)}}></h5>
                      <div className='h-8 mb-[1em]'>
                        <GlitchTitle
                          tag={'h3'}
                          randomColor={`${item.completed ? 'text-green-500' : 'text-yellow-400'}`}
                          className={`text-2xl ${item.completed?'text-green-500':'text-yellow-400'}`}
                          title={item.completed?t('freelance.projects.completed'):t('freelance.projects.development')}/>
                      </div>
                      <div className='flex justify-center z-50'>
                        <KPOutlineButton text={t('freelance.projects.check.out')} onClick={() => navigate(item.link)}/>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=""/>
          <CarouselNext className=""/>
        </Carousel>
      </Reveal>
    </>
  );
}

export default Freelance;
