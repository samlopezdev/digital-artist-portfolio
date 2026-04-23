import { MdLandscape, MdPayments, MdCheck } from "react-icons/md";

export const PaymentInfo = () => {
  return (
    <section className="flex py-15 w-full gap-5">
      <div>
        <div className="bg-primary/8 rounded-lg 2xl:rounded-2xl flex flex-col items-baseline gap-2 p-5 mb-5">
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
            <MdLandscape className="text-primary" /> Backgrounds
          </h2>
          <p className="text-[#322528] leading-relaxed mb-4 text-balance">
            Detailed environments and cinematic scenes that breathe life into
            your characters.
          </p>
          <div className="bg-white p-4 rounded-xl inline mb-8">
            <span className="text-xl font-bold text-primary">$100 - $300+</span>
          </div>
        </div>

        <div className="bg-primary/20 rounded-lg 2xl:rounded-2xl p-5">
          <h2 className="flex items-center text-2xl font-bold mb-4 gap-2">
            <MdPayments className="text-primary" /> Payment
          </h2>
          <ul className="space-y-3 text-[#322528] mb-8">
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
      <div className="rounded-lg 2xl:rounded-2xl overflow-hidden aspect-square md:aspect-auto shadow-xl shadow-primary/5 w-2/3">
        <img
          src="src/assets/images/ForestHouseWallpaper-min.png"
          className="w-full h-full object-cover rounded-lg 2xl:rounded-2xl"
        />
      </div>
    </section>
  );
};
