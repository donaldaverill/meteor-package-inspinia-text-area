if (Meteor.isClient) {
  const formFields = new ReactiveDict('formFields');
  Template.formTemplate.helpers({
    formValue(fieldName) {
      return formFields.get(fieldName);
    },
    fieldChanged() {
      // must return a function
      return function() {
        fieldName = this.$('textarea').data().fieldName;
        newValue = this.$('textarea').val();
        formFields.set(fieldName, newValue);
      };
    },
  });

  Template.formTemplate.events({
    'submit'(e, t) {
      e.preventDefault();
      const message = `Some Text: ${formFields.get('someText')}`;
      alert(message);
    }
  });
}
