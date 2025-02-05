import { stackData } from "../data/data";
import StackCard from "./StackCard";

const Stack = () => {
  return (
    <section className="mb-5">
      <h1 className="mb-4">My Stack</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pr-4">
        {stackData.map((stacks) => (
          <StackCard
            key={stacks.id}
            logo={stacks.logo}
            title={stacks.title}
            desc={stacks.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default Stack;
