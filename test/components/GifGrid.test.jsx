import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    const category = 'Messi';

    test('Debe de mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {
                id: 'asdad',
                title: 'Messi',
                url: 'https://www.youtube.com'
            },
            {
                id: '111111',
                title: 'ronaldo',
                url: 'https://www.google.com'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

    });
    screen.debug();
});