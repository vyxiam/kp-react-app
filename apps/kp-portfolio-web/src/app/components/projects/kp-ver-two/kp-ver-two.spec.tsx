import { render } from '@testing-library/react';

import KpVerTwo from './kp-ver-two';

describe('KpVerTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KpVerTwo />);
    expect(baseElement).toBeTruthy();
  });
});
