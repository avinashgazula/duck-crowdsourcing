import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { SubmitResponse } from './SubmitResponse'

test('Submit Response', () => {
    const { getByPlaceholderText } = render(<SubmitResponse />)
    const timeInput = getByPlaceholderText("Time of day fed (00:00 - 23:59)")
    fireEvent.change(timeInput, { target: { value: '10:00' } })
    expect(timeInput.value).toBe('10:00')

    const foodInput = getByPlaceholderText("Type of food")
    fireEvent.change(foodInput, { target: { value: 'bread' } })
    expect(foodInput.value).toBe('bread')

    const locationInput = getByPlaceholderText("Location")
    fireEvent.change(locationInput, { target: { value: 'Park' } })
    expect(locationInput.value).toBe('Park')

    const numInput = getByPlaceholderText("Number of ducks")
    fireEvent.change(numInput, { target: { value: '10' } })
    expect(numInput.value).toBe('10')

    const countInput = getByPlaceholderText("Quantity (oz)")
    fireEvent.change(countInput, { target: { value: '10' } })
    expect(countInput.value).toBe('10')
})