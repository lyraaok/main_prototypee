(function(window, undefined) {
  var dictionary = {
    "9f8bbd29-229b-436d-9231-93a8ef955878": "Plant List",
    "59cfb8ce-218b-478d-85b3-ce2035fa303e": "Plant Details",
    "283d83b9-c6aa-42f8-8cd9-ef9a5129a2cc": "Reminder",
    "a4282c6d-6273-493e-bce9-e405d60f6920": "Plant Detail 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "938a0422-c9fb-4911-969c-2a7a993af839": "Plant Detail 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);