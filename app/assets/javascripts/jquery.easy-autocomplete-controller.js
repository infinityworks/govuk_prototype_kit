
// Hack the width
$('#example-conditions').removeAttr('style');

/* Mobile only toggle fitlers */
var options = {

  url: "/javascripts/conditions.json",
  adjustWidth: false,

  categories: [{
      listLocation: "pregancy",
      maxNumberOfElements: 4,
      header: "Pregancy"
  }, {
      listLocation: "mental health",
      maxNumberOfElements: 4,
      header: "Mental Health"
  }, {
      listLocation: "apps",
      maxNumberOfElements: 4,
      header: "Apps"
  }, {
      listLocation: "healthy living",
      maxNumberOfElements: 4,
      header: "Healthy Living"
  }],

  getValue: function(element) {
      return element.condition;
      return element.website;

  },

  template: {
      type: "description",
      fields: {
          description: "details"
      }
  },

  list: {
      maxNumberOfElements: 8,
      match: {
          enabled: true
      },
      sort: {
          enabled: true
      }, onClickEvent: function() {

        var websiteSelected = $("#example-conditions").getSelectedItemData().website;
        window.location.href = websiteSelected;
        //alert(websiteSelected);

    }
  },

  theme: "square"

};

$("#example-conditions").easyAutocomplete(options);


/* Jump to selectbox */
$(function(){
  // bind change event to select
  $('#select-box').on('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });
});
