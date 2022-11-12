import { screen, render, fireEvent, configure } from "@testing-library/react";
import USAMap from "react-usa-map";
import "@testing-library/jest-dom";
import Header from "../Header"

describe('Image', () => {
    test('Image must have src = "https://img5.goodfon.com/wallpaper/nbig/1/da/ray-bilcliff-by-ray-bilcliff-beautiful-dawn-evening-landscap.jpg" and alt = "mountains"', () => {
      render(<Header />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', 'https://img5.goodfon.com/wallpaper/nbig/1/da/ray-bilcliff-by-ray-bilcliff-beautiful-dawn-evening-landscap.jpg');
      expect(image).toHaveAttribute('alt', 'mountains');
    });

    // test("should call mapHandler callback when clicked on USA MAP", () => {
    //     const event = jest.fn();
    //     const { getByTestId } = render(<USAMap onClick={event}/>);
    //     const inputEventElement = getByTestId('content-input3');
    //     fireEvent.click(inputEventElement);
    //     expect(event).toHaveBeenCalled();
    //   });

  });