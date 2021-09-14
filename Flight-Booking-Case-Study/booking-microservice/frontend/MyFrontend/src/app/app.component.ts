import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFrontend';

  paymentRequest:google.payments.api.PaymentDataRequest={
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {
        type:'CARD',
        parameters:
        {
            allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
            allowedCardNetworks:['AMEX','VISA','MASTERCARD'],
        },
        tokenizationSpecification:
        {
          type:'PAYMENT_GATEWAY',
          parameters:{
            gateway:'example',
            gatewayMerchantId:'exampleGatewayMerchantId'
          },
        },
      },
    ],
    
    merchantInfo:
    {
        merchantId:'environment.payment.googlePayMerchantId',
        merchantName:'Demo Merchant'
    },
    transactionInfo:
    {
      totalPriceStatus:'FINAL',
      totalPriceLabel:'Total',
      totalPrice:'1000',
      currencyCode:'INR',
      countryCode:'BE'
    },
  };

  onLoadPaymentData=(
    event:Event
  ):void=>{
    const eventDetail=event as CustomEvent<google.payments.api.PaymentData>
    console.log('load Payment data',eventDetail.detail);
  }

}
