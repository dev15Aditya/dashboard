import React from 'react';

export default function Cards() {
  const contents = [
    {
      text: 'Total Revenues',
      numericalValue: '$2,129,430',
      icon: '/Vector1.png',
      color: 'bg-[#DDEFE0]',
    },
    {
      text: 'Total Transactions',
      numericalValue: '1,520',
      icon: '/vector2.png',
      color: 'bg-[#F4ECDD]',
    },
    {
      text: 'Total Likes',
      numericalValue: '9721',
      icon: '/Vector3.png',
      color: 'bg-[#EFDADA]',
    },
    {
      text: 'Total Users',
      numericalValue: '892',
      icon: '/Vector4.png',
      color: 'bg-[#DEE0EF]',
    },
  ];
  return (
    <div className="flex flex-wrap justify-center md:ml-[250px]">
      {contents.map((content) => {
        return (
          <div
            className={
              content.color +
              ' w-[90%] md:w-[221.05px] h-[200px] md:h-[120px] rounded-[20px] flex items-start justify-between p-6 m-2'
            }
          >
            <div className="pt-6">
              <p className="text-[14px]">{content.text}</p>
              <p className="text-[24px] font-bold">{content.numericalValue}</p>
            </div>
            <img src={content.icon} alt={content.text} />
          </div>
        );
      })}
    </div>
  );
}
