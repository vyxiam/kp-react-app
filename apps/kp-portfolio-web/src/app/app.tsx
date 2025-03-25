import { KPLanguageSwitch, KPNavBar } from '@kp-react-lib/kp-react-common';
import { LANGUAGES, NAV_PROPS } from './components/shared/Constant';
import i18n from '../i18n';

export function App() {
  return (
    <div>
      <div>
        <KPNavBar props={NAV_PROPS} i18n={i18n}/>
      </div>
      <div>
        <KPLanguageSwitch langs={LANGUAGES} i18n={i18n}/>
      </div>
    </div>
  );
}

export default App;
