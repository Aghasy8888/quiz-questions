import { Link } from "react-router-dom";

export function BookList() {
  return (
    <>
      <h1>Book List</h1>
      <Link to="/book/1">Book 1</Link>
      <Link to="/book/2">Book 2</Link>
      <Link to="/book/new">New Book </Link>
    </>
  );
}
