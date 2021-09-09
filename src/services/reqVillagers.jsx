export const reqVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const results = await res.json();

  return results.map(villager => ({
    id: villager._id,
    name: villager.name,
    image: villager.image,
    species: villager.species,
    birthday: villager.birthday,
    skill: villager.skill,
    phrase: villager.phrase,
  }));
};

export const reqVillagerById = async (id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  const villager = await res.json();

  return villager;
};
