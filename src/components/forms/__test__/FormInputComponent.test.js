import React from "react"
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils';
import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import FormInputComponent from "../FormInputComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

it('renders FormInputComponent without crashing', () => {
    const div = document.createElement('div')
    const root = createRoot(div);
    act(() => {
        root.render(
            <QueryClientProvider client={queryClient}>
                <FormInputComponent />
            </QueryClientProvider>
        )
    })
})

it("renders inputs correctly", async () => {
    const {getByTestId} = render(
        <QueryClientProvider client={queryClient}>
            <FormInputComponent />
        </QueryClientProvider>
    )
    await waitFor(() => {
        expect(getByTestId('forms-first-name-input')).toHaveTextContent("First Name")
        expect(getByTestId('forms-last-name-input')).toHaveTextContent("Last Name")
        expect(getByTestId('forms-address-input')).toHaveTextContent("Address")
        expect(getByTestId('forms-ssn-input')).toHaveTextContent("SSN")
    })
})