import { Check, Shirt, Dumbbell, Store } from 'lucide-react';
import { UNIFORM_GUIDE } from '../data/schoolData';

/**
 * Full uniform guide for Primary and Junior School, including the P.E. kit and
 * the official supplier named by the school.
 */
export function UniformGuide() {
  return (
    <section
      id="uniforms"
      className="relative overflow-hidden border-t border-[#F2F3F2] bg-[#F8F9F8] py-24 transition-colors duration-400 dark:border-[#084c31] dark:bg-[#041f14] sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-plaid-subtle opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
            Dress Code & School Identity
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#252B28] text-balance dark:text-[#F2F3F2] sm:text-4xl lg:text-5xl">
            What Our Learners Wear.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#252B28]/80 text-balance dark:text-[#E2E8F0]/80 sm:text-base">
            Clear uniform guidance for Primary and Junior School, including the official P.E. kit. Every item is purchased from the school&apos;s approved supplier.
          </p>
        </div>

        {/* Primary & Junior School */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {UNIFORM_GUIDE.levels.map((level) => (
            <article
              key={level.id}
              className="overflow-hidden rounded-2xl border border-[#C6C9C7]/50 bg-white shadow-xs transition-colors dark:border-[#0d5538] dark:bg-[#073322]"
            >
              <div className="flex items-center gap-3.5 border-b border-[#F2F3F2] p-6 dark:border-[#084c31]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087A50] dark:bg-[#094d31] dark:text-emerald-300">
                  <Shirt className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#252B28] dark:text-[#F2F3F2]">
                    {level.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#075638] dark:text-emerald-400">
                    {level.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-[#F2F3F2] dark:divide-[#084c31] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {(['boys', 'girls'] as const).map((gender) => (
                  <div key={gender} className="p-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#087A50] dark:text-emerald-400">
                      {gender === 'boys' ? 'Boys' : 'Girls'}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {level[gender].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#252B28]/80 dark:text-[#E2E8F0]/85 sm:text-sm"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#087A50] dark:text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* P.E. Kit & Supplier */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#C6C9C7]/50 bg-white p-6 shadow-xs transition-colors dark:border-[#0d5538] dark:bg-[#073322] sm:p-8 lg:col-span-2">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#087A50] dark:bg-[#094d31] dark:text-emerald-300">
                <Dumbbell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#252B28] dark:text-[#F2F3F2]">
                  P.E. Kit
                </h3>
                <p className="text-xs font-semibold text-[#075638] dark:text-emerald-400">
                  Boys & Girls
                </p>
              </div>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {UNIFORM_GUIDE.pe.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-[#252B28]/80 dark:text-[#E2E8F0]/85 sm:text-sm"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#087A50] dark:text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#053c27] bg-[#075638] p-6 text-white shadow-sm sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-plaid-dark opacity-30" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-emerald-200">
                <Store className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold">Where to Buy</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-100/85">
                All listed uniform items are to be purchased at:
              </p>
              <p className="mt-2 font-heading text-base font-bold text-white">
                {UNIFORM_GUIDE.supplier}
              </p>
              <p className="mt-4 border-t border-white/15 pt-3 text-xs leading-relaxed text-emerald-200/75">
                Uniform requirements are confirmed with the school office during admission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
