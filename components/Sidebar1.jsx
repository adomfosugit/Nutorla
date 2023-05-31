import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ onClose }) => {
  const categories = [
    { name: 'Pants', link: '/categories/' },
    { name: 'Jumpsuits', link: '/categories/' },
    { name: 'Blouses', link: '/categories/' },
    { name: 'Skirts', link: '/categories/' },
    { name: 'Two pieces', link: '/categories/' },
    { name: 'Dresses', link: '/categories/' },
    { name: 'Blazers', link: '/categories/' },
    { name: 'Pouch', link: '' },
  ];

  return (
    <div className="absolute top-0 left-0 w-64 h-screen bg-white shadow-2xl">
      <div className="flex items-center justify-between p-3">
        <h2 className="font-bold text-lg text-gradient">Categories</h2>
        <AiOutlineClose onClick={onClose} className="cursor-pointer" />
      </div>
      <div className="py-3">
        {categories.map((category, index) => (
          <Link
            onClick={onClose}
            key={category.name}
            href={{
              pathname: category.link,
              query: { category: category.name },
            }}
          >
            <p
              className={`px-5 py-2 m-2 cursor-pointer rounded-lg hover:bg-blue-300 ${
                index === categories.length - 1 ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              {category.name}
            </p>
          </Link>
        ))}
      </div>

     
    </div>
  );
};

export default Sidebar;
