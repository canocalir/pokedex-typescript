import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { Navbar } from "../views/Home";
import { BrowserRouter } from "react-router-dom";

test("Change theme", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );

  const lightModeButton = screen.getByTestId("light");
  fireEvent.click(lightModeButton);
  expect(screen.getByTestId("navbar").style.backgroundColor)

  const darkModeButton = screen.getByTestId("dark");
  fireEvent.click(darkModeButton);
  expect(screen.getByTestId("navbar").style.backgroundColor)
});
