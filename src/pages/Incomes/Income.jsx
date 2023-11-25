import React, { useState } from "react";
import CommonNumberInput from "../../components/CommonNumberInput/CommonNumberInput";
import InputForm from "../../components/InputForm/InputForm";
import { buildIncomeInformation } from "../../helpers/incomeHelpers";
import {
  info1,
  info2,
  info3,
  info4,
  info5,
  info6,
  info7,
  info8,
} from "../../consts";

const infoIncome1 = buildIncomeInformation(info1.topic, info1.items);
const infoIncome2 = buildIncomeInformation(info2.topic, info2.items);
const infoIncome3 = buildIncomeInformation(info3.topic, info3.items);
const infoIncome4 = buildIncomeInformation(info4.topic, info4.items);
const infoIncome5 = buildIncomeInformation(info5.topic, info5.items);
const infoIncome6 = buildIncomeInformation(info6.topic, info6.items);
const infoIncome7 = buildIncomeInformation(info7.topic, info7.items);
const infoIncome8 = buildIncomeInformation(info8.topic, info8.items);

function Income({
  annualIncome1,
  annualIncome2,
  annualIncome3,
  annualIncome4,
  annualIncome5,
  annualIncome6,
  annualIncome7,
  annualIncome8,
}) {
  const [showForm, setShowForm] = useState(true);

  return (
    <InputForm
      label="เงินได้ทั้งปี"
      showForm={showForm}
      onClickForm={() => setShowForm(!showForm)}
    >
      <CommonNumberInput
        label="เงินได้ประเภทที่ 1"
        unit="บาทต่อปี"
        incomeValue={annualIncome1}
        info={infoIncome1}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 2"
        unit="บาทต่อปี"
        incomeValue={annualIncome2}
        info={infoIncome2}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 3"
        unit="บาทต่อปี"
        incomeValue={annualIncome3}
        info={infoIncome3}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 4"
        unit="บาทต่อปี"
        incomeValue={annualIncome4}
        info={infoIncome4}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 5"
        unit="บาทต่อปี"
        incomeValue={annualIncome5}
        info={infoIncome5}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 6"
        unit="บาทต่อปี"
        incomeValue={annualIncome6}
        info={infoIncome6}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 7"
        unit="บาทต่อปี"
        incomeValue={annualIncome7}
        info={infoIncome7}
      />
      <CommonNumberInput
        label="เงินได้ประเภทที่ 8"
        unit="บาทต่อปี"
        incomeValue={annualIncome8}
        info={infoIncome8}
      />
    </InputForm>
  );
}

export default Income;
