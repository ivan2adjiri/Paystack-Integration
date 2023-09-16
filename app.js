
function payWithPaystack() {

    var handler = PaystackPop.setup({ 
        key: 'your_public_key', 
        email: 'customer@email.com', 
        amount: 370000, 
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2348012345678" 
                }
            ]
        },
        callback: function (response) {
           
            $.post("verify.php", {reference:response.reference}, function(status){
                if(status == "success")
                  
                    alert('Transaction was successful');
                else
                    
                    alert(response);
            });
        },
        onClose: function () {
            
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); 
}
