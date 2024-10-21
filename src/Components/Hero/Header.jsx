import React from "react";

function Header({ title, description }) {
  return (
    <header>
      <h1 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 mb-4 lg:mb-8">
        {title.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word === "Support" || word === "Letter" ? (
              <span className="text-orange-400">{word} </span>
            ) : (
              word + " "
            )}
          </React.Fragment>
        ))}
      </h1>
      <p className="text-lg text-zinc-600 mb-8">
        {description}
      </p>
    </header>
  );
}

export default Header;
