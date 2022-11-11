import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header"

describe('Image', () => {
    test('Image must have src = "https://img5.goodfon.com/wallpaper/nbig/1/da/ray-bilcliff-by-ray-bilcliff-beautiful-dawn-evening-landscap.jpg" and alt = "mountains"', () => {
      render(<Header />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', 'https://img5.goodfon.com/wallpaper/nbig/1/da/ray-bilcliff-by-ray-bilcliff-beautiful-dawn-evening-landscap.jpg');
      expect(image).toHaveAttribute('alt', 'mountains');
    });
  });