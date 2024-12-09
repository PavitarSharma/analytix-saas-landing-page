import { MenuItem } from "@/types";

/**
 * Components
 */
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

/**
 * Assets
 */

import { ChevronsUpDown } from "lucide-react";
/**
 * Types
 */
type MobileMenuProps = {
  navMenu: MenuItem[];
};
const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    {label}
                    <ChevronsUpDown />
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="ps-2">
                  <ul className="border-l border-l-muted-foreground/20">
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button
                          asChild
                          variant="ghost"
                          className=" text-muted-foreground hover:bg-transparent"
                        >
                          <a href={href}>{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button asChild variant="ghost" className="w-full justify-start">
                <a href={href}>{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className="bg-muted-foreground/20" />

      <div className="flex items-center gap-2 mt-2">
        <Button variant="ghost" className="w-full">
          Sign In
        </Button>
        <Button className="w-full mt-2">Free Trial</Button>
      </div>
    </div>
  );
};

export default MobileMenu;
