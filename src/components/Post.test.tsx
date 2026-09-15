import { render } from "@testing-library/react";
import Post from "./Post";

describe("Post Component", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("hämtar inlägget som efterfrågas utifrån id", () => {
    vi.mocked(globalThis.fetch).mockResolvedValue({
      json: async () => ({}),
    } as Response);

    //Act
    render(<Post id={2} />);

    //Assert
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/2",
    );
  });
});
