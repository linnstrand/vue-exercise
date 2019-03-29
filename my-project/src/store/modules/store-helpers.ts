export default {
	getGroupedOn(items: any[], property: string): any[] {
		const groupNames = [ ...new Set(items.map((e) => e[property])) ].sort();
		const groups: any[] = [];
		groupNames.forEach((group) => {
			const exercises = items.filter((e) => e[property] === group);
			groups.push({ name: group, exercises });
		});
		return groups;
	}
};
