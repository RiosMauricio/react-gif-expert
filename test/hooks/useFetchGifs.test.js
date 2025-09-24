import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas sobre useFetchGif', () => {
    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Messi'));
        const { images, isLoading } = result?.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe traer imagenes e isLoading en falso', async () => {
        const { result } = renderHook(() => useFetchGifs('Messi'));

        await waitFor(
            () => expect(result?.current?.images?.length).toBeGreaterThan(0)
        );        

        const { images, isLoading } = result?.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});