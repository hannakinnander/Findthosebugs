import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";
import type { Todo } from "../types";

describe("TodoList", () => {
  it("Markerar rätt uppgift som klar när man tryckt i checkboxen", async () => {
    //Arrange
    const onToggle = vi.fn();
    const onDelete = vi.fn();
    const todos: Todo[] = [
      { id: 123, text: "Städa", completed: false },
      { id: 456, text: "Handla", completed: false },
      { id: 789, text: "Laga mat", completed: true },
    ];
    render(<TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />);
    const checkbox = screen.getByLabelText("Handla");
    const user = userEvent.setup();

    //Act

    await user.click(checkbox);
    //Assert
    expect(onToggle).toHaveBeenCalledWith(456);
  });
});
