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
        const inputEventElement = screen.getByTestId("content-input");
        fireEvent.change(inputEventElement, {target: {value:"harneet"}})
        const inputEmailElement = screen.getByTestId("content-input2");
        fireEvent.change(inputEmailElement, {target: {value:"test@test.com"}})
        fireEvent.click(buttonElement)
        const newEventNameCreated = screen.getByDisplayValue(/harneet/i)
        const newEventEmailCreated = screen.getByDisplayValue(/test@test.com/i)
        
    });

});