// import { CityArea, SpecialArea, TradableAreaIdEnum } from '@/shared/boardData';
// import { propertyType } from '@/shared/policy';

// type tradableArea = CityArea | SpecialArea;
// type propertySkeleton = {
// 	tile: tradableArea;
// 	properties: {
// 		[property in propertyType]: number
// 	};
// }
// type tileSkeleton = {
// 	[id in TradableAreaIdEnum]?: propertySkeleton;
// };

export class User {
	id: number;

	remainedMoney = 0;

	items = []; // TODO 현재는 any의 배열이나 추후 황금열쇠 객체가 될 듯.

	// tiles: tileSkeleton = {};

	constructor(id: number) {
		this.id = id;
	}

	setMoney(value: number) {
		this.remainedMoney += value;
	}

	getMoney() {
		return this.remainedMoney;
	}

	payMoney(value: number): number {
		this.remainedMoney -= value;
		return value;
	}

	// setItems(item: any) { // TODO 타입 에러 남 황금열쇠 객체나 타입 만들어지면 주석 해제 필요
	// 	this.items.push(item);
	// }

	useItem(index: number) {
		this.items.splice(index, 1);
	}
}