import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Should load the header component", () => {
  it("Should display the logo", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();
  });
  it("Should have login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: /Login/i });
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });
  it("Should have 0 cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const cartElement = screen.getByText(/Cart \(0\)/i);
    expect(cartElement).toBeInTheDocument();
  });
  it("Should change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: /Login/i });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: /Logout/i });
    expect(logoutButton).toBeInTheDocument();
  });
});
