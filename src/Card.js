function Card({ item, onHandleAddtoCart, items }) {
  //Initializing State
  //Declaring handlers
  //Return JSX

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={item.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">{item.price}</p>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => onHandleAddtoCart(item)}
        >
          {items.some((e) => e.id === item.id)
            ? "remove from the Card"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Card;
