import thankYou from "./assets/images/icon-thank-you.svg";
export default function OrderConfirmation() {
  return (
    <div className="OrderConfirmation">
      <img src={thankYou} alt="" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you hae fun using our
        platform. If you ever need support, please feel free to email us at
        support@loregaming.com
      </p>
    </div>
  );
}
