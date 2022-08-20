import React from "react"
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils';
import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import About from "../About";

it('renders About without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div);
    act(() => {
        root.render(<About />)
    })
})

it("renders title and subtitle correctly", async () => {
    const {getByTestId} = render(<About/>)
    await waitFor(() => {
        expect(getByTestId('about-title')).toHaveTextContent("Devs Skills adv - React challenge - NewCombin")
        expect(getByTestId('about-subtitle')).toHaveTextContent("Lorem ipsum dolor sit amet.")
    })
})