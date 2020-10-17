var sectionMetaComponent = {
	template: '#section-meta-template',

	mounted: function()
	{
		profileLoadSavedData("section.meta",this)

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
		addProfile: function()
		{
			var item = models.newDefaultMeta();
			this.$root.sections.meta.profiles.push(item);
		}
	}
};