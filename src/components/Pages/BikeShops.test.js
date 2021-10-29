import { render, screen } from "@testing-library/react";
import BikeShops from "./BikeShops";

describe("BikeShops Component", () => {
  test("renders South Side Cyclery as a title", () => {
    render(<BikeShops />);
    const titleElement = screen.getByText("South Side Cyclery");
    expect(titleElement).toBeInTheDocument();
  });
});
