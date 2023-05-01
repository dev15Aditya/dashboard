import React from 'react';

export default function Schedule() {
  return (
    <div className="bg-[#FFFFFF] w-[450px] h-[270px] rounded-[20px] p-10 mt-5 md:mt-0">
      <div className="flex justify-between">
        <p className="font-bold text-[18px]">Today's schedule</p>
        <span className="text-[12px] text-[#858585]">See All {`>`}</span>
      </div>

      <div>
        <div className="flex">
          <div className="bg-[#9BDD7C] h-[66px] w-1 mr-2"></div>
          <div>
            <p className="text-[#666666] text-[14px]">
              Meeting with suppliers from Kuta
            </p>
            <p className="text-[12px] text-[#999999]">14:00-15:00</p>
            <p className="text-[12px] text-[#999999]">
              at Sunset Road, Kuta, Bali
            </p>
          </div>
        </div>

        <div className="flex mt-3">
          <div className="bg-[#6972C3] h-[66px] w-1 mr-2"></div>
          <div>
            <p className="text-[#666666] text-[14px]">
              Meeting with suppliers from Kuta
            </p>
            <p className="text-[12px] text-[#999999]">14:00-15:00</p>
            <p className="text-[12px] text-[#999999]">
              at Sunset Road, Kuta, Bali
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
