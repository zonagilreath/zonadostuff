import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

const SCREENSHOTS = {
  billingOverview:  '/images/athena_billing_overview.png',
  billSelection:    '/images/athena_bill_selection.png',
  paymentMethods:   '/images/athena_payment_methods.png',
  methodSelection:  '/images/athena_method_selection.png',
  paymentPlan:      '/images/athena_payment_plan.png',
  review:           '/images/athena_review.png',
  confirmation:     '/images/athena_confirmation.png',
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
                <SectionTitle label="02" title="Billing overview" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The Billing &amp; Payments hub is the patient's financial home — surfacing
                    outstanding balances, insurance status, and actionable CTAs in a single view.
                    A stacked bill summary bar visualizes the proportional breakdown of cost after
                    practice discount, insurance adjustments, insurance payments, and prior patient
                    payments against the amount due. The bar and line items derive from the same
                    data source, keeping them permanently in sync.
                  </p>
                  <p>
                    Contextual banners prompt patients to upload insurance card images or act on
                    pending balances. The "Make a Payment" and "Set Up Payment Plan" CTAs route
                    into the respective funnels, while per-bill detail expands inline for patients
                    who want to inspect individual charges before paying.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.billingOverview}
                  alt="Billing & Payments page showing amount due for 2 open bills with stacked bill summary bar breaking down cost, insurance adjustments, insurance paid, prior payments, and amount due"
                  caption="Billing overview — stacked proportional bar and line-item breakdown with per-bill detail expand"
                />
              </section>

              <section>
                <SectionTitle label="03" title="Card management and insurance" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The payment methods section lets patients manage saved cards with default
                    designation, expiration tracking, and inline actions — add, delete, or
                    promote a card to default without leaving the page. Each card displays its
                    network logo, masked number, expiration, and cardholder name alongside a
                    contextual actions menu.
                  </p>
                  <p>
                    Insurance on file surfaces active coverage with member ID and status badges
                    (On File, Removal Pending) so patients can verify their billing identity
                    at a glance. Card on File (CoF) grew payment volume 38% from $168M in 2022
                    to $233M in 2024 through Pay Now and digital consent flows. AutoPay plans
                    grew 35% in 2023 with over 60% digitally consented, reducing paper-based
                    authorization overhead.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.paymentMethods}
                  alt="Payment Methods section showing two saved Visa cards with default badge and actions menu, and Insurance section showing Aetna coverage on file with member ID"
                  caption="Card management — saved cards with default designation, and insurance on file with status badges"
                />
              </section>

              <section>
                <SectionTitle label="04" title="Bill pay funnel" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The three-step payment funnel — amount, method, review — is shared across
                    bill pay and payment plan flows. Step 1 surfaces each open bill as a
                    selectable card with the provider visit, date of service, and an editable
                    amount input capped to the bill balance. Patients can pay one bill or
                    combine multiple into a single transaction.
                  </p>
                  <p>
                    Step 2 presents saved payment methods with the default card pre-selected.
                    Each card shows its masked number, expiration, cardholder name, and network
                    logo with inline delete and default management. Step 3 is a final review
                    showing the total, selected card, and billing address with inline "Change"
                    links that jump back to the relevant step without losing progress. State is
                    held in a coordinated context so each step reads and writes selections
                    without prop drilling.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.billSelection}
                  alt="Make a Payment step 1 showing two bills due now with provider visit details and editable payment amounts"
                  caption="Step 1 — per-bill amount inputs with due-now badges, capped to remaining balance"
                />

                <Screenshot
                  src={SCREENSHOTS.methodSelection}
                  alt="Make a Payment step 2 showing saved Visa cards with default card pre-selected and inline card management"
                  caption="Step 2 — saved card selection with default pre-selected, inline delete and make-default controls"
                />

                <Screenshot
                  src={SCREENSHOTS.review}
                  alt="Make a Payment step 3 showing total payment amount, selected Visa card, billing address, and Change links"
                  caption="Step 3 — full payment summary with inline Change links, card details, and billing address confirmation"
                />
              </section>

              <section>
                <SectionTitle label="05" title="Payment plans" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Payment plans let patients split their balance into predictable monthly
                    installments — reducing collections burden and improving upfront revenue
                    capture. The setup flow presents tiered options (4, 8, or 12 months)
                    with calculated monthly amounts and final payment dates, followed by
                    billing details and payment method selection.
                  </p>
                  <p>
                    Prepayment Plans (PiPP) drove a 15% increase in Patient Pay Yield with
                    96% patient satisfaction and 60,000 plans created monthly at steady state.
                    Conversion rate during beta was 77%, with $20M collected before general
                    availability. The instrumentation — tracking plan creation, step completion,
                    and drop-off points — was built alongside the feature itself, not retrofitted.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.paymentPlan}
                  alt="Payment plan setup showing three installment options — 4 months at $626.88, 8 months at $313.44, and 12 months at $208.90 — for a $6,507.50 balance"
                  caption="Plan setup — tiered installment options with calculated monthly amounts and final payment dates"
                />
              </section>

              <section>
                <SectionTitle label="06" title="Confirmation and receipts" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The confirmation step produces a structured payment summary: visit details,
                    amount paid, payment date, and email confirmation — the full set of fields
                    a patient needs to reconcile with their bank or dispute a charge. A share
                    receipt action and print button provide offline record-keeping for patients
                    who need documentation for insurance or reimbursement.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.confirmation}
                  alt="Payment confirmation showing thank-you message, email confirmation sent, share receipt action, and payment summary with visit details and amount paid"
                  caption="Confirmation — structured receipt with visit details, payment date, and share/print actions"
                />
              </section>

              <section>
                <SectionTitle label="07" title="Engineering approach" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The backend runs Apollo Server with a GraphQL API — flexible enough to serve
                    the varied data shapes that bill pay, payment plans, and card management each
                    need without proliferating REST endpoints. The frontend is React + TypeScript
                    with shared types at the API boundary, enforced through codegen.
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
