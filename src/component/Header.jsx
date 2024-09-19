import React from "react";
import s from "./header.module.css";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={s.header}>
      <div className={s.searchContainer}>
        <input
          type="text"
          placeholder="Поиск задач..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={s.title}>
        <h1>Мои делишки</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <use href="#fxemoji--bow" />
        </svg>
      </div>

      <div className={s.socialLinks}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* SVG для Instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#E4405F"
              d="M12 2.2c3.2 0 3.6 0 4.9.1c1.2.1 1.9.3 2.3.5c.6.3 1 .7 1.5 1.5c.3.4.4 1.1.5 2.3c.1 1.2.1 1.7.1 4.9c0 3.2 0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3c-.3.6-.7 1-.5 2.3c-.4.8-.9 1.2-1.5 1.5c-.4.3-1.1.4-2.3.5c-1.2.1-1.7.1-4.9.1c-3.2 0-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5c-.6-.3-1-.7-1.5-1.5c-.3-.4-.4-1.1-.5-2.3c-.1-1.2-.1-1.7-.1-4.9c0-3.2 0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3c.3-.6.7-1 1.5-1.5c.4-.3 1.1-.4 2.3-.5c1.2-.1 1.7-.1 4.9-.1m0-2.2C8.8 0 8.3 0 7.1.1C5.8.2 4.7.4 3.8.8C2.8 1.2 1.9 1.9 1.1 3.1c-.8.8-1.5 1.7-1.9 2.7C-.1 7.3-.3 8.4-.4 9.7C-.5 11 .2 11.5 0 14.2C0 17 0 17.6.1 19.7c.1 1.2.3 2.3.7 3.2c.8 1.2 1.5 2.1 2.7 2.9c1.1.7 2.3 1.3 3.6 1.6c1.2.3 2.4.5 3.7.6C14.1 24 14.8 24 17 24h.1c1.2-.1 2.3-.3 3.2-.7c1.2-.8 2.1-1.5 2.9-2.7c.7-1"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* SVG для YouTube */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FF0000"
              d="M10 15V9l5 3l-5 3zm12-3c0-3.5-.2-5.5-2-6.5C18.4 5.4 15 5 12 5S5.6 5.4 4 5.5C2.2 6.5 2 8.5 2 12s.2 5.5 2 6.5C5.6 18.6 9 19 12 19s6.4-.4 8-1.5c1.8-1 2-3 2-6.5z"
            ></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
