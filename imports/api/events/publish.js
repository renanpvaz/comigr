'use strict';

import { Meteor } from 'meteor/meteor';

import { Events } from './collection';

Meteor.publish('events', () => Events.find());