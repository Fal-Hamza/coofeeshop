import Separator from "./Separator";

// componens
import MenuFoodItms from "./MenuFoodItms";

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

function MenuFood() {
  return (
    <section className=" pb-16 xl:pb-36">
      <div className="container">
        <div className=" flex flex-col gap-4 mb-12">
          <h2 className="h2 text-center">Food Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
        </div>

        {/* menu & button */}
        <div className=" flex flex-col items-center gap-12 xl:gap-24">
          {/* menu */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuFoodItms
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuFood;
