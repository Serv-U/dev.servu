<?php
class SD_AjaxAdd_Block_CartAdd extends Mage_Catalog_Block_Product_List
{
    public function getAddToCartUrl($product, $additional = array())
    {
        if ($product->getTypeInstance(true)->hasRequiredOptions($product)) {

            if (!isset($additional['_escape'])) {
                $additional['_escape'] = true;
            }
            if (!isset($additional['_query'])) {
                $additional['_query'] = array();
            }
            $additional['_query']['options'] = 'cart';

            return $this->getProductUrl($product, $additional).'&type=configurable';
        }
        
        return $this->helper('checkout/cart')->getAddUrl($product, $additional).'?type=simple';
    }

}
