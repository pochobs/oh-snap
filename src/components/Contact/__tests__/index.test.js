import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact
        />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact 
         />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('H1 Contact me and Submit is displayed', () => {
    it('inserts text into H1 and button', () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId('contactme')).toHaveTextContent('Contact me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})