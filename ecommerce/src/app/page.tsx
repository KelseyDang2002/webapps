import { useEffect } from "react";

export default function Home() {
  useEffect(effect: () => {
    fetch(input: '/api/products')
    .then(response => response.json()) Promise<any>
    .then(json => )
  }, deps: []);
  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl">Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/iphone.png" alt=""></img>
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">iPhone 14 Pro</h3>
            </div>
            <p className="text-sm mt-1 leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$899</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
