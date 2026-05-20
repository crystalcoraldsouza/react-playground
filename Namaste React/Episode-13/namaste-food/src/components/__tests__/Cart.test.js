import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

it("should load restaurant menu component", async () => {
  act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>,
    );
  });
  const accordionHeader1 = await screen.findByText(/Ice Creams/i);
  expect(accordionHeader1).toBeInTheDocument();

  const items1 = await screen.findAllByTestId("food-item");
  expect(items1).toHaveLength(3);

  const addItemsBtn = await screen.findAllByRole("button", { name: /Add/i });

  fireEvent.click(addItemsBtn[0]);

  const cartElement = screen.getByText(/Cart \(1\)/i);
  expect(cartElement).toBeInTheDocument();

  const accordionHeader2 = await screen.findByText(/Cakes/i);
  expect(accordionHeader2).toBeInTheDocument();

  fireEvent.click(accordionHeader2);

  const items2 = await screen.findAllByTestId("food-item");
  expect(items2).toHaveLength(2);

  const addItemsBtn2 = await screen.findAllByRole("button", { name: /Add/i });

  fireEvent.click(addItemsBtn2[1]);

  const cartElement2 = screen.getByText(/Cart \(2\)/i);
  expect(cartElement2).toBeInTheDocument();

  const cartItems = await screen.findAllByTestId("added-cart-item");
  expect(cartItems).toHaveLength(2);

  const clearCartBtn = await screen.findByRole("button", {
    name: /Clear Cart/i,
  });
  fireEvent.click(clearCartBtn);
  const emptyCartMessage = await screen.findByText(
    /Your cart is currently empty./i,
  );
  expect(emptyCartMessage).toBeInTheDocument();

  const cartItems2 = await screen.queryByTestId("added-cart-item");
  expect(cartItems2).not.toBeInTheDocument();
});
