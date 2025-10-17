import { NavLink } from 'react-router';

export default function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center w-full mx-auto max-w-3xl gap-6 mt-10">
        <NavLink to="/" className="flex items-center justify-center gap-2">
          <img
            src="/images/mehr_deutsch_logo.png"
            alt="Mehr Deutsch Logo"
            className="size-20 object-contain"
          />
          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 ">
            Mehr Deutsch
          </span>
        </NavLink>

        <p className="text-lg leading-relaxed text-gray-700">
          Mehr Deutsch is a free, interactive app dedicated to helping you
          master German grammar through effective practice and engaging
          exercises. Whether you are a beginner or advancing your skills, Mehr
          Deutsch offers tailor-made challenges for your grammar journey.
        </p>

        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-lg leading-relaxed text-gray-700">
            You can install Mehr Deutsch like a native app on all platforms
            <span className="font-semibold">
              {' '}
              (iOS, Android, or Desktop).
            </span>{' '}
          </p>
          <p className="text-lg leading-relaxed text-gray-700 ">
            For step-by-step install instructions, check the{' '}
            <NavLink
              to="/help"
              className="text-lg text-amber-500 hover:text-shadow-amber-600 hover:underline transition-all duration-300"
            >
              Help Page
            </NavLink>
            .
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-10 sm:grid-cols-2">
        <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Interactive Practice
          </h2>
          <p className="text-gray-700">
            Practice noun genders, verb conjugations, sentence structure, and
            more with real-time feedback to help solidify your understanding and
            confidence.
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Tailored Learning
          </h2>
          <p className="text-gray-700">
            Adapt exercises to your level and track your progress easily. Mehr
            Deutsch focuses on repetitive, adaptive learning to ensure long-term
            retention.
          </p>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
            Clear Explanations
          </h2>
          <p className="text-gray-700">
            Each grammar topic comes with concise explanations and helpful hints
            to deepen your understanding and make grammar rules easier to
            remember.
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">
            Mobile-First Design
          </h2>
          <p className="text-gray-700">
            Designed for seamless use on any device. Practice on the go, whether
            during a coffee break or commute, with a fast, responsive user
            interface.
          </p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <p className="text-gray-600 italic">
          Mehr Deutsch is an open-source passion project dedicated to making
          German grammar practice accessible and effective. Start your journey
          to fluency today!
        </p>
      </section>
    </>
  );
}
