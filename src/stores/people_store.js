'use strict';

import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions';

const PeopleStore = Reflux.createStore({
  listenables: [Actions],

  onLoadData: function() {
    var people = require('../../data/people.json');
    debugger;
    this.trigger({people: people});
  }
});
