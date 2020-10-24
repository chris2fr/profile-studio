/**
 * Create a Helpers object to keep functions out of the global namespace space.
 */
var storage = {

    getCurrentVersion: function()
    {
        console.log("storage getCurrentVersion" + this.getLocalStorage('sections.meta.version'));

        return this.getLocalStorage('sections.meta.version');
    },

    getAvailableVersions: function()
    {
        return storage.getLocalStorage("versions");
    },

    setLocalStorage: function(key, value)
    {
        var jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    },

    setVersionedLocalStorage: function(version, key, value)
    {
        var jsonValue = JSON.stringify(value);
        key = "versions." + version + "." + key;
        localStorage.setItem(key, jsonValue);
        this.versions = [];
        if (this.getLocalStorage("versions")) {
            this.versions = this.getLocalStorage("versions");
        }
        if (!this.versions.includes(version)) {
            this.versions.push(version);
        }
        // versions.push(version);
        // console.log([version, key, value, versions]);

        this.setLocalStorage("versions",this.versions);
    },

    getLocalStorage: function(key)
    {
        // console.log(key);
        return this.parseJSON2Native(localStorage.getItem(key));
    },
    /*
    * @TODO optimize
    */ 
    getVersionedLocalStorage: function(version, key)
    {
        return this.getLocalStorage("versions." + version + "." + key);
    },

    clearLocalStorage: function(key)
    {
        localStorage.removeItem(key);
    },

    parseJSON2Native: function(jsonValue) {
        var value = null;
        
        if (jsonValue)
        {
            value = JSON.parse(jsonValue);
        }
        
        return value;
    }

}