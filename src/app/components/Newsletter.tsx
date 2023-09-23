export default function Newsletter(props:any) {
    return (
      <div className="bg-[#000000] px-5 py-8 sm:py-12 lg:py-24 pr-19 pl-19 sm:pr-24 sm:pl-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="tracking-tight text-white lg:col-span-7 flex flex-col gap-3 max-w-[739px]">
            <div className="inline sm:text-4xl text-3xl font-600 sm:block lg:inline xl:block">{props.heading}</div>
            <div className="inline sm:block lg:inline xl:block text-[#D1D5DB]">{props.description}</div>
          </div>
          <div className="w-full lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-6">
              <label htmlFor="email-address" className="sr-only">
                {props.buttonText}
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white h-12 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder={props.placeholderValue}
              />
              <button
                type="submit"
                className="flex-none h-12 rounded-md bg-[#8B5CF6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Notify me
              </button>
            </div>
            <p className="mt-4 text-[14px] leading-6 text-gray-300">
              We care about your data. Read our{' '}
              <a href="#" className="font-semibold text-white">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    )
  }
  