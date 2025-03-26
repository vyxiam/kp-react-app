import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import "./i18n"
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { MountainIcon } from 'lucide-react';
import { LANGUAGES, NAV_PROPS } from '@/app/components/shared/Constant';
import { KPHeader } from '@kp-react-lib/kp-react-common';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <>
          <KPHeader mainLogo={<MountainIcon className="h-6 w-6" />} mainTitle={'KARPORT'} navbarProps={NAV_PROPS} langs={LANGUAGES} i18n={i18n}/>
          <App />
        </>
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
