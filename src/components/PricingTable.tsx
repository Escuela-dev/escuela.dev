import "./PricingTable.css";

function CheckIcon({ isAvailable = true }: { isAvailable?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-5 w-5 flex-shrink-0 ${
        isAvailable
          ? "text-blue-600 dark:text-blue-500"
          : "text-gray-600 dark:text-gray-500"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Check icon</title>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

const plans = [
  {
    title: "One on one",
    price: 39,
    priceDescription: "/hour",
    link: "https://cal.com/escuela",
    buttonText: "Enquire",
    features: [
      {
        title: "Online",
        isAvailable: true,
      },
      {
        title: "In person (in Malaga)",
        isAvailable: true,
      },
      {
        title: "1h 30m sessions",
        isAvailable: true,
      },
    ],
  },
  {
    title: "Group class",
    price: 340,
    priceDescription: "/course \n (€85 per week)",
    link: "https://maven.com/escuela-dev/web-hybrid-malaga",
    buttonText: "Enroll",
    features: [
      {
        title: "Online",
        isAvailable: false,
      },
      {
        title: "In person (in Malaga)",
        isAvailable: true,
      },
      {
        title: "1h 30m sessions",
        isAvailable: true,
      },
      {
        title: "up to 4 people",
        isAvailable: true,
      },
      {
        title: "4-week course",
        isAvailable: true,
      },
    ],
  },
  {
    title: "2-day Workshop",
    priceDescription: "Custom pricing",
    link: "gianfranco@escuela.dev",
    buttonText: "Contact us",
    features: [
      {
        title: "Online",
        isAvailable: false,
      },
      {
        title: "In person (in Malaga)",
        isAvailable: true,
      },
      {
        title: "From 10am to 5pm",
        isAvailable: true,
      },
      {
        title: "Lunch included",
        isAvailable: true,
      },
    ],
  },
];

function renderFeatures(features: { title: string; isAvailable: boolean }[]) {
  return (
    <ul role="list" className="my-7 space-y-5">
      {features.map((feature, i) => (
        <li key={i} className="flex space-x-3">
          {feature.isAvailable ? (
            <>
              <CheckIcon />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {feature.title}
              </span>
            </>
          ) : (
            <>
              <CheckIcon isAvailable={false} />
              <span className="text-base font-normal leading-tight text-gray-500 line-through decoration-gray-500">
                {feature.title}
              </span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function PricingTable() {
  const priceContainer = {
    height: 100,
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 font-sans lg:px-6 lg:py-16">
      <div className="grid items-baseline space-y-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:space-y-0 xl:gap-10">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="plan-item z-10 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8"
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {plan.title}
            </h5>
            <div
              style={priceContainer}
              className="flex items-baseline text-gray-900 dark:text-white"
            >
              <span className="whitespace-pre-line text-3xl font-semibold">
                {plan.price ? (
                  <>&euro;</>
                ) : (
                  plan.priceDescription && <>{plan.priceDescription}</>
                )}
              </span>
              <span className="text-5xl font-extrabold tracking-tight">
                {plan.price}
              </span>
              {plan.price && plan.priceDescription && (
                <span className="text-l ml-1 whitespace-pre-line font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                  {plan.priceDescription}
                </span>
              )}
            </div>
            <a
              href={plan.link.includes("@") ? `mailto:${plan.link}` : plan.link}
              className="button gradient-border dark:text-white"
            >
              {plan.buttonText}
            </a>
            {renderFeatures(plan.features)}
          </div>
        ))}
      </div>
    </div>
  );
}
