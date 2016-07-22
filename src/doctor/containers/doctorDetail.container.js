import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../redux/actions';
import MyForm from "../../common_uis/components/form.component";
import Text from  "../../common_uis/components/text.component";
import Checkbox from  "../../common_uis/components/checkbox.component";
import Address from  "../../common_uis/components/address.component";
import SubmitButton from  "../../common_uis/components/submitButton.component";

import Person from  "../../common_uis/components/person.component";

const log = (type) => console.log.bind(console, type);

class DoctorDetail extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  };

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  _submit(){
    console.log('submit company detail');
    //this.props.uploadPhotoDoctor(this.props.currentDoctor);
    this.props.saveCurrentDoctor(this.props.currentDoctor);

  }

  render() {

    return (
      (
        <div>
          <MyForm
            update={this.props.updateCurrentDoctorFields}
            onSubmit={this._submit.bind(this)}
            value={this.props.currentDoctor}
          >
            <Person subModel="Person" />
            <SubmitButton/>
          </MyForm>
        </div>
      )
    );
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps,actions)(DoctorDetail);
