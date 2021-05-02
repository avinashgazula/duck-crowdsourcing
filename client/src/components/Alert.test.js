import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Alert } from './Alert'

test('Alert', () => {
    const { getByText } = render(<Alert message={"Test alert message"} />)
    expect(getByText('Test alert message')).toBeInTheDocument()
})