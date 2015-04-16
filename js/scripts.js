jQuery(document).ready(function() {
  $("#first").focus();
  $("#contact-form").submit(function(event) {

    var firstName = $("input#first").val();
    var lastName = $("input#last").val();
    var phone = $("input#phone").val();
    var contact = { firstName: firstName, lastName: lastName, phone: phone,
      addresses: []
    };

    $(".new-address").each(function() {
      var street = $(this).find("input.new-street").val();
      var city = $(this).find("input.new-city").val();
      var state = $(this).find("input.new-state").val();
      var zip = $(this).find("input.new-zip").val();

      var newAddress = { street: street, city: city, state: state, zip: zip };
      contact.addresses.push(newAddress);
    });

    $("ul#contact-list").append("<li><span class='contact'>" +
      contact.firstName + " " + contact.lastName + "</span></li>");

    $('.contact').last().click(function() {
      $('#show-contact').toggle();
      $('#show-contact h2').text(contact.firstName + ' ' + contact.lastName);
      $('.first-name').text(contact.firstName);
      $('.last-name').text(contact.lastName);
      $('.phone').text(contact.phone);

      $('ul#addresses').text("");
      contact.addresses.forEach(function(address) {
        $('ul#addresses').append("<li>" + address.street + ", " + address.city +
        ", " + address.state + " " + address.zip + "</li>");
      });
    });

    $("input#first").val("");
    $("input#last").val("");
    $("input#phone").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-zip").val("");

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
         '<div class="form-group">' +
           '<input type="number" class="form-control new-zip" placeholder="New Zip">' +
         '</div>' +
       '</div>');
  });
});
