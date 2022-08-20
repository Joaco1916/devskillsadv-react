import React from "react"
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils';
import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import NavBar from "../NavBar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

it('renders NavBar without crashing', async () => {
    const div = document.createElement('div')
    const root = createRoot(div);
    act(() => {
        root.render( 
            <QueryClientProvider client={queryClient}>
                <NavBar />
            </QueryClientProvider>
        )
    })
})


it("renders buttons correctly", async () => {
    const {getByTestId} = render(
        <QueryClientProvider client={queryClient}>
            <NavBar/>
        </QueryClientProvider>
    )
    await waitFor(() => {
        expect(getByTestId('navbar-home-label-button')).toHaveTextContent("Home")
        expect(getByTestId('navbar-other-page-button')).toHaveTextContent("Other page")
    })
})