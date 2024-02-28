import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "jane", email: "jane@gmail.com" },
    { name: "sam", email: "sam@gmail.com" },
  ];

  render(<UserList users={users} />);

  const rows = screen.getAllByRole("row");

  expect(rows).toHaveLength(2);
});
