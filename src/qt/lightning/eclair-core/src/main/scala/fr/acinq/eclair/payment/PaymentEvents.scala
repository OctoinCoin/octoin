package fr.acinq.eclair.payment

import fr.acinq.bitcoin.{BinaryData, Satoshi}

/**
  * Created by PM on 01/02/2017.
  */
sealed trait PaymentEvent {
  val paymentHash: BinaryData
}

case class PaymentSent(amount: Satoshi, feesPaid: Satoshi, paymentHash: BinaryData) extends PaymentEvent

case class PaymentRelayed(amountIn: Satoshi, amountOut: Satoshi, paymentHash: BinaryData) extends PaymentEvent

case class PaymentReceived(amount: Satoshi, paymentHash: BinaryData) extends PaymentEvent
