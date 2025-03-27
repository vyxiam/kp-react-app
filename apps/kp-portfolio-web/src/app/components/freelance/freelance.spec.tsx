import { render } from '@testing-library/react';

import Freelance from './freelance';

describe('Freelance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Freelance />);
    expect(baseElement).toBeTruthy();
  });
});
