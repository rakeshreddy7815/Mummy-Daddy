import { useState, useEffect } from "react";

export default function MummyDaddyPremium() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const products = [
    { id: 1, name: "Premium Men's Shirt", price: 1299, img: "https://via.placeholder.com/400" },
    { id: 2, name: "Designer Women's Kurti", price: 1499, img: "https://via.placeholder.com/400" },
    { id: 3, name: "Kids Premium Party Wear", price: 1199, img: "https://via.placeholder.com/400" },
    { id: 4, name: "Luxury Family Combo Pack", price: 3999, img: "https://via.placeholder.com/400" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Mummy Daddy Readymade Show Room",
      description: "Premium Family Fashion Purchase",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      theme: { color: "#ec4899" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 text-gray-800">
      {/* Premium Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-pink-600 tracking-wide">Mummy Daddy</h1>
          <div className="font-semibold">Cart: {cart.length} | ₹{totalAmount}</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 text-center bg-gradient-to-r from-pink-200 via-yellow-100 to-pink-100">
        <h2 className="text-5xl font-extrabold mb-6">Premium Fashion for Every Generation</h2>
        <p className="text-lg mb-8">Luxury • Comfort • Affordability</p>
        <a
          href="https://wa.me/919999999999"
          className="bg-green-500 text-white px-10 py-4 rounded-2xl shadow-xl hover:bg-green-600 transition"
        >
          Shop via WhatsApp
        </a>
      </section>

      {/* Product Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-16">Featured Collections</h3>
        <div className="grid md:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
              <img src={product.img} alt={product.name} className="rounded-2xl mb-6" />
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="mb-4 text-lg font-bold">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-pink-600 text-white px-6 py-3 rounded-2xl w-full hover:bg-pink-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Secure Checkout */}
      <section className="py-20 bg-yellow-50 text-center">
        <h3 className="text-3xl font-bold mb-6">Secure Checkout</h3>
        <p className="mb-4">Total Items: {cart.length}</p>
        <p className="mb-8 text-xl font-semibold">Total: ₹{totalAmount}</p>
        <button
          onClick={handlePayment}
          className="bg-black text-white px-10 py-4 rounded-2xl shadow-xl hover:bg-gray-800 transition"
        >
          Pay Securely with Razorpay
        </button>
      </section>

      {/* Instagram */}
      <section className="py-20 text-center">
        <h3 className="text-3xl font-bold mb-8">Instagram Fashion Updates</h3>
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.instagram.com"
            title="Instagram"
            className="w-full h-96"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="text-lg font-semibold">© 2026 Mummy Daddy Readymade Show Room</p>
        <p>Adoni, Andhra Pradesh | Premium Family Fashion Store</p>
      </footer>
    </div>
  );
}
