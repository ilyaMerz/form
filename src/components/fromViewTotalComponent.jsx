import React, { Component } from "react";

class FormViewTotal extends Component {
  render() {
    const pt = this.props.tableData;
    return (
      <div>
        <h2 className="middle-header">Итоги</h2>
        <table className="section-table section-table">
          <tbody>
            <tr className="section-table-row border">
              <th>Точка</th>
              <th>Способ оплаты</th>
              <th>Количество реализованных операций</th>
              <th>Общая сумма реализованных операций</th>
              <th>Вознаграждение исполнителя</th>
              <th>Абонентская плата</th>
            </tr>
            <tr className="section-table-row border">
              <td id="venue_name-td" rowSpan="3">
                {pt.venue_name}
              </td>
              <td>Наличный расчет</td>
              <td>{pt.cashordercount}</td>
              <td>{pt.cashordersum}</td>
              <td>{pt.cashorderfee}</td>
              <td rowSpan="3">{pt.companysummary}</td>
            </tr>
            <tr className="section-table-row border">
              <td>Безналчиный расчет</td>
              <td>{pt.noncashordercount}</td>
              <td>{pt.noncashordersum}</td>
              <td>{pt.noncashorderfee}</td>
            </tr>
            <tr className="section-table-row border">
              <td>Картой курьеру</td>
              <td>{pt.courierordercount}</td>
              <td>{pt.courierordersum}</td>
              <td>{pt.courierorderfee}</td>
            </tr>
            <tr>
              <td colSpan="2"> Итого:</td>
              <td>
                {+pt.cashordercount +
                  +pt.courierordercount +
                  +pt.noncashordercount}
              </td>
              <td>
                {pt.cashordersum + pt.noncashordersum + pt.courierordersum}
              </td>
              <td>
                {Math.round(
                  100 * +pt.cashorderfee +
                    +pt.noncashorderfee +
                    +pt.courierorderfee
                ) / 100}
              </td>
              <td>{pt.companysummary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormViewTotal;
