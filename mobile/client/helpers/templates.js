/**
 * Global templates helpers

if (Package.ui) {
  	var UI = Package.ui.UI;
  	var HTML = Package.htmljs.HTML; // implied by `ui`
  	Package.ui.UI.registerHelper('famous', UI.block(function () {
    	var self = this;
    	return function () {
      		var text = UI.toRawText(self.__content, self /*parentComponent* /);
      		return HTML.Raw(text);
    	};
  	}));
}
 */