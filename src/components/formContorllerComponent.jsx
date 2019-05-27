import React, { Component } from "react";
class FormController extends Component {
  state = {
    legal_id: this.props.data[0].legal_id,
    start_date: this.props.data[0].start_date,
    end_date: this.props.data[0].end_date,
    doc_number: this.props.data[0].doc_number
  };

  handleSubmit = e => {
    let report = "/report.js";
    e.preventDefault();
    let v = this.state;
    fetch(report, {
      mode: "no-cors",
      method: "post",
      credentials: "include",
      body: v
    }).then(function(response) {
      console.log(response.text());
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    setTimeout(
      () => this.props.takeDataFromFormControllerComponent(this.state),
      0
    );
  };

  render() {
    return (
      <div>
        <h1 className="header">Редактирование отчета о заказах</h1>

        <h2 className="middle-header">Инфа о документах</h2>
        <h3 className="small-header">Юрлицо</h3>
        <div className="input-wrapper">
          <select name="legal_id" id="" className="selector">
            <option value="">{this.state.legal_id}</option>
          </select>
          <span className="after-select"> ▼ </span>
        </div>

        <h3 className="small-header">Начало периода</h3>
        <div className="input-wrapper">
          <input
            name="start_date"
            className="input"
            onChange={e => this.handleChange(e)}
            value={this.state.start_date}
          />
        </div>

        <h3 className="small-header">Конец периода</h3>
        <div className="input-wrapper">
          <input
            name="end_date"
            className="input"
            onChange={e => this.handleChange(e)}
            value={this.state.end_date}
          />
        </div>

        <h3 className="small-header">Номер документа</h3>
        <div className="input-wrapper">
          {/* <input
            name="doc_number"
            className="input"
            onChange={e => this.handleChange(e)}
            value={this.state.doc_number}
          /> */}
        </div>

        <h2 className="middle-header">Итоги</h2>
      </div>
    );
  }
}

export default FormController;
