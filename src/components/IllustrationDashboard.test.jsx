import { render, screen, fireEvent } from "@testing-library/react";
import IllustrationDashboard from "./IllustrationDashboard";
import { describe, expect, test, vi } from "vitest";

vi.mock("./IllustrationList1", () => ({
  default: ({ illustrations, onSelect }) => (
    <ul data-testid="mocked-illustration-list1">
      {illustrations.map((illus, index) => (
        <li key={index} onClick={() => onSelect(illus)}>
          {illus.name} - {illus.year} - {illus.date}
        </li>
      ))}
    </ul>
  ),
}));

describe("IllustrationDashboard Component", () => {
  test("renders correctly and filters illustrations", () => {
    render(<IllustrationDashboard />);
    const input = screen.getByLabelText(/Filter by Year:/i);

    // Initial render with default yearFilter = 2024
    const list = screen.getByTestId("mocked-illustration-list1");
    expect(list).toBeInTheDocument();
    expect(list.children.length).toBe(2); // Ocean (2024) and Sky (2026)
    expect(screen.getByText(/Ocean - 2024 - 11-30/i)).toBeInTheDocument();
    expect(screen.getByText(/Sky - 2026 - 11-30/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Sunset - 2022 - 05-15/i),
    ).not.toBeInTheDocument();

    // Change yearFilter to 2023
    fireEvent.change(input, { target: { value: "2023" } });
    expect(list.children.length).toBe(3); // Mountain (2023), Ocean (2024), Sky (2026)
    expect(screen.getByText(/Mountain - 2023 - 08-22/i)).toBeInTheDocument();
    expect(screen.getByText(/Ocean - 2024 - 11-30/i)).toBeInTheDocument();
    expect(screen.getByText(/Sky - 2026 - 11-30/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Sunset - 2022 - 05-15/i),
    ).not.toBeInTheDocument();
  });

  test("handleSelect is called when an illustration is clicked", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<IllustrationDashboard />);
    const listItem = screen.getByText(/Ocean - 2024 - 11-30/i);
    fireEvent.click(listItem);
    expect(consoleSpy).toHaveBeenCalledWith("Year filter changed", {
      date: "11-30",
      name: "Ocean",
      year: 2024,
    });
    consoleSpy.mockRestore();
  });
});
