import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleParkDetails from '../SingleParkDetails'


describe("SingleParkDetails", ()=> {
    it('should render SingleParkDetails component and display image at top', () => {
        render(<SingleParkDetails image="park"/>)
        expect(screen.findAllByRole('img',{
            name: /park$/i}));
    });

})