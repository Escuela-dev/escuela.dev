function CheckIcon({ isAvailable = true }: { isAvailable?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`flex-shrink-0 w-5 h-5 ${
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
    <ul role="list" className="space-y-5 my-7">
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
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {plan.title}
            </h5>
            <div
              style={priceContainer}
              className="flex items-baseline text-gray-900 dark:text-white"
            >
              <span className="text-3xl font-semibold whitespace-pre-line">
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
                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line">
                  {plan.priceDescription}
                </span>
              )}
            </div>
            <a
              href={plan.link.includes("@") ? `mailto:${plan.link}` : plan.link}
              className="block w-full px-4 py-2 text-base font-medium leading-6 text-center text-white transition duration-200 ease-in mr-2 mb-2 bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
