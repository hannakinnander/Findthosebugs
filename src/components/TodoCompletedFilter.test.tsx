import { render, screen } from "@testing-library/react";
import TodoApp from "./TodoApp";
import userEvent from "@testing-library/user-event";

describe("TodoCompletedFilter", () => {
  it("visar endast avklarade uppgifter", async () => {
    //Arrange

    render(<TodoApp />);
    const input = screen.getByLabelText("Ny uppgift");
    const saveBtn = screen.getByRole("button", { name: /lägg till/i });
    const completedFilterBtn = screen.getByRole("button", { name: /klara/i });
    const user = userEvent.setup();

    //Act
    await user.type(input, "Handla");
    await user.click(saveBtn);
    await user.type(input, "Städa");
    await user.click(saveBtn);

    const handlaCheckbox = screen.getByLabelText("Handla");
    await user.click(handlaCheckbox);
    await user.click(completedFilterBtn);

    //Assert
    expect(screen.getByText("Handla")).toBeInTheDocument();
    expect(screen.queryByText("Städa")).not.toBeInTheDocument();
  });
});
