AutoForm.hooks({
  insertJobForm: {
  

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name
    onSuccess: function(operation, result, template) {
      Router.go('jobs')
    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {
      alert(error)
    }

    // formToDoc: function(doc, ss, formId){
    //   console.log(doc)
    //   doc.owner = Meteor.userId()
    //   console.log(doc)
    //   return doc;
    // }
  }
});