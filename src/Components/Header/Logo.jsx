import React from 'react';

function Logo() {
  return (
    <div className="flex gap-4 items-center text-3xl min-w-[240px]">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89c490d9e727d73a47243ce439ddc05005b808abaa74c6da0108ee86f4fb97d9?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472" 
        alt="ComfortConnect logo" 
        className="w-[50px] h-[50px] object-contain" 
      />
      <span>ComfortConnect</span>
    </div>
  );
}

export default Logo;
