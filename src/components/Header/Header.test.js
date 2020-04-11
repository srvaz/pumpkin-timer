import React from 'react';
import { render } from '@testing-library/react';
import Header from './';

describe('Components > Header', () => {
  test('renders title', () => {
    const { getByText } = render(<Header title='Mock Title' />);
    const title = getByText('Mock Title');
    expect(title).toBeInTheDocument();
  });
});
