export default function Birthday(props) {
  return (
    <>
      <p>Дата рождения ?</p>
      <div className="birthday">
        <select name="birth_day">
          {props.day.map((elm, ind) => (
            <option key={"day" + (ind + 1)} value={"day" + (ind + 1)}>
              {elm}
            </option>
          ))}
        </select>
        <select name="birth_month">
          {props.month.map((elm, ind) => (
            <option key={"month" + (ind + 1)} value={ind + 1}>
              {elm}
            </option>
          ))}
        </select>
        <select name="birth_year">
          {props.year.map((elm, ind) => (
            <option key={"year" + (ind + 1)} value={elm}>
              {elm}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
