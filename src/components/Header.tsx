const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-6 w-full h-screen animate-fadeIn">
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-serif">
        Stefan <span className="text-blue">Dragićević</span>
      </h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="w-7 md:w-10 h-7 md:h-10 cursor-pointer animate-fadeDown"
        >
          <path d="M7.41,14.58L12,19.17L16.59,14.58L18,16L12,22L6,16L7.41,14.58M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58M7.41,2.58L12,7.17L16.59,2.58L18,4L12,10L6,4L7.41,2.58Z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
