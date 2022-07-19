// http://localhost:3000/Explore
// https://github.com/tailwindlabs/tailwindcss-aspect-ratio

import React from "react";

const products = [
  {
    id: 1,
    name: 'Verci DAO',
    href: '#',
    imageSrc: 'fakenft.png',
    imageAlt: 'Fake NFT boi',
    price: '$69',
    color: 'Black',
    info: {
      'Title': 'Verci DAO',
      'Description': 'Place for people to chill and hang out',
      'Details': 'Valid for 2 years starting August 10th'
    }
  },
  // More Subs...
];

export default function Explore() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});
  return (
    <div className="flex flex-col flex-1 md:pl-20">
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-gray-900 font-chakra">
            Explore Subscriptions
          </h2>

          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <button key={product.id} type="button"
              onClick={() => {setShowModal(true); setModalInfo(product.info);}}>
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
              </button>
            ))}
          </div>
          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {modalInfo.Title}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {modalInfo.Title}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {modalInfo.Description}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Lorem Ipsum
                  </p>
                </div>
                {modalInfo.Details}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
      </div>
    </div>
  );
}
