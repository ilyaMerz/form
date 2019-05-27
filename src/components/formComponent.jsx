import React, { Component } from "react";
import FormController from "./formContorllerComponent";
import FormViewOrder from "./formViewOrderComponent";
import FormViewTotal from "./fromViewTotalComponent";

class Form extends Component {
  state = {
    formViewOrderComponentData: {},
    formState: {}
  };

  /* В случае, если бы у нас реально формировался некий
  итог в таблице "итого", то нам понадобились бы данные, 
  для последующей и обработки в таблице итого. Например, 
  их можно было бы сложить с др-др и т.п. 
  
  Поэтому, с помощью следующей ниже функции, мы получим данные
  в этот компонент чтобы далее можно было передать их дочернему 
  компоненту, ответственному за итоговую обработку (таблицу "Итого") */
  takeDataFromViewOrderComponent = tableData => {
    this.setState({ formViewOrderComponentData: tableData });
  };

  takeDataFromFormControllerComponent = inputsData => {
    this.setState({ formState: inputsData });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="form"
          id="form"
          action=""
        >
          <FormController
            data={this.props.data}
            takeDataFromFormControllerComponent={inputsData =>
              this.takeDataFromFormControllerComponent(inputsData)
            }
          />
          <FormViewOrder
            data={this.props.data}
            takeDataFromViewOrderComponent={tableData =>
              this.takeDataFromViewOrderComponent(tableData)
            }
          />
          <FormViewTotal
            data={this.props.data}
            tableData={this.state.formViewOrderComponentData}
          />
          <input
            type="submit"
            value="Сохранить"
            id="save-button"
            className="save-button"
            onSubmit={e => this.handleSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

export default Form;
