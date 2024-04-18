import useArray from "../hooks/useArray";

type ArrayProps = {
  defaultValue: string[];
};

const Array = ({ defaultValue }: ArrayProps) => {
  const { array, push, filter, update, remove, clear } = useArray<string[]>([
    defaultValue,
  ]);

  const handleAdd = () => {
    push(["New Element"]);
  };

  const handleFilter = () => {
    filter((value) => value.length > 5);
  };

  const handleUpdate = (index: number) => {
    update(index, ["Updated Element"]);
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  const handleClear = () => {
    clear();
  };

  return (
    <div>
      <h2>Array</h2>
      <button onClick={handleAdd}>Add Element</button>
      <button onClick={handleFilter}>Filter Elements</button>
      <button onClick={handleClear}>Clear Array</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleUpdate(index)}>Update</button>{" "}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Array;
