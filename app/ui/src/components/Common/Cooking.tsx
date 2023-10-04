export const Cooking = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex space-x-3 animate-bounce">
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
        </div>
        <p className="text-gray-900">Bot is cooking...</p>
        <span className="text-gray-900">Get ready to eat in 3, 2, 1...</span>
      </div>
    );
  };
  
