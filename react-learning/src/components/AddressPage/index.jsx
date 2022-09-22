import Container from "./Container";
import AddButton from "./AddButton";

function AddressPage() {
  return (
    <div>
      <h1 className="text-start m-4 p-4 text-2xl">
        <strong>
          Address <span className="text-grey-300">Shipping</span>
        </strong>
      </h1>

      <div>
        <Container />
        <AddButton />
      </div>
    </div>
  );
}
export default AddressPage;
