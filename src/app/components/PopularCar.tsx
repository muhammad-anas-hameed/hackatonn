import React from "react";
import Image from "next/image";

export const PopularCar = () => {
  return (
    <div className="p-4 bg-gray-100 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-400 md:text-xl">Popular Car</h3>
        <button className="text-blue-600 font-medium hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="w-full max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">Koenigsegg</p>
          <p className="text-gray-600">Sport</p>
          <div className="flex justify-center py-4">
            <Image src="/white-car.png" alt="Car" width={232} height={72} className="object-cover" />
          </div>
          <div className="flex justify-between text-gray-600 mt-4">
            <p>90L</p>
            <p>Manual</p>
            <p>2 People</p>
          </div>
          <h1 className="text-xl font-bold mt-4">$99.00/day</h1>
          <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Rent Now</button>
        </div>

        <div className="w-full max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">Koenigsegg</p>
          <p className="text-gray-600">Sport</p>
          <div className="flex justify-center py-4">
            <Image src="/gray-car.png" alt="Car" width={232} height={72} className="object-cover" />
          </div>
          
          <div className="flex justify-between text-gray-600 mt-4">
            <p>90L</p>
            <p>Manual</p>
            <p>2 People</p>
          </div>
          <h1 className="text-xl font-bold mt-4">$99.00/day</h1>
          <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Rent Now</button>
        </div>

        <div className="w-full max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">Koenigsegg</p>
          <p className="text-gray-600">Sport</p>
          <div className="flex justify-center py-4">
            <Image src="/purplecar.png" alt="Car" width={232} height={72} className="object-cover" />
          </div>
          <div className="flex justify-between text-gray-600 mt-4">
            <p>90L</p>
            <p>Manual</p>
            <p>2 People</p>
          </div>
          <h1 className="text-xl font-bold mt-4">$99.00/day</h1>
          <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Rent Now</button>
        </div>

        <div className="w-full max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold">Koenigsegg</p>
          <p className="text-gray-600">Sport</p>
          <div className="flex justify-center py-4">
            <Image src="/gray-car.png" alt="Car" width={232} height={72} className="object-cover" />
          </div>
          <div className="flex justify-between text-gray-600 mt-4">
            <p>90L</p>
            <p>Manual</p>
            <p>2 People</p>
          </div>
          <h1 className="text-xl font-bold mt-4">$99.00/day</h1>
          <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
