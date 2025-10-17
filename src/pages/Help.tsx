import {
  FaApple,
  FaAndroid,
  FaDesktop,
  FaEnvelopeOpenText,
} from 'react-icons/fa';

export default function Help() {
  return (
    <>
      <header className="text-center my-10 sm:my-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Help & Installation Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn how to get Mehr Deutsch running smoothly on your device and make
          the most of your German practice experience.
        </p>
      </header>

      {/* Installation Steps */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Installing Mehr Deutsch (PWA)
        </h2>
        <div className="grid gap-12 sm:grid-cols-3 text-center">
          {/* iOS */}
          <div className="flex flex-col items-center space-y-4">
            <FaApple className="text-red-600 w-14 h-14" />
            <h3 className="text-xl font-semibold text-gray-900">
              Install on iOS
            </h3>
            <ol className="list-decimal text-gray-700 ml-6 space-y-1 text-left max-w-xs">
              <li>Open Safari and visit this website.</li>
              <li>Tap the Share icon (square with arrow).</li>
              <li>
                Select <span className="font-bold">Add to Home Screen</span>.
              </li>
              <li>
                Name the app then tap <span className="font-bold">Add</span>.
              </li>
              <li>Launch Mehr Deutsch from your home screen!</li>
            </ol>
          </div>

          {/* Android */}
          <div className="flex flex-col items-center space-y-4">
            <FaAndroid className="text-green-600 w-14 h-14" />
            <h3 className="text-xl font-semibold text-gray-900">
              Install on Android
            </h3>
            <ol className="list-decimal text-gray-700 ml-6 space-y-1 text-left max-w-xs">
              <li>Open Chrome and visit this website.</li>
              <li>Tap the menu (three dots).</li>
              <li>
                Select <span className="font-bold">Add to Home screen</span>.
              </li>
              <li>
                Confirm by tapping <span className="font-bold">Add</span>.
              </li>
              <li>Enjoy offline usage on the go!</li>
            </ol>
          </div>

          {/* Desktop */}
          <div className="flex flex-col items-center space-y-4">
            <FaDesktop className="text-indigo-600 w-14 h-14" />
            <h3 className="text-xl font-semibold text-gray-900">
              Install on Desktop
            </h3>
            <ol className="list-decimal text-gray-700 ml-6 space-y-1 text-left max-w-xs">
              <li>Open a supported browser (Chrome, Edge).</li>
              <li>Visit this website.</li>
              <li>
                Click the install icon in address bar or via browser menu.
              </li>
              <li>Follow prompts to install.</li>
              <li>Access Mehr Deutsch like any native app.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* How To Use */}
      <section className="mb-16 px-6 py-8 bg-red-50 rounded-xl max-w-4xl mx-auto shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          How to Use Mehr Deutsch
        </h2>
        <ul className="list-disc ml-8 space-y-4 text-gray-700 text-lg max-w-2xl mx-auto">
          <li>Explore grammar topics like nouns, verbs, cases, and plurals.</li>
          <li>
            Practice with interactive exercises that give real-time feedback.
          </li>
          <li>
            Access hints and explanations anytime to strengthen understanding.
          </li>
          <li>Monitor your progress to focus on improvement areas.</li>
          <li>
            Try different categories and revisit previous lessons for mastery.
          </li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Troubleshooting & FAQ
        </h2>
        <dl className="space-y-8 text-gray-700 text-lg max-w-3xl mx-auto">
          <div>
            <dt className="font-bold mb-2">Why won’t the app install?</dt>
            <dd>
              Mehr Deutsch supports modern browsers and secure HTTPS. The
              install prompt appears only when certain criteria are met. Ensure
              your browser is supported and you’re connected to the internet.
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-2">How can I reset my progress?</dt>
            <dd>
              Progress is saved locally. Reset progress by clearing site data or
              local storage in your browser settings. Please back up any
              important data before doing so.
            </dd>
          </div>
          <div>
            <dt className="font-bold mb-2">App not working offline?</dt>
            <dd>
              Make sure you’ve installed the app correctly and accessed content
              online once before going offline. Sometimes cache updates are
              needed to enable offline functionality.
            </dd>
          </div>
        </dl>
      </section>

      {/* Contact & Support */}
      <section className="text-center max-w-3xl mx-auto px-6 mb-10">
        <FaEnvelopeOpenText className="mx-auto text-red-600 w-12 h-12 mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Contact & Support
        </h2>
        <p className="text-gray-700 text-lg">
          Have questions or feedback? We’d love to hear from you! Email us at{' '}
          <a
            href="mailto:mehrdeutsch@gmail.com"
            className="text-red-600 underline"
          >
            mehrdeutsch@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
