import { useState } from "react";
import "./styles.css";

export default function App() {
  let monthData = {
    "jan-apr": [
      { name: "jan", disabled: false, value: 0 },
      { name: "feb", disabled: false, value: 0 },
      { name: "mar", disabled: false, value: 0 },
      { name: "apr", disabled: false, value: 0 }
    ],
    "may-aug": [
      { name: "may", disabled: false, value: 0 },
      { name: "jun", disabled: false, value: 0 },
      { name: "july", disabled: false, value: 0 },
      { name: "aug", disabled: false, value: 0 }
    ],
    "sept-dec": [
      { name: "sept", disabled: false, value: 0 },
      { name: "oct", disabled: false, value: 0 },
      { name: "nov", disabled: false, value: 0 },
      { name: "dec", disabled: false, value: 0 }
    ]
  };
  let years = [
    {
      year: "2021",
      selected: false,
      dropdownData: [],
      dropDownSelectedValue: ""
    },
    {
      year: "2022",
      selected: false,
      dropdownData: [],
      dropDownSelectedValue: ""
    },
    {
      year: "2023",
      selected: false,
      dropdownData: [],
      dropDownSelectedValue: ""
    }
  ];
  const [data, setData] = useState(years);
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (e) => {
    let name = e.target.name;
    let localData = [...data];

    let activeData = localData.filter((year) => year.name === name);
    let remainingData = localData.filter((year) => year.name !== name);

    localData.forEach((year) => {
      if (year.year === name) {
        year.selected = !year.selected;
      }
    });
    setData(localData);
  };

  const handleChange = (e, val) => {
    console.log(e.target.value, val);
    let localData = [...data];

    localData.forEach((year) => {
      if (year.year === val.year) {
        year.dropDownSelectedValue = e.target.value;
        year.dropdownData = monthData[e.target.value];
      }
    });
    setData(localData);
  };

  const inputHandler = (e, activeData) => {
    // console.log(e.target.value, activeData);

    let inputName = e.target.name;
    let inputValue = e.target.value;

    let localData = [...data];

    localData.forEach((_year) => {
      if (_year.year === activeData.year) {
        _year.dropdownData.forEach((_data) => {
          console.log("here", _data, inputName);
          if (_data.name.toString() === inputName.toString()) {
            _data.value = inputValue;
          } else {
            _data.disabled = true;
          }
        });
      }
    });
    setData(localData);
  };

  const handleReset = (activeCard) => {
    let localData = [...data];
    localData.forEach((_year) => {
      if (_year.year === activeCard.year) {
        _year.dropdownData.forEach((_data) => {
          _data.value = 0;
          data.disabled = false;
        });
      }
    });
    setData(localData);
  };

  const handleCalculate = (activeCard) => {
    let userInput = Number(
      activeCard.dropdownData.filter((data) => !data.disabled)[0]?.value
    );

    console.log(userInput);

    let localData = [...data];

    function randomNumberFunc(min, max) {
      console.log(min, max);
      return Math.abs(Math.floor(Math.random() * (max - min + 1) + min));
    }

    localData.forEach((_year) => {
      if (_year.year === activeCard.year) {
        _year.dropdownData.forEach((_data) => {
          let randomNumber = randomNumberFunc(userInput - 100, userInput + 100);
          if (_data.disabled) {
            _data.value = randomNumber;
            _data.disabled = false;
          }
        });
      }
    });
    setData(localData);
  };

  // console.log(data);
  return (
    <div className="App">
      <div className="checkbox-container">
        {data.map((year) => {
          return (
            <div>
              <input
                type="checkbox"
                name={year.year}
                checked={year.selected}
                onChange={(e) => handleCheckbox(e)}
              />
              <label>{year.year}</label>
            </div>
          );
        })}
      </div>
      <div className="cards-container">
        {data
          .filter((year) => year.selected)
          .map((data, i) => {
            return (
              <div key={i} className="card">
                <p>{data.year}</p>
                <select
                  name="cars"
                  id="cars"
                  // value={selected}
                  onChange={(e) => handleChange(e, data)}
                >
                  <option value="" disabled selected>
                    -Select-
                  </option>
                  <option value="jan-apr">Jan-Apr</option>
                  <option value="may-aug">May-Aug</option>
                  <option value="sept-dec">Sept-Dec</option>
                </select>
                <InputContainerComponent
                  data={monthData}
                  value={data.dropDownSelectedValue}
                  inputHandler={inputHandler}
                  activeCard={data}
                />
                {data.dropDownSelectedValue.length > 0 ? (
                  <>
                    <button onClick={() => handleReset(data)}>Reset</button>
                    <button onClick={() => handleCalculate(data)}>
                      Calculate
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

const InputContainerComponent = (props) => {
  const { data, value, inputHandler, activeCard } = props;

  let requiredData = data[value];

  return (
    <div>
      {activeCard.dropdownData?.map((data, i) => {
        return (
          <div key={i}>
            <label>{data.name}</label>
            <input
              name={data.name}
              value={data.value}
              onChange={(e) => inputHandler(e, activeCard)}
              disabled={data.disabled}
            />
          </div>
        );
      })}
    </div>
  );
};
