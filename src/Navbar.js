export function Navbar({ items }) {
  //Initializing State
  //Declaring handlers
  //Return JSX
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h1>Gamer Zone</h1>
        <button className="btn btn-dark" type="button">
          🛒Cart {items.length}
        </button>
      </div>
    </nav>
  );
}
