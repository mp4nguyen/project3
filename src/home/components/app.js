       <div className="page-header">
           <div className="page-header-top">
               <div className="container">
                   <div className="page-logo">
                       <a href="index.html">
                           <img src="../assets/layouts/layout3/img/logo-default.jpg" alt="logo" className="logo-default">
                       </a>
                   </div>
                   {/* END LOGO */}
                   {/* BEGIN RESPONSIVE MENU TOGGLER */}
                   <a href="javascript:;" className="menu-toggler"></a>
                   {/* END RESPONSIVE MENU TOGGLER */}
                   {/* BEGIN TOP NAVIGATION MENU */}
                   <div className="top-menu">
                       <ul className="nav navbar-nav pull-right">
                           {/* BEGIN NOTIFICATION DROPDOWN */}
                           <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                               <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                   <i className="icon-bell"></i>
                                   <span className="badge badge-default">7</span>
                               </a>
                               <ul className="dropdown-menu">
                                   <li className="external">
                                       <h3>You have
                                           <strong>12 pending</strong> tasks</h3>
                                       <a href="app_todo.html">view all</a>
                                   </li>
                                   <li>
                                       <ul className="dropdown-menu-list scroller" style="height: 250px;" data-handle-color="#637283">
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">just now</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-success">
                                                           <i className="fa fa-plus"></i>
                                                       </span> New user registered. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">3 mins</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-danger">
                                                           <i className="fa fa-bolt"></i>
                                                       </span> Server #12 overloaded. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">10 mins</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-warning">
                                                           <i className="fa fa-bell-o"></i>
                                                       </span> Server #2 not responding. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">14 hrs</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-info">
                                                           <i className="fa fa-bullhorn"></i>
                                                       </span> Application error. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">2 days</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-danger">
                                                           <i className="fa fa-bolt"></i>
                                                       </span> Database overloaded 68%. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">3 days</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-danger">
                                                           <i className="fa fa-bolt"></i>
                                                       </span> A user IP blocked. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">4 days</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-warning">
                                                           <i className="fa fa-bell-o"></i>
                                                       </span> Storage Server #4 not responding dfdfdfd. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">5 days</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-info">
                                                           <i className="fa fa-bullhorn"></i>
                                                       </span> System Error. </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="time">9 days</span>
                                                   <span className="details">
                                                       <span className="label label-sm label-icon label-danger">
                                                           <i className="fa fa-bolt"></i>
                                                       </span> Storage server failed. </span>
                                               </a>
                                           </li>
                                       </ul>
                                   </li>
                               </ul>
                           </li>
                           {/* END NOTIFICATION DROPDOWN */}
                           {/* BEGIN TODO DROPDOWN */}
                           <li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
                               <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                   <i className="icon-calendar"></i>
                                   <span className="badge badge-default">3</span>
                               </a>
                               <ul className="dropdown-menu extended tasks">
                                   <li className="external">
                                       <h3>You have
                                           <strong>12 pending</strong> tasks</h3>
                                       <a href="app_todo_2.html">view all</a>
                                   </li>
                                   <li>
                                       <ul className="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">New release v1.2 </span>
                                                       <span className="percent">30%</span>
                                                   </span>
                                                   <span className="progress">
                                                       <span style="width: 40%;" className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">40% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">Application deployment</span>
                                                       <span className="percent">65%</span>
                                                   </span>
                                                   <span className="progress">
                                                       <span style="width: 65%;" className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">65% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">Mobile app release</span>
                                                       <span className="percent">98%</span>
                                                   </span>
                                                   <span className="progress">
                                                       <span style="width: 98%;" className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">98% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">Database migration</span>
                                                       <span className="percent">10%</span>
                                                   </span>
                                                   <span className="progress">
                                                       <span style="width: 10%;" className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">10% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">Web server upgrade</span>
                                                       <span className="percent">58%</span>
                                                   </span>
                                                   <span className="progress">
                                                       <span style="width: 58%;" className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">58% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">Mobile development</span>
                                                       <span className="percent">85%</span>
                                                   </span>
                                                   <span className="progress">
                                                       <span style="width: 85%;" className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">85% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="javascript:;">
                                                   <span className="task">
                                                       <span className="desc">New UI release</span>
                                                       <span className="percent">38%</span>
                                                   </span>
                                                   <span className="progress progress-striped">
                                                       <span style="width: 38%;" className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                           <span className="sr-only">38% Complete</span>
                                                       </span>
                                                   </span>
                                               </a>
                                           </li>
                                       </ul>
                                   </li>
                               </ul>
                           </li>
                           {/* END TODO DROPDOWN */}
                           <li className="droddown dropdown-separator">
                               <span className="separator"></span>
                           </li>
                           {/* BEGIN INBOX DROPDOWN */}
                           <li className="dropdown dropdown-extended dropdown-inbox dropdown-dark" id="header_inbox_bar">
                               <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                   <span className="circle">3</span>
                                   <span className="corner"></span>
                               </a>
                               <ul className="dropdown-menu">
                                   <li className="external">
                                       <h3>You have
                                           <strong>7 New</strong> Messages</h3>
                                       <a href="app_inbox.html">view all</a>
                                   </li>
                                   <li>
                                       <ul className="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                                           <li>
                                               <a href="#">
                                                   <span className="photo">
                                                       <img src="../assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt=""> </span>
                                                   <span className="subject">
                                                       <span className="from"> Lisa Wong </span>
                                                       <span className="time">Just Now </span>
                                                   </span>
                                                   <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="#">
                                                   <span className="photo">
                                                       <img src="../assets/layouts/layout3/img/avatar3.jpg" className="img-circle" alt=""> </span>
                                                   <span className="subject">
                                                       <span className="from"> Richard Doe </span>
                                                       <span className="time">16 mins </span>
                                                   </span>
                                                   <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="#">
                                                   <span className="photo">
                                                       <img src="../assets/layouts/layout3/img/avatar1.jpg" className="img-circle" alt=""> </span>
                                                   <span className="subject">
                                                       <span className="from"> Bob Nilson </span>
                                                       <span className="time">2 hrs </span>
                                                   </span>
                                                   <span className="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="#">
                                                   <span className="photo">
                                                       <img src="../assets/layouts/layout3/img/avatar2.jpg" className="img-circle" alt=""> </span>
                                                   <span className="subject">
                                                       <span className="from"> Lisa Wong </span>
                                                       <span className="time">40 mins </span>
                                                   </span>
                                                   <span className="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                                               </a>
                                           </li>
                                           <li>
                                               <a href="#">
                                                   <span className="photo">
                                                       <img src="../assets/layouts/layout3/img/avatar3.jpg" className="img-circle" alt=""> </span>
                                                   <span className="subject">
                                                       <span className="from"> Richard Doe </span>
                                                       <span className="time">46 mins </span>
                                                   </span>
                                                   <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                               </a>
                                           </li>
                                       </ul>
                                   </li>
                               </ul>
                           </li>
                           {/* END INBOX DROPDOWN */}
                           {/* BEGIN USER LOGIN DROPDOWN */}
                           <li className="dropdown dropdown-user dropdown-dark">
                               <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                   <img alt="" className="img-circle" src="../assets/layouts/layout3/img/avatar9.jpg">
                                   <span className="username username-hide-mobile">Nick</span>
                               </a>
                               <ul className="dropdown-menu dropdown-menu-default">
                                   <li>
                                       <a href="page_user_profile_1.html">
                                           <i className="icon-user"></i> My Profile </a>
                                   </li>
                                   <li>
                                       <a href="app_calendar.html">
                                           <i className="icon-calendar"></i> My Calendar </a>
                                   </li>
                                   <li>
                                       <a href="app_inbox.html">
                                           <i className="icon-envelope-open"></i> My Inbox
                                           <span className="badge badge-danger"> 3 </span>
                                       </a>
                                   </li>
                                   <li>
                                       <a href="app_todo_2.html">
                                           <i className="icon-rocket"></i> My Tasks
                                           <span className="badge badge-success"> 7 </span>
                                       </a>
                                   </li>
                                   <li className="divider"> </li>
                                   <li>
                                       <a href="page_user_lock_1.html">
                                           <i className="icon-lock"></i> Lock Screen </a>
                                   </li>
                                   <li>
                                       <a href="page_user_login_1.html">
                                           <i className="icon-key"></i> Log Out </a>
                                   </li>
                               </ul>
                           </li>
                           {/* END USER LOGIN DROPDOWN */}

                       </ul>
                   </div>
                   {/* END TOP NAVIGATION MENU */}
               </div>
           </div>
           {/* END HEADER TOP */}
           {/* BEGIN HEADER MENU */}
           <div className="page-header-menu">
               <div className="container">

                   {/* BEGIN MEGA MENU */}
                   {/* DOC: Apply "hor-menu-light" className after the "hor-menu" className below to have a horizontal menu with white background */}
                   {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
                   <div className="hor-menu  ">
                       <ul className="nav navbar-nav">
                           <li className="menu-dropdown classNameic-menu-dropdown">
                               <a href="javascript:;"> Dashboard
                                   <span className="arrow"></span>
                               </a>
                               <ul className="dropdown-menu pull-left">
                                   <li className=" active">
                                       <a href="index.html" className="nav-link  active">
                                           <i className="icon-bar-chart"></i> Default Dashboard
                                           <span className="badge badge-success">1</span>
                                       </a>
                                   </li>
                                   <li className=" ">
                                       <a href="dashboard_2.html" className="nav-link  ">
                                           <i className="icon-bulb"></i> Dashboard 2 </a>
                                   </li>
                                   <li className=" ">
                                       <a href="dashboard_3.html" className="nav-link  ">
                                           <i className="icon-graph"></i> Dashboard 3
                                           <span className="badge badge-danger">3</span>
                                       </a>
                                   </li>
                               </ul>
                           </li>
                           <li className="menu-dropdown mega-menu-dropdown  ">
                               <a href="javascript:;"> UI Features
                                   <span className="arrow"></span>
                               </a>
                               <ul className="dropdown-menu" style="min-width: 710px">
                                   <li>
                                       <div className="mega-menu-content">
                                           <div className="row">
                                               <div className="col-md-4">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <a href="ui_colors.html"> Color Library </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_general.html"> General Components </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_buttons.html"> Buttons </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_confirmations.html"> Popover Confirmations </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_icons.html"> Font Icons </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_socicons.html"> Social Icons </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_typography.html"> Typography </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_tabs_accordions_navs.html"> Tabs, Accordions & Navs </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_tree.html"> Tree View </a>
                                                       </li>
                                                       <li>
                                                           <a href="maps_google.html"> Google Maps </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                               <div className="col-md-4">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <a href="maps_vector.html"> Vector Maps </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_timeline.html"> Timeline </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_page_progress_style_1.html"> Page Progress Bar - Flash </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_page_progress_style_2.html"> Page Progress Bar - Big Counter </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_blockui.html"> Block UI </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_bootstrap_growl.html"> Bootstrap Growl Notifications </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_notific8.html"> Notific8 Notifications </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_toastr.html"> Toastr Notifications </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_bootbox.html"> Bootbox Dialogs </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                               <div className="col-md-4">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <a href="ui_alerts_api.html"> Metronic Alerts API </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_session_timeout.html"> Session Timeout </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_idle_timeout.html"> User Idle Timeout </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_modals.html"> Modals </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_extended_modals.html"> Extended Modals </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_tiles.html"> Tiles </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_datepaginator.html"> Date Paginator </a>
                                                       </li>
                                                       <li>
                                                           <a href="ui_nestable.html"> Nestable List </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </li>
                               </ul>
                           </li>
                           <li className="menu-dropdown classNameic-menu-dropdown ">
                               <a href="javascript:;"> Layouts
                                   <span className="arrow"></span>
                               </a>
                               <ul className="dropdown-menu pull-left">
                                   <li className=" ">
                                       <a href="layout_mega_menu_light.html" className="nav-link  "> Light Mega Menu </a>
                                   </li>
                                   <li className=" ">
                                       <a href="layout_top_bar_light.html" className="nav-link  "> Light Top Bar Dropdowns </a>
                                   </li>
                                   <li className=" ">
                                       <a href="layout_fluid_page.html" className="nav-link  "> Fluid Page </a>
                                   </li>
                                   <li className=" ">
                                       <a href="layout_top_bar_fixed.html" className="nav-link  "> Fixed Top Bar </a>
                                   </li>
                                   <li className=" ">
                                       <a href="layout_mega_menu_fixed.html" className="nav-link  "> Fixed Mega Menu </a>
                                   </li>
                                   <li className=" ">
                                       <a href="layout_disabled_menu.html" className="nav-link  "> Disabled Menu Links </a>
                                   </li>
                                   <li className=" ">
                                       <a href="layout_blank_page.html" className="nav-link  "> Blank Page </a>
                                   </li>
                               </ul>
                           </li>
                           <li className="menu-dropdown mega-menu-dropdown  mega-menu-full">
                               <a href="javascript:;"> Components
                                   <span className="arrow"></span>
                               </a>
                               <ul className="dropdown-menu" style="min-width: ">
                                   <li>
                                       <div className="mega-menu-content">
                                           <div className="row">
                                               <div className="col-md-3">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <h3>Components 1</h3>
                                                       </li>
                                                       <li>
                                                           <a href="components_date_time_pickers.html"> Date & Time Pickers </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_color_pickers.html"> Color Pickers </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_select2.html"> Select2 Dropdowns </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_select.html"> Bootstrap Select </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_multi_select.html"> Multi Select </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                               <div className="col-md-3">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <h3>Components 2</h3>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_select_splitter.html"> Select Splitter </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_typeahead.html"> Typeahead Autocomplete </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_tagsinput.html"> Bootstrap Tagsinput </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_switch.html"> Bootstrap Switch </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_maxlength.html"> Bootstrap Maxlength </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                               <div className="col-md-3">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <h3>Components 3</h3>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_fileinput.html"> Bootstrap File Input </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_bootstrap_touchspin.html"> Bootstrap Touchspin </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_form_tools.html"> Form Widgets & Tools </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_context_menu.html"> Context Menu </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_editors.html"> Markdown & WYSIWYG Editors </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                               <div className="col-md-3">
                                                   <ul className="mega-menu-submenu">
                                                       <li>
                                                           <h3>Components 4</h3>
                                                       </li>
                                                       <li>
                                                           <a href="components_code_editors.html"> Code Editors </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_ion_sliders.html"> Ion Range Sliders </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_noui_sliders.html"> NoUI Range Sliders </a>
                                                       </li>
                                                       <li>
                                                           <a href="components_knob_dials.html"> Knob Circle Dials </a>
                                                       </li>
                                                   </ul>
                                               </div>
                                           </div>
                                       </div>
                                   </li>
                               </ul>
                           </li>
                           <li className="menu-dropdown classNameic-menu-dropdown ">
                               <a href="javascript:;"> More
                                   <span className="arrow"></span>
                               </a>
                               <ul className="dropdown-menu pull-left">
                                   <li className="dropdown-submenu ">
                                       <a href="javascript:;" className="nav-link nav-toggle ">
                                           <i className="icon-settings"></i> Form Stuff
                                           <span className="arrow"></span>
                                       </a>
                                       <ul className="dropdown-menu">
                                           <li className=" ">
                                               <a href="form_controls.html" className="nav-link "> Bootstrap Form
                                                   <br>Controls </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_controls_md.html" className="nav-link "> Material Design
                                                   <br>Form Controls </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_validation.html" className="nav-link "> Form Validation </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_validation_states_md.html" className="nav-link "> Material Design
                                                   <br>Form Validation States </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_validation_md.html" className="nav-link "> Material Design
                                                   <br>Form Validation </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_layouts.html" className="nav-link "> Form Layouts </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_input_mask.html" className="nav-link "> Form Input Mask </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_editable.html" className="nav-link "> Form X-editable </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_wizard.html" className="nav-link "> Form Wizard </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_icheck.html" className="nav-link "> iCheck Controls </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_image_crop.html" className="nav-link "> Image Cropping </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_fileupload.html" className="nav-link "> Multiple File Upload </a>
                                           </li>
                                           <li className=" ">
                                               <a href="form_dropzone.html" className="nav-link "> Dropzone File Upload </a>
                                           </li>
                                       </ul>
                                   </li>
                                   <li className="dropdown-submenu ">
                                       <a href="javascript:;" className="nav-link nav-toggle ">
                                           <i className="icon-briefcase"></i> Tables
                                           <span className="arrow"></span>
                                       </a>
                                       <ul className="dropdown-menu">
                                           <li className="dropdown-submenu ">
                                               <a href="javascript:;" className="nav-link nav-toggle"> Static Tables
                                                   <span className="arrow"></span>
                                               </a>
                                               <ul className="dropdown-menu">
                                                   <li className="">
                                                       <a href="table_static_basic.html" className="nav-link "> Basic Tables </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_static_responsive.html" className="nav-link "> Responsive Tables </a>
                                                   </li>
                                               </ul>
                                           </li>
                                           <li className="dropdown-submenu ">
                                               <a href="javascript:;" className="nav-link nav-toggle"> Datatables
                                                   <span className="arrow"></span>
                                               </a>
                                               <ul className="dropdown-menu">
                                                   <li className="">
                                                       <a href="table_datatables_managed.html" className="nav-link "> Managed Datatables </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_buttons.html" className="nav-link "> Buttons Extension </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_colreorder.html" className="nav-link "> Colreorder Extension </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_rowreorder.html" className="nav-link "> Rowreorder Extension </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_scroller.html" className="nav-link "> Scroller Extension </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_fixedheader.html" className="nav-link "> FixedHeader Extension </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_responsive.html" className="nav-link "> Responsive Extension </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_editable.html" className="nav-link "> Editable Datatables </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="table_datatables_ajax.html" className="nav-link "> Ajax Datatables </a>
                                                   </li>
                                               </ul>
                                           </li>
                                       </ul>
                                   </li>
                                   <li className="dropdown-submenu ">
                                       <a href="?p=" className="nav-link nav-toggle ">
                                           <i className="icon-wallet"></i> Portlets
                                           <span className="arrow"></span>
                                       </a>
                                       <ul className="dropdown-menu">
                                           <li className=" ">
                                               <a href="portlet_boxed.html" className="nav-link "> Boxed Portlets </a>
                                           </li>
                                           <li className=" ">
                                               <a href="portlet_light.html" className="nav-link "> Light Portlets </a>
                                           </li>
                                           <li className=" ">
                                               <a href="portlet_solid.html" className="nav-link "> Solid Portlets </a>
                                           </li>
                                           <li className=" ">
                                               <a href="portlet_ajax.html" className="nav-link "> Ajax Portlets </a>
                                           </li>
                                           <li className=" ">
                                               <a href="portlet_draggable.html" className="nav-link "> Draggable Portlets </a>
                                           </li>
                                       </ul>
                                   </li>
                                   <li className="dropdown-submenu ">
                                       <a href="?p=" className="nav-link nav-toggle ">
                                           <i className="icon-settings"></i> Elements
                                           <span className="arrow"></span>
                                       </a>
                                       <ul className="dropdown-menu">
                                           <li className=" ">
                                               <a href="elements_steps.html" className="nav-link "> Steps </a>
                                           </li>
                                           <li className=" ">
                                               <a href="elements_lists.html" className="nav-link "> Lists </a>
                                           </li>
                                           <li className=" ">
                                               <a href="elements_ribbons.html" className="nav-link "> Ribbons </a>
                                           </li>
                                           <li className=" ">
                                               <a href="elements_overlay.html" className="nav-link "> Overlays </a>
                                           </li>
                                           <li className=" ">
                                               <a href="elements_cards.html" className="nav-link "> User Cards </a>
                                           </li>
                                       </ul>
                                   </li>
                                   <li className="dropdown-submenu ">
                                       <a href="javascript:;" className="nav-link nav-toggle ">
                                           <i className="icon-bar-chart"></i> Charts
                                           <span className="arrow"></span>
                                       </a>
                                       <ul className="dropdown-menu">
                                           <li className=" ">
                                               <a href="charts_amcharts.html" className="nav-link "> amChart </a>
                                           </li>
                                           <li className=" ">
                                               <a href="charts_flotcharts.html" className="nav-link "> Flot Charts </a>
                                           </li>
                                           <li className=" ">
                                               <a href="charts_flowchart.html" className="nav-link "> Flow Charts </a>
                                           </li>
                                           <li className=" ">
                                               <a href="charts_google.html" className="nav-link "> Google Charts </a>
                                           </li>
                                           <li className=" ">
                                               <a href="charts_echarts.html" className="nav-link "> eCharts </a>
                                           </li>
                                           <li className=" ">
                                               <a href="charts_morris.html" className="nav-link "> Morris Charts </a>
                                           </li>
                                           <li className="dropdown-submenu ">
                                               <a href="javascript:;" className="nav-link nav-toggle"> HighCharts
                                                   <span className="arrow"></span>
                                               </a>
                                               <ul className="dropdown-menu">
                                                   <li className="">
                                                       <a href="charts_highcharts.html" className="nav-link " target="_blank"> HighCharts </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="charts_highstock.html" className="nav-link " target="_blank"> HighStock </a>
                                                   </li>
                                                   <li className="">
                                                       <a href="charts_highmaps.html" className="nav-link " target="_blank"> HighMaps </a>
                                                   </li>
                                               </ul>
                                           </li>
                                       </ul>
                                   </li>
                               </ul>
                           </li>
                       </ul>
                   </div>
                   {/* END MEGA MENU */}
               </div>
           </div>
           {/* END HEADER MENU */}
       </div>
       {/* END HEADER */}
       {/* BEGIN CONTAINER */}
       <div className="page-container">
           {/* BEGIN CONTENT */}
           <div className="page-content-wrapper">
               {/* BEGIN CONTENT BODY */}
               {/* BEGIN PAGE CONTENT BODY */}
               <div className="page-content">
                   <div className="container">
                       {/* BEGIN PAGE CONTENT INNER */}
                       <div className="page-content-inner">
                         <router-outlet></router-outlet>
                       </div>
                       {/* END PAGE CONTENT INNER */}
                   </div>
               </div>
               {/* END PAGE CONTENT BODY */}
               {/* END CONTENT BODY */}
           </div>
           {/* END CONTENT */}
       </div>
       {/* END CONTAINER */}
       {/* BEGIN FOOTER */}
       {/* BEGIN PRE-FOOTER */}
       <div className="page-prefooter">
           <div className="container">
               <div className="row">
                   <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
                       <h2>About</h2>
                       <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam dolore. </p>
                   </div>
                   <div className="col-md-3 col-sm-6 col-xs12 footer-block">
                       <h2>Subscribe Email</h2>
                       <div className="subscribe-form">
                           <form action="javascript:;">
                               <div className="input-group">
                                   <input type="text" placeholder="mail@email.com" className="form-control">
                                   <span className="input-group-btn">
                                       <button className="btn" type="submit">Submit</button>
                                   </span>
                               </div>
                           </form>
                       </div>
                   </div>
                   <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
                       <h2>Follow Us On</h2>
                       <ul className="social-icons">
                           <li>
                               <a href="javascript:;" data-original-title="rss" className="rss"></a>
                           </li>
                           <li>
                               <a href="javascript:;" data-original-title="facebook" className="facebook"></a>
                           </li>
                           <li>
                               <a href="javascript:;" data-original-title="twitter" className="twitter"></a>
                           </li>
                           <li>
                               <a href="javascript:;" data-original-title="googleplus" className="googleplus"></a>
                           </li>
                           <li>
                               <a href="javascript:;" data-original-title="linkedin" className="linkedin"></a>
                           </li>
                           <li>
                               <a href="javascript:;" data-original-title="youtube" className="youtube"></a>
                           </li>
                           <li>
                               <a href="javascript:;" data-original-title="vimeo" className="vimeo"></a>
                           </li>
                       </ul>
                   </div>
                   <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
                       <h2>Contacts</h2>
                       <address className="margin-bottom-40"> Phone: 800 123 3456
                           <br> Email:
                           <a href="mailto:info@metronic.com">info@metronic.com</a>
                       </address>
                   </div>
               </div>
           </div>
       </div>
       {/* END PRE-FOOTER */}
       {/* BEGIN INNER FOOTER */}
       <div className="page-footer">
           <div className="container"> 2014 &copy; Metronic by keenthemes.
               <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
           </div>
       </div>
       <div className="scroll-to-top">
           <i className="icon-arrow-up"></i>
       </div>
       {/* END INNER FOOTER */}
       {/* END FOOTER */}
