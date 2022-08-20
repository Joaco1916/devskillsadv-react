import React from "react"
import { createRoot } from 'react-dom/client'
import Login from '../Login'
import { act } from 'react-dom/test-utils';
import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

it('renders Login without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div);
    act(() => {
        root.render(<Login />)
    })
})

it("renders button correctly", async () => {
    const {getByTestId} = render(<Login/>)
    await waitFor(() => {
        expect(getByTestId('login-button')).toHaveTextContent("Login")
    })
})