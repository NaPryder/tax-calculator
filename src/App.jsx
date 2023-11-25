import { useState } from "react";
import "./App.css";
import {
  NavLink,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { computed, signal } from "@preact/signals-react";
import InformationTips from "./components/InformationTips/InformationTips";
import {
  info1,
  info2,
  info3,
  info4,
  info5,
  info6,
  info7,
  info8,
} from "./consts";

import { buildIncomeInformation, displayNumber } from "./helpers/incomeHelpers";
import Logo from "./assets/logo1.svg";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index path="/" element={<Income />} />
//       <Route element={<Expense />} path="/expense" />
//     </Route>
//   )
// );
const annualIncome1 = signal(0);
const annualIncome2 = signal(0);
const annualIncome3 = signal(0);
const annualIncome4 = signal(0);
const annualIncome5 = signal(0);
const annualIncome6 = signal(0);
const annualIncome7 = signal(0);
const annualIncome8 = signal(0);
const infoIncome1 = buildIncomeInformation(info1.topic, info1.items);
const infoIncome2 = buildIncomeInformation(info2.topic, info2.items);
const infoIncome3 = buildIncomeInformation(info3.topic, info3.items);
const infoIncome4 = buildIncomeInformation(info4.topic, info4.items);
const infoIncome5 = buildIncomeInformation(info5.topic, info5.items);
const infoIncome6 = buildIncomeInformation(info6.topic, info6.items);
const infoIncome7 = buildIncomeInformation(info7.topic, info7.items);
const infoIncome8 = buildIncomeInformation(info8.topic, info8.items);

const expense12 = computed(() => {
  const expense = (annualIncome1.value + annualIncome2.value) * 0.5;
  return displayNumber(expense <= 0 ? 0 : expense > 100000 ? 100000 : expense);
});

const expense3Sum = computed(() => {
  const expense = annualIncome3 * 0.5;
  return displayNumber(expense <= 0 ? 0 : expense > 100000 ? 100000 : expense);
});
const expense3Real = signal(0);

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <header>
        <img src={Logo} alt="logo" />
        Tax Calculator
      </header>
      <main>
        <table>
          <thead>
            <th>Income</th>
            <th>หักค่าใช้จ่าย</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <NumberInput
                  label="1. เงินเดือน ค่าจ้าง โบนัส เบี้ยเลี้ยง"
                  numberValue={annualIncome1}
                  info={infoIncome1}
                />
              </td>
              <td rowSpan={2}>
                <NumberInput
                  type="text"
                  label="50% ไม่เกิน 100,000 บาท
                หากมีเงินได้ประเภทที่ 1 และ 2 ให้นำเงินได้ทั้ง 2 ประเภท
                รวมกันแต่หักได้ไม่เกิน 100,000 บาท"
                  numberValue={expense12}
                />
              </td>
            </tr>
            <tr>
              <td>
                <NumberInput
                  label="2. เงินได้จากหน้าที่หรือตำแหน่งงานที่ทำ หรือจากการรับทำงานให้ ค่าธรรมเนียม ค่านายหน้า ฯลฯ"
                  numberValue={annualIncome2}
                  info={infoIncome2}
                />
              </td>
            </tr>

            <tr>
              <td>
                <NumberInput
                  label="3. ค่าแห่งกู๊ดวิลล์ ค่าแห่งลิขสิทธิ์หรือสิทธิอย่างอื่น"
                  numberValue={annualIncome3}
                  info={infoIncome3}
                />
              </td>
              <td>
                <div>
                  <NumberInput
                    type="text"
                    label="50% ไม่เกิน 100,000 บาท"
                    numberValue={expense3Sum}
                  />
                  <NumberInput label="ตามจริง" numberValue={expense3Real} />
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <NumberInput
                  label="4. ดอกเบี้ย เงินปันผล ส่วนแบ่งกำไร ฯลฯ"
                  numberValue={annualIncome4}
                  info={infoIncome4}
                />
              </td>
              <td>
                <p>หักค่าใช้จ่ายไม่ได้</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  5. รายได้จากการให้เช่าทรัพย์สิน การผิดสัญญาเช่าซื้อ
                  การผิดสัญญาซื้อขายเงินผ่อน
                </p>
                <NumberInput
                  label="- บ้าน โรงเรือน สิ่งปลูกสร้าง แพ"
                  numberValue={annualIncome4}
                  info={infoIncome4}
                />
              </td>
              <td>
                <p>ตามจริงหรืออัตราเหมา</p>
              </td>
            </tr>

            <tr>
              <td>
                <NumberInput
                  label="6. วิชาชีพอิสระ"
                  numberValue={annualIncome4}
                  info={infoIncome4}
                />
              </td>
              <td>
                <p>ตามจริงหรืออัตราเหมา</p>
              </td>
            </tr>

            <tr>
              <td>
                <NumberInput
                  label="7. รับเหมาก่อสร้าง"
                  numberValue={annualIncome4}
                  info={infoIncome4}
                />
              </td>
              <td>
                <p>ตามจริงหรืออัตราเหมา 60%</p>
              </td>
            </tr>

            <tr>
              <td>
                <NumberInput
                  label="8. รายได้อื่น นอกเหนือจาก 1-7 *"
                  numberValue={annualIncome4}
                  info={infoIncome4}
                />
              </td>
              <td>
                <p>ตามจริงหรืออัตราเหมา 40% และ 60%</p>
              </td>
            </tr>
          </tbody>
        </table>
        * ตามพระราชกฤษฎีกา (ฉบับที่ 629) พ.ศ.2560
      </main>
    </>
  );
  // return <RouterProvider router={router} />;
}

export default App;

const NumberInput = ({ label, numberValue, info, type = "number" }) => {
  const onInput = (event) => (numberValue.value = Number(event.target.value));

  return (
    <>
      <div>
        <p>{label}</p>
        {info && <InformationTips children={info} />}
      </div>
      <label>
        <input
          type={type}
          placeholder="บาท/ปี"
          value={numberValue.value || ""}
          onInput={onInput}
        />
      </label>
    </>
  );
};
