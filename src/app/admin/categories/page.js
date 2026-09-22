'use client'
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import Heading from "@/app/components/ui/Heading";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import axios from "axios";


const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/categories");
      setCategories(res.data);
    };

    getCategories();
  }, []);

  const handleAdd = async () => {
    await axios.post("/api/categories", { name });

    const res = await axios.get("/api/categories");
    setCategories(res.data);

    setName("");
  };

const handleDelete = async (id) => {
  await axios.delete("/api/categories", {
    data: { id },
  });

  const res = await axios.get("/api/categories");
  setCategories(res.data);
};

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="button" onClick={handleAdd}>
          Add
        </Button>
      </div>

      <div className="border border-line rounded-sm overflow-hidden max-w-md">
        <div className="divide-y divide-line">
          {categories.map((category) => (
            <div
              key={category._id}
              className="flex items-center justify-between px-4 py-3"
            >
              <span className="text-[14px] text-ink">
                {category.name}
              </span>

              <button
                type="button"
                onClick={() => handleDelete(category._id)}
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