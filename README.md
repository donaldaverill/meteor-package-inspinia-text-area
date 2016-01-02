# Blaze textarea component for the [Inspinia](https://wrapbootstrap.com/theme/inspinia-responsive-admin-theme-WB0R5L90S) admin theme.
**Note:** Must include styles separately.
### Installation
```bash
meteor add fourquet:inspinia-text-area
```
### Example:
```html
<!-- formTemplate.html -->
<template name="formTemplate">
  <form id="someForm">
    {{> inspiniaTextArea
      field="someText"
      label="Some Text"
      placeholder="Enter some words"
      value=(formValue "someText")
      maxLength="100"
      onChange=fieldChanged
      required=true
      helpText='Some helpful information'
    }}
    <input type="submit">
  </form>
</template>
```
```js
// formTemplate.js
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
```
See [full example in the repository](https://github.com/fourquet/meteor-package-inspinia-text-area/tree/master/example).
##### Arguments:
- *field*, String, Required.
  - The name of the textarea.
- *value*, String, Optional.
  - The value of the textarea.
- *onChange*, Function, Optional.
  - Function to run on change and keyup events.
- *label*, String, Required unless *skipLabel* is `true`.
  - The label for the input textarea.
- *skipLabel*, Boolean, Optional.
  - If `true`, the label will not be displayed. Additionally, *label* will not be required.
- *required*, Boolean, Optional.
  - `true` if the textarea should be required for the form.
- *disabled*, Boolean, Optional.
  - Sets the textarea to disabled.
- *placeholder*, String, Optional.
  - Text to display as a placeholder for the textarea.
- *maxLength*, Number, Optional.
  - The maximum number of characters for the textarea.
- *helpText*, String, Optional.
  - Helpful information to display below the textarea.
- *success*, Boolean, Optional
  - Displays message below textarea but only if the *success* is `false` and *submitted* is `true` and *error* message exists.
- *submitted*, Boolean, Optional
  - If *success* is `true`, an error message may be displayed below the textarea.
- *errorMessage*, String, Optional
  - An error message to be displayed if *success* is `false` and *submitted* is `true`.

### Version
0.0.1

License
----

MIT
