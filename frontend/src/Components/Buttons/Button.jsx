function Button(prop) {
  return (
    <>
      <button
        onClick={prop.onClick}
        className={`${prop.className} bg-brand-blue hover:bg-brand-blue-mid flex cursor-pointer px-5 py-2 text-sm font-light text-white transition duration-150 active:scale-95`}
      >
        {prop.imgSrc ? (
          <img className={`${prop.imgStyle} mr-2`} src={prop.imgSrc} />
        ) : null}
        {prop.children}
      </button>
    </>
  );
}

export default Button;
