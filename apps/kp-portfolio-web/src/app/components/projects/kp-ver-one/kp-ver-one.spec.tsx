import { render } from '@testing-library/react';

import KpVerOne from './kp-ver-one';

describe('KpVerOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KpVerOne />);
    expect(baseElement).toBeTruthy();
  });
});
