import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Header } from './Header'

test('Header test', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Duck Crowdsourcing')).toBeInTheDocument()
})