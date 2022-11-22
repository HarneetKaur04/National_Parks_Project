import { render, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "../Auth0/auth-nav"

const user = {
    email: "johndoe@me.com",
    email_verified: true,
    sub: "google-oauth2|12345678901234"
  };

// intercept the useAuth0 function and mock it
jest.mock("@auth0/auth0-react")

describe("Navbar Component Tests - Logged in", () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
     useAuth0.mockReturnValue({
     isAuthenticated: true,
     user,
     logout: jest.fn(),
     loginWithRedirect: jest.fn(),
   })
 })
    test("Logout Button displays when logged in", () => {
        render(
                <AuthNav />
        );
        const loginButton = screen.getByText(/Log out/i);
        expect(loginButton).toBeInTheDocument();
    });

});
