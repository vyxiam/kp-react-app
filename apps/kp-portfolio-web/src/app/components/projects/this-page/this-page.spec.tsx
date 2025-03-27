import { render } from '@testing-library/react';

import ThisPage from './this-page';

describe('ThisPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThisPage />);
    expect(baseElement).toBeTruthy();
  });
});
