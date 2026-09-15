import TodoStats from "./TodoStats";
import { render, screen } from "@testing-library/react";
import type { Todo } from "../types";

describe("TodoStats", () => {
  it("visar antal kvarstående todos och totalt antal todos", () => {
    //Arrange
    const todos: Todo[] = [
      { id: 1, text: "Städa", completed: false },
      { id: 2, text: "Handla", completed: false },
      { id: 3, text: "Laga mat", completed: true },
    ];

    //Act
    render(<TodoStats todos={todos} />);
    //Assert
    expect(screen.getByText("2 kvar av 3")).toBeInTheDocument();
  });
});
