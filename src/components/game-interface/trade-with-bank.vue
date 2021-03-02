<template>
	<p>은행과 거래할 항목을 선택하세요.</p>
	<button v-if="!isTileBelongToUser && selectedTile" @click="changeBankState(BankState.BUY_TILE)">토지 사기</button>
	<button v-if="isTileBelongToUser" @click="changeBankState(BankState.SELL_TILES)">토지 팔기</button>
	<button v-if="!isUserHasProperties && selectedTile" @click="changeBankState(BankState.BUY_PROPERTIES)">건물 사기</button>
	<button v-if="isUserHasProperties" @click="changeBankState(BankState.SELL_PROPERTIES)">건물 팔기</button>
	<button v-if="isTileBelongToUser && isUserHasProperties" @click="changeBankState(BankState.SELL_ALL)">함께 팔기</button>
	<button @click="$emit('end-trade')">거래 종료</button>
	<section v-if="currentBankState !== BankState.NONE" class="bank-view">
		<template v-if="currentBankState === BankState.BUY_TILE">
			선택된 토지 사기
		</template>
		<template v-else-if="currentBankState === BankState.SELL_TILES">
			<template v-if="selectedTile">
				선택된 토지 팔기
			</template>
			<template v-else>
				토지 선택한 뒤 팔기
			</template>
		</template>
		<template v-else-if="currentBankState === BankState.BUY_PROPERTIES">
			건물 사기
		</template>
		<template v-else-if="currentBankState === BankState.SELL_PROPERTIES">
			<template v-if="selectedTile">
				선택된 토지의 건물 팔기
			</template>
			<template v-else>
				토지 선택한 뒤 건물 팔기
			</template>
		</template>
		<template v-else>
			<template v-if="selectedTile">
				선택된 토지와 건물 팔기
			</template>
			<template v-else>
				토지 선택한 뒤 토지와 건물 팔기
			</template>
		</template>
	</section>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, toRefs} from 'vue';
import { Bank } from '@/shared/Bank';
import { BankState } from '@/shared/policy';
import { useStore } from "vuex";

export default defineComponent({
	name: 'TradeWithBank',
	props: {
		bankInstance: {
			type: Object as PropType<Bank>,
			required: true,
		}
	},
	emits: ['end-trade'],
	setup(props) {
		const { bankInstance } = toRefs(props);
		const {
			state: { gameInterface },
		} = useStore();
		const currentBankState = ref(BankState.NONE);
		const isTileBelongToUser = ref(false);
		const isUserHasProperties = ref(false);

		if (gameInterface.selectedTile) {
			isTileBelongToUser.value = bankInstance.value.checkOwnerOfTile(gameInterface.selectedTile, gameInterface.currentTurnUser.id);
			isUserHasProperties.value = bankInstance.value.checkOwnerHasProperties(gameInterface.selectedTile, gameInterface.currentTurnUser.id);
		}

		function changeBankState(newState: BankState) {
			currentBankState.value = newState;
		}

		return {
			BankState,
			selectedTile: computed(() => gameInterface.selectedTile),
			currentBankState,
			isTileBelongToUser,
			isUserHasProperties,
			changeBankState,
		};
	},
});
</script>