import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {

    const defaultProps = 'TODO';

    it('should render same text passed into title prop', () => {
        render(
            <Header 
              title= {defaultProps}
            />
        );
        const h1Element = screen.getByText(defaultProps);
        expect(h1Element).toBeInTheDocument();
    });

    // NOTE: if get quey does not find element , it will throw error
   

    it('should render same text and use getByTitle', () => {
        render(
            <Header 
              title= {defaultProps}
            />
        );
        const h1Element = screen.getByTitle('Header');
        expect(h1Element).toBeInTheDocument();
    });

    it('should render same text and use getById', () => {
        render(
            <Header 
              title= {defaultProps}
            />
        );
        const h1Element = screen.getByTestId('header-2');
        expect(h1Element).toBeInTheDocument();
    });


    // Find By is async => should use await, throw error if does not match element
    it('should render same text and use findByText',async () => {
        render(
            <Header 
              title= {defaultProps}
            />
        );
        const h1Element = await screen.findByText(defaultProps);
        expect(h1Element).toBeInTheDocument();
    });

    // Query by
    // it not throw error when no element match
    it('should render same text and use queryByTest', () => {
        render(
            <Header 
              title= {defaultProps}
            />
        );
        const h1Element =  screen.queryByText('hihi');
        expect(h1Element).not.toBeInTheDocument();
    });

})
