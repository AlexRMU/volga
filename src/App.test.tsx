import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("компонент успешно запустился", () => {
    render(<App />);
    expect(screen.getByText("Start Now")).toBeInTheDocument();
});

test("кнопка на начальном экране работает", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Start Now"));
    expect(screen.getByText("You are looking for")).toBeInTheDocument();
});
