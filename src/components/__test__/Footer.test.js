import React from "react"
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils';
import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Footer from "../Footer";


it('renders Footer without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div);
    act(() => {
        root.render(<Footer />)
    })
})

it("renders labels correctly", async () => {
    const {getByTestId} = render(<Footer/>)
    await waitFor(() => {
        expect(getByTestId('footer-copyright-label')).toHaveTextContent("Copyright")
        expect(getByTestId('footer-right-reserved-label')).toHaveTextContent("All rights reserved")
    })
})