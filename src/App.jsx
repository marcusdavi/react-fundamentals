import "./App.css";

import Card from "./components/layout/Card";

import First from "./components/basic/First";
import WithParams from "./components/basic/WithParams";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";
import ListStudents from "./components/iteration/ListStudents";
import ProductTable from "./components/iteration/ProductTable";
import EvenOrOdd from "./components/conditional/EvenOrOdd";

export default function App() {
  return (
    <div className="App">
      <h1 className="Main-Title">Revision - React Elements</h1>
      <div className="Cards">
        <Card title="#1 - The First Component" color="#E2C2B9">
          <First />
        </Card>
        <Card title="#2 - Fragment" color="#BFD8B8">
          <Fragment />
        </Card>
        <Card title="#3 - The Component With Params" color="#E7EAB5">
          <WithParams name="Pedro" score={9.3} />
          <WithParams name="Pedro" score={6.8} />
        </Card>

        <Card title="#4 - Random Number" color="#F1F7E7">
          <Random min={1} max={60} />
        </Card>
        <Card title="#5 - Component as Param" color="#E2C2B9">
          <Family lastname="Ribeiro">
            <FamilyMember firstname="Marcus" />
            <FamilyMember firstname="Daiane" />
            <FamilyMember firstname="Susana" />
          </Family>
        </Card>
        <Card title="#06 - List Iteration" color="#BFD8B8">
          <ListStudents></ListStudents>
        </Card>
        <Card title="#07 - Products Table" color="#E7EAB5">
          <ProductTable />
        </Card>
        <Card title="#08 - Conditional Rendering - Ternary Operator" color="#F1F7E7">
          <EvenOrOdd number={20} />
          <EvenOrOdd number={13} />
        </Card>
      </div>
    </div>
  );
}
