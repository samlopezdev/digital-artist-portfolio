import { MdLandscape, MdPayments, MdCheck } from "react-icons/md";

export const PaymentInfo = () => {
  return (
    <section className="flex">
      <div>
        <div className="bg-primary/15 flex flex-col gap-2">
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
            <MdLandscape className="text-primary" /> Backgrounds
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Detailed environments and cinematic scenes that breathe life into
            your characters.
          </p>
          <div className="bg-white p-4 rounded-xl inline-block">
            <span className="text-xl font-bold text-primary">$100 - $300+</span>
          </div>
        </div>

        <div className="bg-primary/20">
          <h2 className="flex items-center text-2xl font-bold mb-4 gap-2">
            <MdPayments className="text-primary" /> Payment
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center gap-2">
              <MdCheck /> %50 upfront deposit required.
            </li>
            <li className="flex items-center gap-2">
              <MdCheck /> Secured via PayPal
            </li>
            <li className="flex items-center gap-2">
              <MdCheck /> 3% transaction fee added to total
            </li>
          </ul>
        </div>
      </div>
      <div className="aspect-square">
        <img src="src/assets/images/ForestHouseWallpaper-min.png" className="rounded-2xl"/>
      </div>
    </section>
  );
};
