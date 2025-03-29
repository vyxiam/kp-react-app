import MyName from '@/app/components/summary/summary-components/my-name';
import Experience from '@/app/components/summary/summary-components/experience';
import PageTitle from '@/app/components/shared/page-title';
import SectionDivider from '@/app/components/shared/section-divider';
import PaidFreelance from '@/app/components/summary/summary-components/paid-freelance';
import Skills from '@/app/components/summary/summary-components/skills';

export function Summary() {
  return (
    <>
      <PageTitle title={'summary.page.title'}/>
      <div className="flex flex-col">
      {/*<div className="flex flex-col bg-slate-400 sm:bg-red-500 md:bg-pink-400 lg:bg-orange-300 xl:bg-blue-300 2xl:bg-green-400">*/}
        <MyName/>
        <SectionDivider />
        <Experience/>
        <PaidFreelance/>
        <SectionDivider />
        <Skills/>
        <SectionDivider />
      </div>
    </>
  );
}

export default Summary;
