var sectionBasicsComponent = {
	template: '#section-basics-template',

	mounted: function()
	{
		var savedData = storage.getLocalStorage("section.basics");

		if (savedData)
		{
			// Data previously saved.
			this.data = savedData;

			for (var key in savedData) 
			{
				if (savedData.hasOwnProperty(key)) 
				{
					//console.log(key + " > " + savedData[key]);
					this[key] = savedData[key];
				}
			}
		}
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
			var item = models.newDefaultBasic();
			this.$root.sections.basics.profiles.push(item);
		},

		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this interest?");

			if (response == true)
			{
				this.$root.sections.basics.profiles.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.basics.profiles, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.basics.profiles, index, index + 1);
		}
	
	}
};