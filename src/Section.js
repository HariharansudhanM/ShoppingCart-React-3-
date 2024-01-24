import Card from "./Card";

export function Section({ products, onHandleAddtoCart, items }) {
  //Initializing State
  //Declaring handlers
  //Return JSX
  return (
    <div class="section">
      {products.map((e) => {
        return (
          <Card
            key={e.key}
            item={e}
            onHandleAddtoCart={onHandleAddtoCart}
            items={items}
          />
        );
      })}
    </div>
  );
}
