import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { GlobalProvider } from '../context/GlobalState';
import { Responses } from './Responses';

describe("Responses test", () => {
    it("load responses on mount", async () => {
        const { getByText } = render(
            <GlobalProvider>
                <Responses />
            </GlobalProvider>)
        expect(getByText('Not enough data available')).toBeInTheDocument()
    })
})
