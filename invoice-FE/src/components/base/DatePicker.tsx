import { useState } from "react";
import DatePickerLib from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickerLib
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
    />
  );
};

export default DatePicker;
