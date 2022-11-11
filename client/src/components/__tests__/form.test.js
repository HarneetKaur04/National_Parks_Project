import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../form"

describe("Form", ()=> {
    it('should render form component and display form fields and a button', () => {
        const mockEventForm = jest.fn();
        render(<Form />)
        expect(screen.getByText("LOVE National Parks?")).toBeInTheDocument();
        expect(screen.getByText("First Name")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /Submit/i })).toBeInTheDocument();
    });

    it('should let user input values into form and show success message when clicked on submit button', () => {
        const mockEventForm = jest.fn();
        render(<Form />)
        const buttonElement = screen.getByRole("button", {name: /Submit/i })
        const inputEventElement = screen.getByTestId("add-event-name")
        fireEvent.change(inputEventElement, {target: {value:"Thanksgiving Party"}})
        const inputDateElement = screen.getByTestId("add-event-date")
        fireEvent.change(inputDateElement, {target: {value:"2022-10-20"}})
        fireEvent.click(buttonElement)
        const newEventCreated = screen.getByDisplayValue(/Thanksgiving Party/i)
        const newEventDateCreated = screen.getByDisplayValue(/2022-10-20/i)
        
    });

});