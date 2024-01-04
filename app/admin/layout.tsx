import AdminNav from "../components/adminComponents/AdminNav";

export const metadata = {
  title: "E-shop Admin",
  description: "E-shop Admin dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
