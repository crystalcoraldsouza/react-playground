import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListMock.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
global.IntersectionObserver = class {
  constructor() {}

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
};

beforeAll(() => {
  console.log("Before all tests");
});

beforeEach(() => {
  console.log("Before each test");
});

afterAll(() => {
  console.log("After all tests");
});

afterEach(() => {
  console.log("After each test");
});

it("Should render Body with Search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();

  const cards = await screen.findAllByTestId("card");
  expect(cards.length).toBe(9);

  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);

  const filteredCards = await screen.findAllByTestId("card");
  expect(filteredCards.length).toBe(1);
});

it("Should filter restaurants based on search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    ),
  );
  const topRatedRestaurants = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedRestaurants).toBeInTheDocument();

  const cards = await screen.findAllByTestId("card");
  expect(cards.length).toBe(9);

  fireEvent.click(topRatedRestaurants);

  const filteredCards = await screen.findAllByTestId("card");
  expect(filteredCards.length).toBe(3);
});
