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
		this[this.storageid] = this.value;
		console.log(this.storageid  + " > " + this[this.storageid])
		console.log(this.localid + " > " + this[this.localid]);
	},

	destroyed: function()
	{
		
	},

	data: function()
	{
		return {

		};
	},
	watch: {
		/**
		 * Watch all data for changes
		 */
		$data: {
			handler: function(val, oldVal) 
			{
				// Save the data to localStorage
				//NOTE: I'm initially not concerned about performance here/
				//storage.setLocalStorage("section.basics", val);

				//this.$root.sections.basics = val;
				
			},
			deep: true
		}
	},

	methods: {

	}
});