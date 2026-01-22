import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test, vi } from "vitest";

vi.mock("./components/IllustrationDashboard", () => {
  return {
    default: () => <div>Mocked Illustration Dashboard</div>,
  };
});

describe("App Component", () => {
  test("renders welcome message", () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to the React App/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test("renders mocked IllustrationDashboard component", () => {
    render(<App />);
    const dashboardElement = screen.getByText(/Mocked Illustration Dashboard/i);
    expect(dashboardElement).toBeInTheDocument();
  });
});
