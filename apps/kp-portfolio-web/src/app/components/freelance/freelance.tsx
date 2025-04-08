import PageTitle from '@/app/components/shared/page-title';
import ElasticCards from '@/app/components/freelance/landing/elastic-cards';
import { FREELANCE_CARDS } from '@/app/components/shared/Constant';

export function Freelance() {
  return (
    <>
      <PageTitle title={'freelance.page.title'}/>
      <ElasticCards content={FREELANCE_CARDS}/>
    </>
  );
}

export default Freelance;
