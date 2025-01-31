export default function scrollToView(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}
