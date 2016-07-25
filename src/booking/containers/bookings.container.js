import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';

import Scheduler from   "../../common_uis/components/scheduler.component";
import * as actions from '../../redux/actions';

const log = (type) => console.log.bind(console, type);

const events = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': '2016-07-24',
    'end': '2016-07-24'
  },
  {
    'title': 'Long Event',
    'start': '2016-07-24',
    'end': '2016-07-30'
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2016, 7, 24),
    'end': new Date(2016, 7, 27)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2016, 10, 6, 0, 0, 0),
    'end': new Date(2016, 10, 13, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2015, 3, 9, 0, 0, 0),
    'end': new Date(2015, 3, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2015, 3, 11),
    'end': new Date(2015, 3, 13),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2015, 3, 12, 10, 30, 0, 0),
    'end': new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start':new Date(2015, 3, 12, 12, 0, 0, 0),
    'end': new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start':new Date(2015, 3, 12,14, 0, 0, 0),
    'end': new Date(2015, 3, 12,15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2015, 3, 12, 17, 0, 0, 0),
    'end': new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start':new Date(2015, 3, 12, 20, 0, 0, 0),
    'end': new Date(2015, 3, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start':new Date(2015, 3, 13, 7, 0, 0),
    'end': new Date(2015, 3, 13, 10, 30, 0)
  }
];

class Bookings extends Component {

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

  }

  render() {

    return (
      (
        <div >
          <Scheduler/>
        </div>
      )
    );
  }
}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps,actions)(Bookings);
