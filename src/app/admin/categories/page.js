import { FiTrash2 } from "react-icons/fi";

import Heading from "@/app/components/ui/Heading";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

const categories = [
  "Landing Page",
  "Dashboard",
  "Full-Stack",
];

const CategoriesPage = () => {
  return (
    <div>
      <Heading as="h3" className="mb-8">
        Categories
      </Heading>

      <div className="flex gap-3 mb-8 max-w-md">
        <Input
          type="text"
          placeholder="Add a category"
          className="bg-surface"
        />

        <Button type="button">
          Add
        </Button>
      </div>

      <div className="border border-line rounded-sm overflow-hidden max-w-md">
        <div className="divide-y divide-line">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-between px-4 py-3"
            >
              <span className="text-[14px] text-ink">
                {category}
              </span>

              <button
                type="button"
                className="p-2 rounded-sm border border-line text-slate hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                <FiTrash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;