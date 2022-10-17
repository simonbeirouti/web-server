import Link from "next/link";

export default function APIs({
  id,
  title,
  method,
  description,
  href,
  example,
}) {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flow-root mt-6 sm:mt-8">
        <div className="divide-y divide-gray--200 -my-9">
          <div className="py-9" key={id}>
            <div className="border rounded-md">
              <div className="flex justify-between bg-gray-100 p-4 rounded-md">
                <h1 className="text-xl">{title}</h1>
                <Link href={href}>{href}</Link>
              </div>
              <div className="text-left px-2 pt-2">
                <h2 className="text-lg">{method}</h2>
              </div>
              <div className="text-left p-2">
                <p className="text-gray-600">{description}</p>
              </div>
              {method === "POST" || method === "PUT" ? (
                <div className="mt-3 bg-black p-3 rounded-md">
                  <pre className="text-white">{example}</pre>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
