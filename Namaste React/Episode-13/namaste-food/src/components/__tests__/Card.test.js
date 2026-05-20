import { fireEvent, render, screen } from "@testing-library/react";
import Card, { withDiscountedLabel } from "../Card";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/cardMock.json";

describe("Should load the Card component", () => {
  it("Should display the restaurant name", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Card {...MOCK_DATA} />
        </Provider>
      </BrowserRouter>,
    );
    const restaurantName = screen.getByText(MOCK_DATA.name);
    expect(restaurantName).toBeInTheDocument();
  });
  it("Should display the discounted label", () => {
    const DiscountedCard = withDiscountedLabel(Card);
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <DiscountedCard {...MOCK_DATA} />
        </Provider>
      </BrowserRouter>,
    );
    const discountedLabel = screen.getByText(
      MOCK_DATA.aggregatedDiscountInfoV3.header,
    );
    expect(discountedLabel).toBeInTheDocument();
  });
});
