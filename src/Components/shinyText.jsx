const ShinyText = ({ text, disabled = false, speed = 5, className = 'get' }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          border:"2px solid #b5b5b5a4",
          padding:"10px 50px",
          borderRadius:"20px",
          marginLeft:"50px",
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };
  
  export default ShinyText;
