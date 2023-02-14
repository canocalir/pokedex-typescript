import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import { PokeCardButton } from "../components/PokeCard/PokeCard.styled";
import { Provider } from "react-redux";
import { store } from "../app/store";

const Button = ({ onClick, children }: any) => (
  <PokeCardButton onClick={onClick}>{children}</PokeCardButton>
);

test("Evolution button click", () => {
  const handleClick = vitest.fn();
  render(
    <Provider store={store}>
      <Button onClick={handleClick}>Evolution of Venusaur</Button>
    </Provider>
  );
  fireEvent.click(screen.getByText(/Evolution of Venusaur/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
