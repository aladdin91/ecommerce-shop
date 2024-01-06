import Container from "@/app/components/Container";
import MangeProductsClient from "./MangeProductsClient";
import getProducts from "@/actions/getProducts";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const MangeProducts = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Access denied" />;
  }
  return (
    <div className="pt-8">
      <Container>
        <MangeProductsClient products={products} />
      </Container>
    </div>
  );
};

export default MangeProducts;
