import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

const Messages = new Mongo.Collection('messages');

Template.ChatInput.events({
  'submit form': function(event) {
    event.preventDefault();
    const form = event.target;
    const createdAt = new Date();
    const author = form.author.value;
    const text = form.text.value;
    Messages.insert({createdAt, author, text});
  }
})

Template.ChatMessages.onCreated(function () {
  this.subscribe(() => this.subscribe('messages'));
})

Template.ChatMessages.helpers({
  messages() {
    return Messages.find({}, {sort: {createdAt: -1}});
  }
})
