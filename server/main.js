import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Messages = new Mongo.Collection('messages');

Meteor.publish('messages', function () {
  return Messages.find();
});
