import React, { Component,PropTypes } from 'react';

export default class MyTable extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    subModel: PropTypes.string,
    onRowClick: PropTypes.func
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  _rowClick(row){
    console.log('click on row',row);
    this.props.onRowClick(row);
  }

  renderBodyTable(){
    var rows = [];
    if(this.props.data){
      if(this.props.subModel){
        rows = this.props.data.map(
          (row,index)=>{
            return(<tr key={index} onClick={this._rowClick.bind(this,row)}>
                      {
                        this.props.columns.map(
                          (column,index2)=>{
                            return(<th key={index2}>{row[this.props.subModel][column.fieldName]}</th>)
                          })
                      }
                   </tr>
                  )
          })
      }else{
        rows = this.props.data.map(
          (row,index)=>{
            return(<tr key={index} onClick={this._rowClick.bind(this,row)}>
                      {
                        this.props.columns.map(
                          (column,index2)=>{
                            return(<th key={index2}>{row[column.fieldName]}</th>)
                          })
                      }
                   </tr>
                  )
          })
      }
    }else{
      return(<div/>)
    }
    return rows;
  }

  render() {
    return (
      (
        <div className="portlet" >
            <div className="portlet-body">
                <div className="table-scrollable">
                    <table className="table table-striped table-bordered table-hover order-column" >
                        <thead>
        	                <tr>
                              {
                                this.props.columns.map(
                                  (column,index)=>{
                                    return(<th key={index}>{column.title}</th>)
                                  })
                              }
        	                </tr>
                        </thead>
                        <tbody>
                          {
                            this.renderBodyTable()
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      )
    );
  }
}
