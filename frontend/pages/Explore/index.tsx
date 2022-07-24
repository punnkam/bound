// http://localhost:3000/Explore
// https://github.com/tailwindlabs/tailwindcss-aspect-ratio

import React from 'react';
import Modal from '../../components/CustomModal';

const products = [
  {
    id: 1,
    cardInfo: {
      name: 'Verci DAO',
      href: '#',
      imageSrc: 'fakenft.png',
      imageAlt: 'Fake NFT boi',
      price: '$69',
      color: 'Black',
    },
    modalInfo: {
      Title: 'Verci DAO',
      Slogan: 'Come vibe with us',
      Description: 'Place for people to chill and hang out',
      Details: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
      },
      Perks: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
      },
      History: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
      },
    },
  },
  {
    id: 2,
    cardInfo: {
      name: 'Racing DAO',
      href: '#',
      imageSrc: 'racer.png',
      imageAlt: 'Fake NFT boi',
      price: '$500',
      color: 'Blue',
    },
    modalInfo: {
      Title: 'Racing DAO',
      Slogan: 'Fulfill your need for speed',
      Description: 'Go to racing events with your frens',
      Details: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/clubs.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/docs.png',
        },
      },
      Perks: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/f1.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/lewis.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/drive-f1.png',
        },
      },
      History: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/f1history.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/abudabi.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'racerdao/daohistory.png',
        },
      },
    },
  },
  {
    id: 3,
    cardInfo: {
      name: 'Gorls Club',
      href: '#',
      imageSrc: 'gorls.png',
      imageAlt: 'Fake NFT boi',
      price: '$1,000',
      color: 'Blue',
    },
    modalInfo: {
      Title: 'Gorls DAO',
      Slogan: 'Touch grass bro',
      Description: 'Meet gorls',
      Details: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
      },
      Perks: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
      },
      History: {
        first: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        second: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
        third: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod dui sed dui fermentum, a vestibulum leo volutpat.',
          imageSrc: 'time.png',
        },
      },
    },
  },
  // More Subs...
];

export default function Explore() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({});
  const [cardInfo, setCardInfo] = React.useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className='flex flex-col flex-1 md:pl-20'>
      <div>
        <div className='max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-2xl text-gray-900 font-chakra'>
            Explore Subscriptions
          </h2>

          <div className='grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product) => {
              const { name, href, imageSrc, imageAlt, price, color } =
                product.cardInfo;
              return (
                <button
                  key={product.id}
                  type='button'
                  onClick={() => {
                    setCardInfo(product.cardInfo);
                    setModalInfo(product.modalInfo);
                    setShowModal(true);
                  }}
                >
                  <div key={product.id} className='relative group'>
                    <div className='w-full overflow-hidden bg-gray-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none '>
                      <img
                        src={imageSrc}
                        alt={imageAlt}
                        className='object-cover object-center w-full h-full lg:w-full lg:h-full '
                      />
                    </div>
                    <div className='flex justify-between mt-4'>
                      <div>
                        <h3 className='text-sm text-gray-700'>
                          <a href={href}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0 font-chakra'
                            />
                            {name}
                          </a>
                        </h3>
                        <p className='mt-1 text-sm text-gray-500 font-chakra'>
                          {color}
                        </p>
                      </div>
                      <p className='text-sm font-medium text-gray-900 font-chakra'>
                        {price}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          {showModal ? (
            <Modal
              modalInfo={modalInfo}
              cardInfo={cardInfo}
              toggleModal={toggleModal}
              isOpen={showModal}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
