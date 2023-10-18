import { useState } from "react";
import {
  Button,
  Radio,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { UserPlusIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";
import SignalTable from "@/components/signal/SignalTable";
export function Signals() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="flex justify-between px-10">
        <Button
          size="md"
          color="blue"
          className="flex items-center justify-center gap-2"
          onClick={handleOpen}
          variant="gradient"
        >
          <UserPlusIcon color="white" className="h-5 w-5 text-inherit" />
          <div>Add</div>
        </Button>
      </div>
      <SignalTable />
    </div>
  );
}

export default Signals;
