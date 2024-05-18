import { useState } from "react";

const arr_gender = ["Женщина", "Мужчина", "Другое"];

export default function Gender() {
  const [checked, setChecked] = useState(null);

  return (
    <div style={{ marginBottom: "10px" }}>
      <p>Пол ?</p>
      <div className="gender_box">
        {arr_gender.map((elm, ind) => (
          <span key={elm + ++ind} className="gender">
            <label htmlFor={"gender" + elm}>{elm}</label>
            <input
              className="radio"
              id={"gender" + elm}
              type="radio"
              name="gender"
              checked={checked === elm}
              onChange={() => setChecked(elm)}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
