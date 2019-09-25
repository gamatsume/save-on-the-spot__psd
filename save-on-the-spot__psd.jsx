(function(){

	var docObj = activeDocument;
	var file_path = activeDocument.path;
	var docName = docObj.name;
	var replaceName = docName.replace(/(\.gif|\.jpg|\.png|.eps)/g,'')
	var file_name = replaceName + ".psd";
	var file_fullname = file_path + "/" + file_name;
 
	var psd_obj = new File(file_fullname);
	var psd_save_opt = new PhotoshopSaveOptions();
	psd_save_opt.alphaChannels = true;
	psd_save_opt.annotations = true;
	psd_save_opt.embedColorProfile = false;
	psd_save_opt.layers = true;
	psd_save_opt.spotColors = false;
	activeDocument.saveAs(psd_obj, psd_save_opt, true, Extension.LOWERCASE);

	activeDocument.close(SaveOptions.DONOTSAVECHANGES);

})();