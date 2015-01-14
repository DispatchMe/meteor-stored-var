if (Meteor.isClient) {
  var storedNumber = new StoredVar('storedNumber');
  if (!storedNumber.get()) storedNumber.set(0);

  Template.example.events({
    'click button': function () {
      storedNumber.set(storedNumber.get() + 1);
    }
  });

  Template.example.helpers({
    number: storedNumber.get
  });
}
