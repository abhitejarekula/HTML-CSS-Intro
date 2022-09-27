import Counter from "./Counter";

function ItemDiscription() {
  return (
    <div className="flex flex-col w-6/12">
      <div>
        <h1 className="text-4xl">
          <strong>Meryl Lounge Chair</strong>
        </h1>
        <h2 className="mr-2">$149.99</h2>
      </div>
      <p className="mr-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <div className="flex  justify-evenly">
        <div>
          <Counter />
        </div>

        <div className="w-5/12">
          <button className="bg-green-500 text-white rounded-md">
            <strong>ADD TO CART</strong>
          </button>
        </div>
      </div>

      <p className="text-sm">
        Free 2-5 day shipping + Tool-free assembly + 30-day trail
      </p>
    </div>
  );
}

export default ItemDiscription;
