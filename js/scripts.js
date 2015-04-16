jQuery(document).ready(function() {
  $("#first").focus();
  $("#contact-form").submit(function(event) {

    var firstName = $("input#first").val();
    var lastName = $("input#last").val();
    var phone = $("input#phone").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var contact = { firstName: firstName, lastName: lastName, phone: phone,
      street: street, city: city, state: state, zip: zip,
      fullAddress: function() {
        return (this.street + " " + this.city + ", " + this.state + " " + this.zip);
      }
    };

    $("ul#contact-list").append("<li><span class='contact'>" +
      contact.firstName + " " + contact.lastName + "</span></li>");

    $('.contact').last().click(function() {
      $('#show-contact').toggle();
      $('#show-contact h2').text(contact.firstName + ' ' + contact.lastName);
      $('.first-name').text(contact.firstName);
      $('.last-name').text(contact.lastName);
      $('.phone').text(contact.phone);
      $('.address').text(contact.fullAddress());
    });

    $("input#first").val("");
    $("input#last").val("");
    $("input#phone").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
    $("input#zip").val("");

    $('#contact-list').show();
    $('#contacts-list').show();
    event.preventDefault();
  });

  $("#add-address").click(function() {
    $("#new-addresses").append(
      '<div class="new-address">' +
        '<div class="form-group">' +
           '<h3>New Address</h3>' +
           '<input type="text" class="form-control new-street" placeholder="New Street address">' +
         '</div>' +
         '<div class="form-group">' +
           '<input type="text" class="form-control new-city" placeholder="New City">' +
         '</div>' +
         '<div class="form-group">' +
           '<input type="text" class="form-control new-state" placeholder="New State">' +
         '</div>' +
       '</div>');
  });
});
