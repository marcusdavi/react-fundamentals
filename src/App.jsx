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
import UserInfo from "./components/conditional/UserInfo";
import DirectFather from "./components/communication/DirectFather";
import IndirectFather from "./components/communication/IndirectFather";
import Input from "./components/form/Input"
import Counter from "./components/counter/Counter";
import Bet from "./components/bet/Bet";

const COLOR_01 = "#E2C2B9";
const COLOR_02 = "#BFD8B8";
const COLOR_03 = "#E7EAB5";

export default function App() {
  return (
    <div className="App">
      <h1 className="Main-Title">Revision - React Elements</h1>
      <div className="Cards">
        <Card title="#1 - The First Component" color={COLOR_01}>
          <First />
        </Card>
        <Card title="#2 - Fragment" color={COLOR_02}>
          <Fragment />
        </Card>
        <Card title="#3 - The Component With Params" color={COLOR_03}>
          <WithParams name="Pedro" score={9.3} />
          <WithParams name="Pedro" score={6.8} />
        </Card>

        <Card title="#4 - Random Number" color={COLOR_01}>
          <Random min={1} max={60} />
        </Card>
        <Card title="#5 - Component as Param" color={COLOR_02}>
          <Family lastname="Ribeiro">
            <FamilyMember firstname="Marcus" />
            <FamilyMember firstname="Daiane" />
            <FamilyMember firstname="Susana" />
          </Family>
        </Card>
        <Card title="#06 - List Iteration" color={COLOR_03}>
          <ListStudents></ListStudents>
        </Card>
        <Card title="#07 - Products Table" color={COLOR_01}>
          <ProductTable />
        </Card>
        <Card
          title="#08 - Conditional Rendering - Ternary Operator"
          color={COLOR_02}
        >
          <EvenOrOdd number={20} />
          <EvenOrOdd number={13} />
        </Card>
        <Card
          title="#09 -  Conditional Rendering - If Component"
          color={COLOR_03}
        >
          <UserInfo user={{ name: "Marcus" }}></UserInfo>
          <UserInfo user={{ email: "marcus@gmail.com" }}></UserInfo>
        </Card>
        <Card
          title="#10 - Direct Communication - Components - Props"
          color={COLOR_01}
        >
          <DirectFather />
        </Card>
        <Card
          title="#11 - Indirect Communication - Components - useState and Function"
          color={COLOR_02}
        >
          <IndirectFather />
        </Card>
        <Card title="#12 - Controlled Component" color={COLOR_03}>
          <Input/>
        </Card>
        <Card title="#13 - Class Component" color={COLOR_01}>
          <Counter initialNumber={1}/>
        </Card>
        <Card title="#14 - Megasena Bet Generator" color={COLOR_01}>
          <Bet/>
        </Card>
        <Card title="#14 - Lotofácil Bet Generator" color={COLOR_01}>
          <Bet title="Lotofácil" numbers={15} min={1} max={25}/>
        </Card>
      </div>
    </div>
  );
}
