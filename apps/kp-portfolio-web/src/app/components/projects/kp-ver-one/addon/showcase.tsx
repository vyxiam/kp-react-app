import styles from './../kp-ver-one.module.css'
import { KPAlert, Reveal, uuid } from '@kp-react-lib/kp-react-common';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTranslation } from 'react-i18next';
import EXAMPLE_1_OFF from '@/assets/projects/kp_v1/example_1_human.mp4'
import EXAMPLE_1_ON from '@/assets/projects/kp_v1/example_1_bot.mp4'
import EXAMPLE_2_OFF from '@/assets/projects/kp_v1/example_2_human.mp4'
import EXAMPLE_2_ON from '@/assets/projects/kp_v1/example_2_bot.mp4'

export function ShowcaseKPV1(){
  const {t} = useTranslation()
  const EXAMPLE_1 = [EXAMPLE_1_OFF, EXAMPLE_1_ON]
  const EXAMPLE_2 = [EXAMPLE_2_OFF, EXAMPLE_2_ON]
  return(
    <div className="max-w-4xl mx-auto px-4 sm:p-8 lg:p-12 relative z-10">
      <Reveal className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">{t('project.kp.v1.ui.showcase.example.action')}</h2>
      </Reveal>
      <Tabs defaultValue="example-1" className="w-full">
        <div className="flex justify-center mb-8">
          <Reveal className="text-center">
            <TabsList className="rounded-full p-1">
              <TabsTrigger value="example-1" className="rounded-full px-6 data-[state=active]:bg-yellow-300">
                <span>{t('project.kp.v1.ui.showcase.example.first')}</span>
              </TabsTrigger>
              <TabsTrigger value="example-2" className="rounded-full px-6 data-[state=active]:bg-yellow-300">
                <span>{t('project.kp.v1.ui.showcase.example.second')}</span>
              </TabsTrigger>
            </TabsList>
          </Reveal>
        </div>
        <TabsContent value="example-1">
          <Reveal>
            <KPAlert title={t('project.kp.v1.ui.showcase.example.alert.title')}>
              <span>{t('project.kp.v1.ui.showcase.example.alert.content')}</span>
            </KPAlert>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 place-items-center">
            {EXAMPLE_1.map((source, index) => (
              <div key={uuid()} className='flex flex-col justify-center items-center'>
                <Reveal tag={'h3'} className={`my-5 text-xl ${styles.cursive}`}>{index === 0 ?t('project.kp.v1.ui.showcase.example.off'):t('project.kp.v1.ui.showcase.example.on')}</Reveal>
                <Reveal tag={'p'} className={'mb-3'}>{index===0?t('project.kp.v1.ui.showcase.example.first.bot.off.description'):t('project.kp.v1.ui.showcase.example.first.bot.on.description')}</Reveal>
                <Reveal delay={0.2*index} className='w-[400px] h-[700px] mb-8'>
                  <video controls>
                    <source src={source} type='video/mp4'/>
                  </video>
                </Reveal>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="example-2">
          <Reveal>
            <KPAlert title={t('project.kp.v1.ui.showcase.example.alert.title')}>
              <span>{t('project.kp.v1.ui.showcase.example.alert.content')}</span>
            </KPAlert>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 place-items-center">
            {EXAMPLE_2.map((source, index) => (
              <div key={uuid()} className='flex flex-col justify-center items-center'>
                <Reveal tag={'h3'} className={`my-5 text-xl ${styles.cursive}`}>{index === 0 ?t('project.kp.v1.ui.showcase.example.off'):t('project.kp.v1.ui.showcase.example.on')}</Reveal>
                <Reveal tag={'p'} className={'mb-3'}>{index===0?t('project.kp.v1.ui.showcase.example.second.bot.off.description'):t('project.kp.v1.ui.showcase.example.second.bot.on.description')}</Reveal>
                <Reveal delay={0.2*index} className='w-[400px] h-[700px]'>
                  <video controls>
                    <source src={source} type='video/mp4'/>
                  </video>
                </Reveal>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default ShowcaseKPV1;
