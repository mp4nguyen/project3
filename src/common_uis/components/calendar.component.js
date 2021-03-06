import React, { PropTypes } from 'react';
import moment from 'moment';

var $ = require('jquery');
require('moment');
require('fullcalendar');


export default React.createClass({

  displayName: 'Calendar',

  propTypes: {
    events: PropTypes.array,
    selectable: PropTypes.bool,
    dayClick: PropTypes.func,
    select: PropTypes.func,
    eventClick: PropTypes.func,
    eventDragStop: PropTypes.func,
    eventResize: PropTypes.func,
    eventDrop: PropTypes.func
  },

  getDefaultProps() {
    return {
      events: [],
      selectable: false,
      dayClick: null,
      select: null,
      eventClick: null
    }
  },

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps = ',nextProps);
    $('#calendar').fullCalendar('removeEvents');
    $('#calendar').fullCalendar('addEventSource', nextProps.events);
    $('#calendar').fullCalendar('rerenderEvents' );
  },


  componentDidMount() {
    var self = this;

    $('#calendar').fullCalendar({
          schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
          header: {
                       left: 'prev,next today',
                       center: 'title',
                       right: 'month,agendaWeek,agendaDay'
                     },
          events: this.props.events,
          editable: true,
          ignoreTimezone: false,
          selectable: this.props.selectable,
          eventClick: function(calEvent, jsEvent, view) {
              if(self.props.eventClick){
                self.props.eventClick(calEvent,jsEvent,view);
              }
              // change the border color just for fun
              $(this).css('border-color', 'red');

          },
          dayClick: function(date, jsEvent, view) {
              if(self.props.dayClick){
                self.props.dayClick(date,jsEvent,view);
              }
              // change the day's background color just for fun
              $(this).css('background-color', 'red');

          },
          select: function( start, end, jsEvent, view){
              if(self.props.select){
                self.props.select(start, end,jsEvent,view);
              }
          },
          unselect: function( view, jsEvent ){
              if(self.props.select){
                self.props.select(view,jsEvent);
              }
          },
          eventDragStop: function( event, jsEvent, ui, view ) {
            console.log('eventDragStart = ',event);
            if(self.props.eventDragStop){
              self.props.eventDragStop(event, jsEvent, ui, view);
            }
          },
          eventDrop: function( event, delta, revertFunc, jsEvent, ui, view ) {
            console.log('eventDrop = ',event);
            if(self.props.eventDrop){
              self.props.eventDrop(event, delta, revertFunc, jsEvent, ui, view);
            }
          },
          eventResize: function( event, delta, revertFunc, jsEvent, ui, view ) {
            console.log('eventResize = ',event);
            if(self.props.eventResize){
              self.props.eventResize(event, delta, revertFunc, jsEvent, ui, view );
            }
          }
       });
  },

  componentWillUnmount() {
    $('#calendar').fullCalendar('destroy');
  },


  render() {

      return (
        <div id='calendar'></div>
      );

  }
});
