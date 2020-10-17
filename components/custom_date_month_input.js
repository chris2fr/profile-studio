Vue.component("custom-date-month-input", {
	template: '#custom-date-month-input-template',

	props: [
		'localid',
		"storageid",
		"id",
		"value"
	],

	mounted: function()
	{
		profileLoadSavedData(this.storageid,this);
		this[this.localid] = this.value;
		//console.log(this.localid + " > " + this[this.localid]);
	},

	destroyed: function()
	{
		
	},

	data: function()
	{
		var ret = {}
		ret[this.localid] = this[this.localid]
		return {
			ret
		};
	},

	methods: {
		profileUpdateDate: function(event)
		{
			storage.setLocalStorage(this.storageid,this.$el.value);
			this.value = this.$el.value;

			//this[this.localid] = this.$el.value;
			//console.log(this.$el.value);
			//console.log(this.localid + ">" + this[this.localid]);
		},
	}
});