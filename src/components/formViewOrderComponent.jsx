import React, { Component } from "react";

class FormViewOrder extends Component {
  state = {
    all: {
      venue_name: this.props.data[0].fee_data.venue_summaries[0].venue_name,
      cashordersum: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[0].order_sum,
      cashordercount: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[0].order_count,
      cashorderfee: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[0].order_fee,
      companysummary: this.props.data[0].fee_data.company_summary.company_fee,
      noncashordersum: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[1].order_sum,
      noncashordercount: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[1].order_count,
      noncashorderfee: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[1].order_fee,
      courierordersum: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[2].order_sum,
      courierordercount: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[2].order_count,
      courierorderfee: this.props.data[0].fee_data.venue_summaries[0]
        .payment_type_summaries[2].order_fee
    }
  };

  /* Передаю данные в центральный компонент, чтобы потом
 оттуда они были переданы в братский компонент "Итого" (там их можно обработать:
 сложить друг с другом, например.)*/
  sendDataToFormComponent = () => {
    this.props.takeDataFromViewOrderComponent(this.state.all);
  };

  componentDidMount() {
    this.sendDataToFormComponent();
  }

  render() {
    const all = this.state.all;

    return (
      <div>
        <h2 className="middle-header">Инфа о заказах</h2>

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
                {this.state.all.venue_name}
              </td>
              <td>Наличный расчет</td>
              <td>{all.cashordercount}</td>
              <td>{all.cashordersum}</td>
              <td>{all.cashorderfee}</td>
              <td rowSpan="3">{all.companysummary}</td>
            </tr>
            <tr className="section-table-row border">
              <td>Безналчиный расчет</td>
              <td>{all.noncashordercount}</td>
              <td>{all.noncashordersum}</td>
              <td>{all.noncashorderfee}</td>
            </tr>
            <tr className="section-table-row border">
              <td>Картой курьеру</td>
              <td>{all.courierordercount}</td>
              <td>{all.courierordersum}</td>
              <td>{all.courierorderfee}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormViewOrder;
