import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import { ArrowRight, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { SKILLS_SOFT, SKILLS_TECHNICAL } from '@/app/components/shared/Constant';
import { DotPrimaryButton, uuid } from '@kp-react-lib/kp-react-common';
import Reveal from '@/app/components/shared/motion/Reveal';
import { useNavigate } from 'react-router';

export function Skills() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <section className="max-w-full mx-auto px-4 sm:p-8 lg:p-12 relative z-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">{t('summary.skills.title')}</h2>
      </motion.div>
      <Tabs defaultValue="technical" className="w-full">
        <div className="flex justify-center mb-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
            viewport={{ once: true }}
          >
            <TabsList className="rounded-full p-1">
              <TabsTrigger value="technical" className="rounded-full px-6 data-[state=active]:bg-yellow-300">
                Technical skills
              </TabsTrigger>
              <TabsTrigger value="soft" className="rounded-full px-6 data-[state=active]:bg-yellow-300">
                Soft skills
              </TabsTrigger>
            </TabsList>
          </motion.div>
        </div>
        <TabsContent value="technical">
          <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-4 lg:gap-8">
            {SKILLS_TECHNICAL.map((skill, i) => (
              <motion.div
                key={uuid()}
                className="border border-border rounded-lg shadow-sm divide-y divide-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
              >
                <Card
                  className={`relative overflow-hidden h-full "border-border/40 shadow-md" bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="border-b-2 pb-2">
                      <h3 className="text-2xl font-bold">{skill.title}</h3>
                      <p className="text-muted-foreground mt-2">{skill.description}</p>
                    </div>
                    <div>
                      <ul className="space-y-3 my-6 flex-grow">
                        {skill.content.map((item, j) => (
                          <li key={uuid()} className="flex items-center">
                            <Check className="mr-2 size-4 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="soft">
          <div className="w-[75%] lg:w-[90%] 2xl:w-[95%] mx-auto grid gap-6 lg:grid-cols-2 2xl:grid-cols-4 lg:gap-8">
            {SKILLS_SOFT.map((skill, i) => (
              <motion.div
                key={uuid()}
                className="border border-border rounded-lg shadow-sm divide-y divide-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
              >
                <Card
                  className={`relative overflow-hidden h-full "border-border/40 shadow-md" bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="border-b-2 pb-2">
                      <h3 className="text-2xl font-bold">{skill.title}</h3>
                      <p className="text-muted-foreground mt-2">{skill.description}</p>
                    </div>
                    <p className="pt-4">
                      <span>{skill.content}</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Reveal className={'flex mt-10 text-center justify-center'}>
        <DotPrimaryButton onClick={() => navigate('/detailed-skills')} text={t('summary.experience.detailed.skills.button')}><ArrowRight className="ml-2 h-4 w-4" /></DotPrimaryButton>
      </Reveal>

    </section>
  );
}

export default Skills;
