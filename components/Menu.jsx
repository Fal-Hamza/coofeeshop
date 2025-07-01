import Separator from "./Separator";
// componens
import MenuItem from "./MenuItem";

const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Espresso",
    description: "Rich and bold shot of coffee",
    price: 3.3,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Latte",
    description: "Espresso with steamed milk ",
    price: 4.2,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Americano",
    description: "Espresso with hote water",
    price: 3.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 5.4,
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Macchiato",
    description: "Espresso with chocolate and steamed milk",
    price: 7.4,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Flat White",
    description: "Espresso with chocolate and steamed milk",
    price: 4.25,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Ice Coffee",
    description: "Chilled coffee over ice",
    price: 4.25,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Affogato",
    description: "Espresso shot over vanilla ice cream",
    price: 4.25,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Ieish Coffee",
    description: ">Coffee with Irish Milk and Cream",
    price: 4.25,
  },
];

const Menu = ({ styleBtn, stylePar }) => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container">
        <div className=" flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Drinks Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className={`text-center max-w-[620px] mx-auto ${stylePar}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sint
            fuga consequuntur assumenda, ullam aperiam animi officiis dolorum
            adipisci quod ex illo fugiat ipsum numquam molestiae nam! Nesciunt,
            nisi reiciendis.
          </p>
        </div>

        {/* menu & button */}
        <div className=" flex flex-col items-center gap-12 xl:gap-24">
          {/* menu */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                  key={index}
                />
              );
            })}
          </div>
          <button className={` btn ${styleBtn}`}>View full Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
