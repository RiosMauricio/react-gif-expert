import { render, screen } from "@testing-library/react"
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en GifItem', () => {
    const title = 'Messi';
    const url = 'https://youtube.com/';

    test('debe hacer match con snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el url y alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})