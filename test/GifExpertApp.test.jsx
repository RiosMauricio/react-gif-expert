import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas sobre <GifExpertApp/>', () => {
    test('Debe agregar una categoria', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: "Messi" } });
        fireEvent.submit(form);

        const categories = screen.getAllByLabelText('category-title')
        expect(categories.length).toBeGreaterThan(0);

        // screen.debug();
    });

    test('No debe repetir categoria', () => {
        render(<GifExpertApp />);
        const title = 'Ronaldo';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: title } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: title } });
        fireEvent.submit(form);

        const categories = screen.getAllByText(title)
        expect(categories.length).toBe(1);

        // screen.debug();
    });

    test('Debe existir titulo', () => {
        render(<GifExpertApp />);
        const title = screen.getByLabelText('title-heading');
        
        expect(title).not.toBe(null);

        screen.debug();
    });
});