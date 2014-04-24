<?php
class SD_AjaxAdd_CartController extends Mage_Core_Controller_Front_Action
{
    public function addAction() {	
        $urlParams = $this->getRequest()->getParams();
        //$urlParams['product'];
        //$urlParams['type'];
        Mage::helper('catalog/product')->initProduct($urlParams['product'], $this);
        $body = $this->getLayout()->createBlock('product.info')->toHtml();// taken from catalog.xml
        Mage::log($body);
        //$this->getResponse()->setBody($body);
        //$this->getRequest()->getParam('resid')
    }
}
