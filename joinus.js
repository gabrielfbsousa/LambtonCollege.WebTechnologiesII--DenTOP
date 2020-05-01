 $(document).ready(function() {   	
    	$("#joinus_form").validate({
        rules: {
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            confirmemail: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            password: {
                required: true,
            },
            confirmpassword: {
                required: true,
                equalTo: "#password"
            },
        },
        messages: {
            confirmemail: {
                equalTo: "This entry must equals previous entry"
            }
        },
    });
});
