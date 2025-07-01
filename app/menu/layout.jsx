import Menu from "@/components/Menu";
import MenuFood from "@/components/MenuFood";

export default function ({ children }) {
  return (
    <div>
      {children}
      <Menu styleBtn=" hidden" stylePar="hidden" />
      <MenuFood />
    </div>
  );
}
