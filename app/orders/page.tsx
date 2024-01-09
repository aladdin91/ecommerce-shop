import Container from "@/app/components/Container";
import OrderClient from "@/app/orders/OrderClient";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrdersByUserId from "@/actions/getOrderByUserId";

const Orders = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <NullData title="Access denied" />;
  }

  const orders = await getOrdersByUserId(currentUser.id);

  if (!orders) {
    return <NullData title="No orders found" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
