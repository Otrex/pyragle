import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
	state : {
		menu : {current: null}
	},
	mutations : {
		setCurrentSideBar : (state, data)=>{
			state.menu.current = data
		},
	},
	actions : {
		goto : function(context, data){
			context.setCurrentSideBar(data)
			/// Fetch data
		}
		
	}

})