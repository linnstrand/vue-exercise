export default {
  getGroupedOn(items, property) {
    const groupNames = [...new Set(items.map(e => e[property]))].sort();
    const groups = [];
    groupNames.forEach((group) => {
      const exercises = items.filter(e => e[property] === group);
      groups.push({ name: group, exercises });
    });
    return groups;
  },
};
