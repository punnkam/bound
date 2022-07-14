// http://localhost:3000/Explore
// https://github.com/tailwindlabs/tailwindcss-aspect-ratio

const products = [
  {
    id: 1,
    name: 'Verci DAO',
    href: '#',
    imageSrc: 'fakenft.png',
    imageAlt: 'Fake NFT boi',
    price: '$69',
    color: 'Black',
  },
  // More Subs...
];

export default function Explore() {
  return (
    <div className="flex flex-col flex-1 md:pl-20">
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-gray-900 font-chakra">
            Explore Subscriptions
          </h2>

          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full lg:w-full lg:h-full "
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 font-chakra"
                        />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 font-chakra">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 font-chakra">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
