import { Headings } from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        {/* Heading */}
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock interview"
        />
        {/* Action Button */}
        <Link to={"/generate/create"}>
          <Button size={"sm"}>
            <Plus className="min-w-5 min-h-5 mr-1" />
            Add New
          </Button>
        </Link>
      </div>
    </>
  );
};
