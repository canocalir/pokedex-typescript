import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, it } from "vitest";
import { store } from "../app/store";
import { BrowserRouter } from "react-router-dom";
import { DetailCardContainer } from "../components/DetailCard/DetailCard.styled";

describe("Detail Page render test", () => {
  it("detail page show up properly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DetailCardContainer/>
        </Provider>
      </BrowserRouter>
    );
  });
});
