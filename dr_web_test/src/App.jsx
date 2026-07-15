//Функции getList и setList - не требуют изменений

import { useState, useEffect } from "react";
import {List} from './components/list/List';

function getList() {
  //Код функции не требует изменений
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(
        Array.from({ length: 10 }, (_el, index) => ({
          label: `label ${index + 1}`,
          checked: false,
          id: index
        }))
      );
    }, 1000);
  });
}

const Test = () => {
  const [listRow, setListRow] = useState([]);

  useEffect(() => {
    getList().then((res) => {
      setListRow(res);
    });
  }, []);

  return (
    <div className="test">
      <h1>Test</h1>
      <List list={listRow} setListRow={setListRow} />
    </div>
  );
};

Test.defaultProps = {};

export default Test;
