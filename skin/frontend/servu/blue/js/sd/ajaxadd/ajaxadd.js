$j(document).ready(function() {
    
    oldSetLocation = window.setLocation;
    
    $j("#dialog-form").dialog({autoOpen : false, modal : true, show : "blind", hide : "blind",width:'400px'});
    
    window.setLocation = function(url){
        if(  url.indexOf("/checkout/cart/add")>-1  ){
            if(url.indexOf("product_type=grouped")>-1 || url.indexOf("product_type=bundle")>-1){
                alert('1st');
            }else{
                simpleProduct(url);
            }
        }else if (url.indexOf('options=cart')> -1){
            configurableProduct();
        }else{
            oldSetLocation(url);
        }
    }
    
    simpleProduct = function(url){
        url = url.replace('/checkout/', '/ajaxadd/');
        console.log(url);

        $j("#dialog-form").dialog({
            open: function(event, ui) {
                //showLoading();
                $j.ajax({
                   url: url,
                   type: 'get',
                   dataType: 'json',
                   success: function(data) { 
                       console.log('data');
                        //$j(".col-main").html(data['col_main_content']);
                        //$j(".block.block-layered-nav").replaceWith(data['filter_content']);
                        //hideLoading();
                    },
                    error: function(error) {
                       console.log(error);
                       //hideLoading();
                    }
                });
            },
            buttons: {
                "Add to Cart": function() {
                    productAddToCartForm.submit();
                },
                "Cancel":function() {
                    $j(this).dialog( "close" );
                },
            }
        });
        $j("#dialog-form").dialog("open");
        return false;
    };
  
})









