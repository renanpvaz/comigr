'use strict';

import { Meteor } from 'meteor/meteor';

import { Places } from './collection';

if (Meteor.isServer) {
  Meteor.publish('nearbyPlaces', (coords,  meters = 40000) => {
    console.log('connected to nearby!');

    const query = {
      location: {
        $near:{
          $geometry:{
            type:'Point',
            coordinates: [coords.longitude, coords.latitude]
          },
          $maxDistance: meters
        }
      }
    };

    return Places.find(query);
  });

  Meteor.publish('allPlaces', () => {
    return Places.find({}, { sort: { createdAt: -1 } });
  });

  Meteor.publish('userPlaces', function () {
    const query = {
      'user._id': this.userId
    };
    return Places.find(query);
  });
}
