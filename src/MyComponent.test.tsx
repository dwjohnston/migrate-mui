import React from 'react';
import { render, screen } from '@testing-library/react';
import {MyComponent} from './MyComponent';

describe('<MyComponent/>', () => {
  it("Renders without error", () => {
    expect(() => render(<MyComponent />)).not.toThrow();
  }); 

  it("has some text", () => {
      render(<MyComponent/>); 

      const test = screen.getByText("this is a component"); 
      expect(test).toBeInTheDocument(); 
  })
});
