import { FiMenu } from "react-icons/fi";

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-secondary/10">
      <button onClick={onMenuClick} className="md:hidden text-secondary">
        <FiMenu size={22} />
      </button>
      <span className="font-medium text-secondary">Dashboard</span>
      <div />
    </header>
  );
};

export default Topbar;