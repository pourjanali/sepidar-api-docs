window.onload = function() {
  
  //<editor-fold desc="Changeable Configuration Block">
  window.ui = SwaggerUIBundle({
    // FIX: Pointing to your 'sepidar-api.json' file
    url: "sepidar-api.json", 
    "dom_id": "#swagger-ui",
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    queryConfigEnabled: false, // As per your original file
  })
  
  //</editor-fold>

};
