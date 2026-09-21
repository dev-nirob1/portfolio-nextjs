"use client";

import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const initialCategories = [
  { id: 1, name: "Landing Page" },
  { id: 2, name: "Dashboard/Admin" },
  { id: 3, name: "Full-Stack" },
];

const CategoriesPage = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;

    setCategories([
      ...categories,
      { id: Date.now(), name: newCategory.trim() },
    ]);
    setNewCategory("");
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div>
      <h1 className="font-display text-[1.6rem] text-ink mb-8">Categories</h1>

      <form onSubmit={handleAdd} className="flex gap-3 mb-8 max-w-md">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="e.g. E-commerce"
          className="flex-1 bg-surface border border-line rounded-sm px-3 py-2.5 text-[14px] text-ink placeholder:text-slate/60 focus:outline-none focus:border-primary transition-colors"
        />
        <button
          type="submit"
          className="text-[14px] font-medium px-4 py-2.5 rounded-sm bg-ink text-background hover:bg-primary transition-colors cursor-pointer"
        >
          Add
        </button>
      </form>

      <div className="border border-line rounded-sm overflow-hidden max-w-md">
        {categories.length === 0 ? (
          <p className="text-[14px] text-slate px-4 py-4">No categories yet.</p>
        ) : (
          <div className="divide-y divide-line">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="text-[14px] text-ink">{category.name}</span>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="p-2 rounded-sm border border-line text-slate hover:border-primary hover:text-primary transition-colors cursor-pointer"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;