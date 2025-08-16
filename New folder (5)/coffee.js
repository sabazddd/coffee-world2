/* global ScrollReveal */
const { useState, useEffect } = React;

/* ---------- Navbar ---------- */
function Navbar({ cart, toggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#home" className="logo">
            Coffee<span>World</span>
          </a>
        </div>
        <div
          className="nav__menu__btn"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"}></i>
        </div>
      </div>

      <ul
        className={`nav__links ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <div className="nav__btns">
        <button className="btn" aria-label="Cart">
          <i className="ri-shopping-cart-line"></i>
          {cart > 0 && <span className="badge">{cart}</span>}
        </button>
        <button className="btn" aria-label="Notifications">
          <i className="ri-notification-3-fill"></i>
        </button>
        {/* دکمه دارک مود */}
        <button className="btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

/* ---------- Header ---------- */
function Header({ onBuy }) {
  return (
    <header className="home" id="home">
      <div className="header__image">
        <img src="assets/header.jpg" alt="header" />
      </div>
      <div className="header__content">
        <h1>
          WELCOME TO OUR <span>Coffee</span> WORLD
        </h1>
        <p className="section__description">
          Immerse yourself in a world of aroma and flavor! Authentic, rich coffee that brings you both energy and calm with every sip. Welcome to the delightful world of coffee, where every cup is a pure journey!
        </p>
        <div className="header__btn">
          <button className="btn" onClick={onBuy}>Buy Now</button>
        </div>
        <ul className="socials">
          <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
          <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
          <li><a href="https://www.instagram.com/saba.zandi_?igsh=Z2VsenR2dzJrMzF1&utm_source=qr"><i className="ri-instagram-line"></i></a></li>
          <li><a href="#"><i className="ri-phone-fill"></i></a></li>
        </ul>
      </div>
    </header>
  );
}

/* ---------- Popular ---------- */
function Popular() {
  const items = [
    { id: 1, title: "Iced Mocha", price: "$5.49", img: "assets/popular-1.png" },
    { id: 2, title: "Iced Matcha", price: "$5.99", img: "assets/popular-2.png" },
    { id: 3, title: "Chocolate Milkshake", price: "$4.99", img: "assets/popular-3.png" },
  ];
  return (
    <section className="section__container popular__container" id="menu">
      <h2 className="section__header">Popular Coffee</h2>
      <div className="popular__grid">
        {items.map((it) => (
          <div className="popular__card" key={it.id}>
            <img src={it.img} alt={it.title} />
            <div className="popular__card__content">
              <h4>{it.title}</h4>
              <h3>{it.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Discover ---------- */
function Discover({ onBuy }) {
  const items = [
    {
      id: 1,
      title: "Double Chocolate Crunch",
      desc:
        "Dive into a chocolate lover's paradise with our Double Chocolate Crunch. This rich and creamy ice cream is made with premium cocoa and blended with crunchy chocolate chunks to deliver a perfect balance of smoothness and texture.",
      price: "$6.99",
      old: "$9.99",
      img: "assets/discover-1.jpg",
    },
    {
      id: 2,
      title: "Strawberry Cheesecake Bliss",
      desc:
        "Experience the perfect harmony of fruity and creamy with our Strawberry Cheesecake Bliss. Every spoonful feels like enjoying a slice of fresh strawberry cheesecake, making it an irresistible dessert.",
      price: "$5.99",
      old: "$8.99",
      img: "assets/discover-2.jpg",
    },
    {
      id: 3,
      title: "Classic Cookies and Cream",
      desc:
        "Savor the timeless charm of our Classic Cookies and Cream ice cream. Made with velvety smooth vanilla ice cream, it is generously packed with chunks of chocolate cookies to create a delightful crunch in every bite.",
      price: "$5.49",
      old: "$10.49",
      img: "assets/discover-3.jpg",
    },
  ];

  return (
    <section className="section__container discover__container" id="categories">
      <h2 className="section__header">Most Selling Coffee</h2>
      <p className="section__description">
        Discover our crowd favorites! These ice creams are loved by everyone and
        have become the top picks for their irresistible flavors and creamy textures.
      </p>

      <div className="discover__grid">
        {items.map((it) => (
          <div className="discover__card" key={it.id}>
            <img src={it.img} alt={it.title} />
            <div className="discover__card__content">
              <h4>{it.title}</h4>
              <p className="section__description">{it.desc}</p>
              <h3>
                {it.price} <span><s>{` ${it.old}`}</s></span>
              </h3>
              <div className="discover__card__btn">
                <button className="btn" onClick={onBuy}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Banner ---------- */
function Banner() {
  return (
    <section className="section__container banner__container" id="special">
      <div className="banner__card">
        <div className="text-banner">
          <p>TRY IT OUT TODAY</p>
          <h4>MOST POPULAR COFFEE</h4>
        </div>
      </div>
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>MORE FUN<br />MORE TASTE</h4>
      </div>
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>FRESH & CHILI</h4>
      </div>
    </section>
  );
}

/* ---------- Subscribe ---------- */
function Subscribe() {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.currentTarget.querySelector("input")?.value || "";
    if (!email) return alert("Please type your email 😅");
    alert(`Subscribed: ${email} 🎉`);
    e.currentTarget.reset();
  };

  return (
    <section className="section__container subscribe__container" id="contact">
      <div className="subscribe__content">
        <h2 className="section__header">Subscribe For Discounts</h2>
        <p className="section__description">
          Don't miss out on sweet deals! Subscribe now to receive exclusive
          discounts and updates on our latest ice cream flavors and special offers.
        </p>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Type Your Email" />
          <button className="btn" type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#home" className="logo">Ice<span>World</span></a>
        </div>
        <div className="footer__col">
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="socials">
            <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
            <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
            <li><a href="#"><i className="ri-pinterest-line"></i></a></li>
            <li><a href="#"><i className="ri-phone-fill"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  const [cart, setCart] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleBuy = () => setCart((c) => c + 1);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const scrollRevealOption = { distance: "50px", origin: "bottom", duration: 1000 };
    if (typeof ScrollReveal !== "function") return;

    ScrollReveal().reveal(".header__image img", { duration: 1000 });
    ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".header__btn", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".header__content .socials", { ...scrollRevealOption, delay: 2000 });

    ScrollReveal().reveal(".popular__card", { ...scrollRevealOption, interval: 500 });

    ScrollReveal().reveal(".discover__card img", { ...scrollRevealOption, origin: "left" });
    ScrollReveal().reveal(".discover__card:nth-child(2) img", { ...scrollRevealOption, origin: "right" });
    ScrollReveal().reveal(".discover__card__content h4", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".discover__card__content .section__description", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".discover__card__content h3", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".discover__card__btn", { ...scrollRevealOption, delay: 2000 });

    ScrollReveal().reveal(".banner__card", { ...scrollRevealOption, delay: 1000, interval: 500 });

    ScrollReveal().reveal(".subscribe__content .section__header", { ...scrollRevealOption });
    ScrollReveal().reveal(".subscribe__content .section__description", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".subscribe__content form", { ...scrollRevealOption, delay: 1000 });
  }, []);

  return (
    <>
      <Navbar cart={cart} toggleTheme={toggleTheme} theme={theme} />
      <Header onBuy={handleBuy} />
      <Popular />
      <Discover onBuy={handleBuy} />
      <Banner />
      <Subscribe />
      <Footer />
    </>
  );
}

/* ---------- Mount ---------- */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
