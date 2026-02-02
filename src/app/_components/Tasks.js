"use Client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export const Tasks = () => {
  return (
    <Input className="w-[280px] h-10">
      <Checkbox />
      <Button className="bg-[#FEF2F2] text-[#EF4444] font-normal text-sm">
        Delete
      </Button>
    </Input>
  );
};
