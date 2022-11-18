import { screen, render, fireEvent, userEvent, configure, getByRole, getByTitle, getAllByRole } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header"

describe('Image', () => {
    test('Image must have src = "https://store-images.s-microsoft.com/image/apps.21435.14012602786650760.c983ead2-6f07-48e2-8383-1e3f9958d48e.a552b600-c88f-4488-8523-35a8c79ec837" and alt = "mountains"', () => {
      render(<Header />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', 'https://store-images.s-microsoft.com/image/apps.21435.14012602786650760.c983ead2-6f07-48e2-8383-1e3f9958d48e.a552b600-c88f-4488-8523-35a8c79ec837');
      expect(image).toHaveAttribute('alt', 'mountains');
    });

  });