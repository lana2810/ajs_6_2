export default function infoCharacter(obj) {
  const { special } = obj;
  let result = [];
  special.forEach((item) => {
    const { id, name, icon, description = "Описание недоступно" } = item;
    result.push({ id, name, icon, description });
  });
  return result;
}
