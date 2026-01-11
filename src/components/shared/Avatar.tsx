import React, { useState } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  initials,
  size = "medium",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-lg",
    large: "w-20 h-20 text-2xl",
  };

  const baseClasses = `${sizeClasses[size]} rounded-full`;

  const defaultText = className.includes("text-") ? "" : "text-white";
  const defaultBg = className.includes("bg-") ? "" : "bg-blue-500";

  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${baseClasses} object-cover ${className}`}
        onError={() => setImageError(true)}
      />
    );
  }

  if (initials) {
    return (
      <div
        className={`${baseClasses} ${defaultBg} ${defaultText}  flex items-center justify-center font-semibold ${className}`}
      >
        {initials.substring(0, 2)}
      </div>
    );
  }

  // Default fallback (e.g., a generic user icon using an inline SVG or an icon library)
  return (
    <div
      className={`${baseClasses} bg-gray-400 flex items-center justify-center text-gray-700 ${className}`}
    >
      {/* Example generic user icon (replace with actual icon if desired) */}
      <svg className="w-2/3 h-2/3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
};

export default Avatar;
