import { PricingTable } from "@clerk/nextjs";

function PricingPage() {
  return <div>PricingPage
  <PricingTable newSubscriptionRedirectUrl="/dashboard" />
    </div>
}

export default PricingPage;
