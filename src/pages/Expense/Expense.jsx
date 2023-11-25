import React, { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import { computed } from "@preact/signals-react";
import { displayNumber } from "../../helpers/incomeHelpers";

const Expense = ({
  annualIncome1,
  annualIncome2,
  annualIncome3,
  annualIncome4,
  annualIncome5,
  annualIncome6,
  annualIncome7,
  annualIncome8,
}) => {
  const [showForm, setShowForm] = useState(true);

  const expense12 = computed(() => {
    const expense = (annualIncome1.value + annualIncome2.value) * 0.5;
    return displayNumber(expense > 100000 ? 100000 : expense);
  });

  const expense3 = computed(() => {
    const expense = annualIncome3.value * 0.5;
    return displayNumber(expense > 100000 ? 100000 : expense);
  });

  return (
    <InputForm
      label="ค่าใช้จ่าย"
      showForm={showForm}
      onClickForm={() => setShowForm(!showForm)}
    >
      <label>
        <input type="text" value={expense12.value} readOnly />
        หักค่าใช้จ่าย เงินได้ประเภทที่ 1 และ 2
      </label>

      <div>
        <p>
          หักค่าใช้จ่าย เงินได้ประเภทที่ 3 50% ไม่เกิน 100,000 บาท หรือตามจริง
        </p>
      </div>
    </InputForm>
  );
};

export default Expense;
