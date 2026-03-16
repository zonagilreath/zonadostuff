import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

const SCREENSHOTS = {
  billSummary:    '/images/athena_bill_summary.jpg',
  pppSummary:     '/images/athena_ppp_summary.jpg',
  auth:           '/images/athena_auth.jpg',
  options:        '/images/athena_options.jpg',
  method:         '/images/athena_method.jpg',
  review:         '/images/athena_review.jpg',
  confirmation:   '/images/athena_confirmation.jpg',
} as const;

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center border border-border/70 bg-bg/25 px-2.5 py-1 font-code text-[12px] text-muted">
      {children}
    </span>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <div className="font-code text-xs tracking-[0.22em] text-muted">{label}</div>
      <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Screenshot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-10 space-y-3">
      <img
        src={src}
        alt={alt}
        className="w-full border border-border/70 object-cover"
        loading="lazy"
      />
      <figcaption className="font-code text-[11px] tracking-[0.18em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-border/70 bg-bg/25 px-4 py-3">
      <div className="font-heading text-2xl font-bold text-text">{value}</div>
      <div className="mt-1 font-code text-[11px] tracking-[0.16em] text-muted">{label}</div>
    </div>
  );
}

export function AthenahealthCaseStudy() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">CASE STUDY · 2020–2025</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            athenahealth
          </h1>

          <p className="mt-2 font-code text-xs tracking-[0.22em] text-muted">
            Lead Member of Technical Staff · Patient Financial Products
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Five years building and leading patient-facing payment products at athenahealth — a
            healthcare SaaS platform serving 12,000 practices, 160,000 providers, and 30 million
            monthly active users. The work spanned bill pay, prepayment plans, card management,
            and payment plan infrastructure, contributing to $2.5 billion in annual patient
            payments processed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-5 py-3 font-code text-sm font-semibold text-text transition-colors hover:border-accent/30"
            >
              Back
              <span aria-hidden>←</span>
            </Link>
            <a
              href="mailto:bryson.gilreath@gmail.com"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Contact
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Apollo GraphQL</Tag>
            <Tag>Java Spring Boot</Tag>
            <Tag>HIPAA</Tag>
            <Tag>Payment flows</Tag>
          </div>
        </div>

        {/* Impact stats */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat value="$2.5B" label="ANNUAL PATIENT PAYMENTS" />
          <Stat value="30M" label="MONTHLY ACTIVE USERS" />
          <Stat value="60K+" label="PAYMENT PLANS / MONTH" />
          <Stat value="81.1%" label="PAYMENTS IN 5 DAYS" />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-12">

              <section>
                <SectionTitle label="01" title="Scale and constraints" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Patient financial products at athenahealth operate under a dense set of
                    constraints: HIPAA compliance, PCI-adjacent payment handling, multi-tenant
                    practice configurations, and a user base that spans digital-native patients
                    to elderly users paying their first online bill. Flows need to be correct
                    across all of them simultaneously.
                  </p>
                  <p>
                    The engineering environment reflects this: changes are carefully reviewed,
                    instrumented, and rolled out incrementally. The dominant engineering values
                    are predictable behavior, auditability, and defensive patterns that reduce
                    runtime ambiguity at the UI boundary.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="Bill pay" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The bill pay flow covers the full patient journey: identity verification,
                    an itemized bill summary with a stacked breakdown of insurance adjustments,
                    insurance payments, prior payments, and amount due, through a three-step
                    payment funnel ending in a printable confirmation.
                  </p>
                  <p>
                    The bill summary view derives a visual proportional breakdown from the same
                    data that feeds the line items — so the bar and the table are always in sync.
                    The payment step lets patients select partial amounts per bill, choose or add
                    a card (with expired card detection and default card management inline), review,
                    and confirm. Saved card state and selection persist across the funnel without
                    page reloads.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.billSummary}
                  alt="Bill summary page showing stacked bar breakdown of insurance adjustments, insurance paid, prior payments, and amount due"
                  caption="Bill summary — proportional bar and line-item breakdown derived from the same data, with per-bill detail expand"
                />

                <Screenshot
                  src={SCREENSHOTS.method}
                  alt="Payment method selection showing saved cards including expired card with delete action and default card badge"
                  caption="Payment method step — saved card list with expired detection, default badge, and inline card management"
                />
              </section>

              <section>
                <SectionTitle label="03" title="Prepayment plans" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Prepayment Plans (PiPP) let patients pay for upcoming procedures in
                    installments before the date of service — reducing collections burden
                    post-visit and improving upfront revenue capture. The feature drove a 15%
                    increase in Patient Pay Yield with 96% patient satisfaction and 60,000
                    plans created monthly at steady state.
                  </p>
                  <p>
                    The prepayment summary view shows plan progress with a live progress bar,
                    amount collected vs. remaining, and due-date status badges (Due Soon,
                    Past Due, Behind Schedule) that update based on plan state. The payment
                    selection step surfaces multiple concurrent plans as individually
                    checkable cards with editable amounts, each capped to their remaining
                    balance, feeding a single payment total.
                  </p>
                  <p>
                    Conversion rate during beta was 77%, with $20M collected before general
                    availability. The beta instrumentation — tracking plan creation, step
                    completion, and drop-off points — was built alongside the feature itself,
                    not retrofitted.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.pppSummary}
                  alt="Prepayment plan summary showing plan name, due date, progress bar, amount collected, and remaining balance"
                  caption="Prepayment plan summary — live progress bar and collection status with plan detail expand"
                />

                <Screenshot
                  src={SCREENSHOTS.options}
                  alt="Payment amount selection showing multiple prepayment plan cards with status badges and editable amount inputs"
                  caption="Amount selection step — per-plan amount inputs with status badges, capped to remaining balance"
                />
              </section>

              <section>
                <SectionTitle label="04" title="Guest pay and card on file" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Guest Pay allows patients to pay without an account, authenticated by last
                    name and date of birth against the practice record. The identity step is
                    intentionally minimal — two fields, no account creation friction — but
                    feeds into the same payment funnel as authenticated users.
                  </p>
                  <p>
                    Card on File (CoF) grew payment volume 38% from $168M in 2022 to $233M in
                    2024 through the Pay Now feature and digital consent flows. AutoPay payment
                    plans grew 35% in 2023 with over 60% digitally consented, reducing
                    paper-based authorization overhead and improving recurring payment
                    reliability.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.auth}
                  alt="Guest pay identity verification screen asking for patient last name and date of birth"
                  caption="Guest pay auth — last name and date of birth verification, no account required"
                />
              </section>

              <section>
                <SectionTitle label="05" title="Payment funnel" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The three-step payment funnel — amount, method, review — is shared across
                    bill pay and prepayment flows. State is held in a coordinated context that
                    lets each step read and write selections without prop drilling, and inline
                    “Change” links on the review step jump back to the relevant step without
                    losing progress.
                  </p>
                  <p>
                    The confirmation step produces a structured payment summary: items paid,
                    card used, billing address, trace number, transaction number, and approval
                    code — the full set of fields a patient might need to reconcile with their
                    bank or dispute a charge. It is printable from the page header.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.review}
                  alt="Payment review step showing payment amount, Change link, selected Mastercard, billing address, and Confirm Payment button"
                  caption="Review step — full payment summary with inline Change links and billing address confirmation"
                />

                <Screenshot
                  src={SCREENSHOTS.confirmation}
                  alt="Payment confirmation showing items paid, payment method, date, practice address, trace number, and approval code"
                  caption="Confirmation — structured receipt with trace number, transaction identifier, and approval code for patient records"
                />
              </section>

              <section>
                <SectionTitle label="06" title="Engineering approach" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The backend runs Apollo Server with a GraphQL API — flexible enough to serve
                    the varied data shapes that bill pay, prepayments, and payment plans each need
                    without proliferating REST endpoints. The frontend is React + TypeScript with
                    shared types at the API boundary, enforced through codegen.
                  </p>
                  <p>
                    Key patterns: shared discriminated types for payment plan status (driving
                    badge rendering and due-date logic), defensive null handling at GraphQL
                    response boundaries, and instrumentation built into flows at the component
                    level so analytics events fire at the same points regardless of which
                    entry path a patient took to reach the step.
                  </p>
                </div>
              </section>

            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">AT A GLANCE</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">ROLE</div>
                <div className="mt-1 text-text">Lead Member of Technical Staff</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">TENURE</div>
                <div className="mt-1 text-text">2020 – 2025</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">PRODUCTS</div>
                <div className="mt-1 text-text">Bill Pay · Prepayment Plans · Card on File · AutoPay · Guest Pay</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">STACK</div>
                <div className="mt-1 text-text">React · TypeScript · Apollo GraphQL · Java Spring Boot</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">SCALE</div>
                <div className="mt-1 text-text">30M MAU · 12K practices · $2.5B payments/yr</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">COMPLIANCE</div>
                <div className="mt-1 text-text">HIPAA · PCI-adjacent payment handling</div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
