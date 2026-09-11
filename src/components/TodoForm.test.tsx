import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";
import userEvent from "@testing-library/user-event";

describe("TodoForm", () => {
  //Arrange

  let onAdd: ReturnType<typeof vi.fn<(text: string) => void>>;
  let saveBtn: HTMLElement;
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    onAdd = vi.fn();
    render(<TodoForm onAdd={onAdd} />);

    saveBtn = screen.getByRole("button", { name: /lägg till/i });
    user = userEvent.setup();
  });

  it("lägger inte till en uppgift när inputfältet är tomt", async () => {
    //Act
    await user.click(saveBtn);

    //Assert
    expect(onAdd).not.toHaveBeenCalled();
  });

  it("lägger inte till en uppgift när inputfältet bara innehåller ett mellanslag", async () => {
    //Arrange
    const input = screen.getByLabelText("Ny uppgift");

    //Act
    await user.type(input, " ");
    await user.click(saveBtn);

    //Assert
    expect(onAdd).not.toHaveBeenCalled();
  });
});
