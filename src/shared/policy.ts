export enum GameState {
	BEFORE_USER_CREATE = 'BEFORE_USER_CREATE',
	USER_CREATED = 'USER_CREATED',
	BEFORE_USER_COMMAND = 'BEFORE_USER_COMMAND',
	USER_MOVED = 'USER_MOVED',
	OPENED_GOLDEN_KEY = 'OPENED_GOLDEN_KEY',
	BEFORE_FORCE_MOVE = 'BEFORE_FORCE_MOVE',
	TRAVEL_IN_SPACE = 'TRAVEL_IN_SPACE',
	TRADE_WITH_BANK = 'TRADE_WITH_BANK',
	GOT_MONEY_FROM_BANK = 'GOT_MONEY_FROM_BANK',
	PAID_MONEY_TO_BANK = 'PAID_MONEY_TO_BANK',
	TRADE_WITH_USER = 'TRADE_WITH_USER',
	BEFORE_END = 'BEFORE_END'
}