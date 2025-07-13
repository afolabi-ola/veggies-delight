'use client';

import { useCart } from '@/app/_context/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCartOutline } from 'react-icons/io5';

export function CartSidebar() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Simple form state
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handlePlaceOrder() {
    if (!form.name || !form.address || !form.phone) {
      toast.error('Please fill in order form');
      return;
    }
    // For now, just alert the order details
    toast.success(
      `Order placed!\nName: ${form.name}\nAddress: ${form.address}\nPhone: ${
        form.phone
      }\nTotal: ₦${totalPrice.toLocaleString()}`,
    );
    clearCart();
    setIsCheckingOut(false);
    setIsOpen(false);
    setForm({ name: '', address: '', phone: '' });
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className='fixed top-auto bottom-5 sm:top-5 sm:bottom-auto right-5 z-50'
        aria-label='Open cart'
      >
        <div className='relative bg-white px-3 py-3 rounded-full shadow-lg flex items-center gap-2'>
          <IoCartOutline className='text-xl text-secondary' />
          {cartItems.length > 0 && (
            <span className='absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
              {cartItems.length}
            </span>
          )}
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-black/90 bg-opacity-40 z-40'
          aria-hidden='true'
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
        aria-label='Shopping cart'
        onClick={(e) => e.stopPropagation()}
      >
        <header className='p-4 border-b flex justify-between items-center'>
          <h2 className='text-lg font-semibold text-green-700'>
            {isCheckingOut ? 'Checkout' : 'Your Cart'}
          </h2>
          <button
            onClick={() => {
              if (isCheckingOut) setIsCheckingOut(false);
              else setIsOpen(false);
            }}
            aria-label='Close cart'
            className='text-gray-600 hover:text-green-700'
          >
            ×
          </button>
        </header>

        <div className='flex-1 overflow-y-auto p-4'>
          {isCheckingOut ? (
            <>
              <label className='block mb-2'>
                Name
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleInputChange}
                  className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
                  required
                />
              </label>
              <label className='block mb-2'>
                Address
                <textarea
                  name='address'
                  value={form.address}
                  onChange={handleInputChange}
                  className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
                  rows={3}
                  required
                />
              </label>
              <label className='block mb-2'>
                Phone
                <input
                  type='tel'
                  name='phone'
                  value={form.phone}
                  onChange={handleInputChange}
                  className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
                  required
                />
              </label>
            </>
          ) : cartItems.length === 0 ? (
            <p className='text-gray-500 text-center mt-10'>
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item, i) => (
              <div
                key={item.id + i}
                className='flex items-center mb-4 border-b pb-2 last:border-b-0'
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded'
                  loading='lazy'
                  width={100}
                  height={100}
                />
                <div className='ml-3 flex-1'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-green-700 font-bold'>
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className='text-red-500 hover:text-red-700 font-bold px-2'
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && !isCheckingOut && (
          <footer className='p-4 border-t'>
            <p className='font-semibold text-green-800 mb-3'>
              Total: ₦{totalPrice.toLocaleString()}
            </p>
            <button
              onClick={() => setIsCheckingOut(true)}
              className='w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded mb-2'
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded'
            >
              Clear Cart
            </button>
          </footer>
        )}

        {isCheckingOut && (
          <footer className='p-4 border-t'>
            <button
              onClick={handlePlaceOrder}
              className='w-full bg-secondary hover:bg-secondary-hover text-white py-2 rounded'
              //   disabled={!form.name || !form.address || !form.phone}
            >
              Place Order
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
