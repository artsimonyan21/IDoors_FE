const useHideScroll = (isOpen: boolean) => {
  document.body.style.overflowY = isOpen ? "hidden" : "auto";
};

export default useHideScroll;
